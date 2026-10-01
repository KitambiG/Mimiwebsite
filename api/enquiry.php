<?php
declare(strict_types=1);
// Requires a PHP host with mail delivery configured. Never report success on failure.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function respond(int $status, string $message, bool $success = false): void {
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(405, 'Please submit the enquiry form.');
if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST);
    $host = explode(':', $_SERVER['HTTP_HOST'] ?? '')[0];
    if (!$origin || strcasecmp($origin, $host) !== 0) respond(403, 'This request is not allowed.');
}
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) respond(415, 'JSON required.');
$raw = file_get_contents('php://input', false, null, 0, 16001);
if ($raw === false || strlen($raw) > 16000) respond(413, 'Enquiry too large.');
$data = json_decode($raw, true);
if (!is_array($data)) respond(400, 'Please check your enquiry.');
$fields = ['size','email','first','last','property','type','country','phone','properties','priority'];
foreach ($fields as $field) {
    if (!isset($data[$field]) || !is_string($data[$field]) || trim($data[$field]) === '' || strlen($data[$field]) > 300) respond(422, 'Please complete all enquiry fields.');
    $data[$field] = trim($data[$field]);
}
if (!empty($data['website'])) respond(422, 'Unable to process this enquiry.');
if (!in_array($data['size'], ['1–10 rooms or units','11–49 rooms or units','50+ rooms or units'], true)) respond(422, 'Choose your property size.');
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $data['email'])) respond(422, 'Enter a valid email address.');
if (!ctype_digit($data['properties']) || (int)$data['properties'] < 1 || (int)$data['properties'] > 10000) respond(422, 'Enter a valid number of properties.');
// Per-address cooldown prevents rapid duplicate enquiries; no submitted details are stored.
$key = hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$lock = @fopen(sys_get_temp_dir() . '/mimi-enquiry-' . $key, 'c+');
if (!$lock || !flock($lock, LOCK_EX)) respond(503, 'Sending is temporarily unavailable. Please try again later.');
$last = (int)stream_get_contents($lock);
if ($last && time() - $last < 60) respond(429, 'Please wait a minute before sending another enquiry.');
$plans = ['1–10 rooms or units'=>'Starter','11–49 rooms or units'=>'Professional','50+ rooms or units'=>'Enterprise'];
$body = "New Mimi enquiry / personalised demo request\n\nSuggested plan: " . $plans[$data['size']] . "\n";
$labels = ['size'=>'Rooms / units','email'=>'Email','first'=>'First name','last'=>'Last name','property'=>'Property / company','type'=>'Property type','country'=>'Country','phone'=>'Phone / WhatsApp','properties'=>'Number of properties','priority'=>'Main priority'];
foreach ($labels as $field => $label) $body .= $label . ': ' . str_replace(["\r", "\n"], ' ', $data[$field]) . "\n";
$headers = ['From: Mimi Website <info@mimiapp.co.tz>', 'Reply-To: ' . $data['email'], 'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8'];
$sent = function_exists('mail') && @mail('info@mimiapp.co.tz', 'Mimi website enquiry and demo request', $body, implode("\r\n", $headers));
if (!$sent) respond(503, 'We could not send your enquiry. Please try again or email info@mimiapp.co.tz.');
rewind($lock); ftruncate($lock, 0); fwrite($lock, (string)time()); fflush($lock); flock($lock, LOCK_UN); fclose($lock);
respond(200, 'Your enquiry has been sent. We will be back within one hour during working hours. — Mimi team', true);

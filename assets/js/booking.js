/* Local booking draft only. No availability request, payment or reservation is sent. */
(function () {
  'use strict';
  var form = document.querySelector('.booking-form');
  var panels = Array.from(form.querySelectorAll('fieldset'));
  var steps = Array.from(document.querySelectorAll('.booking-progress li'));
  var next = form.querySelector('.booking-next');
  var back = form.querySelector('.booking-back');
  var error = document.getElementById('booking-error');
  var saved = document.getElementById('booking-saved');
  var review = document.querySelector('.booking-review');
  var checkin = form.elements.checkin, checkout = form.elements.checkout;
  var current = 0;
  function dateString(date) {
    return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
  }
  function nextDay(value) {
    var parts = value.split('-').map(Number);
    return dateString(new Date(parts[0], parts[1] - 1, parts[2] + 1));
  }
  function nights() {
    return Math.round((Date.parse(checkout.value) - Date.parse(checkin.value)) / 86400000);
  }
  function validateDates() {
    checkin.min = dateString(new Date());
    checkout.min = checkin.value ? nextDay(checkin.value) : nextDay(checkin.min);
    checkout.setCustomValidity(checkin.value && checkout.value && checkout.value <= checkin.value ? 'Choose a check-out date after your check-in date.' : '');
    var count = nights();
    document.getElementById('stay-summary-text').textContent = count > 0 ? count + (count === 1 ? ' night' : ' nights') + ' · ' + form.elements.adults.value + ' adults · ' + form.elements.children.value + ' children · ' + form.elements.rooms.value + ' room(s)' : 'Choose your dates to plan your stay.';
  }
  function formatDate(value) { return new Date(value + 'T12:00:00').toLocaleDateString(undefined, {day:'numeric',month:'short',year:'numeric'}); }
  function entries() {
    return [
      ['Property',form.elements.property.value.trim()],['Stay type',form.elements.stayType.value],
      ['Check-in',formatDate(checkin.value)],['Check-out',formatDate(checkout.value)],['Duration',nights() + ' night(s)'],
      ['Guests',form.elements.adults.value + ' adult(s), ' + form.elements.children.value + ' child(ren)'],['Rooms',form.elements.rooms.value],
      ['Guest name',form.elements.guestName.value.trim()],['Email',form.elements.email.value.trim()],
      ['Phone',form.elements.phone.value.trim() || 'Not provided'],['Special requests',form.elements.requests.value.trim() || 'None']
    ];
  }
  function showStep(index, focus) {
    current = index;
    panels.forEach(function (panel, i) { panel.hidden = i !== index; panel.disabled = i !== index; });
    steps.forEach(function (step, i) { step.classList.toggle('complete', i < index); if (i === index) step.setAttribute('aria-current','step'); else step.removeAttribute('aria-current'); });
    back.hidden = index === 0;
    next.textContent = index === 2 ? 'Download booking draft ↓' : index === 1 ? 'Review your stay →' : 'Continue to guest details →';
    error.textContent = ''; saved.textContent = '';
    if (index === 2) {
      review.replaceChildren();
      entries().forEach(function (entry) { var dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = entry[0]; dd.textContent = entry[1]; review.append(dt,dd); });
    }
    if (focus) panels[index].querySelector('legend').focus();
  }
  form.addEventListener('input', validateDates);
  form.addEventListener('change', validateDates);
  back.addEventListener('click', function () { showStep(current - 1, true); });
  form.addEventListener('submit', function (event) {
    event.preventDefault(); validateDates();
    // Validate every completed panel, including dates if the page was left open overnight.
    panels.forEach(function (panel, i) { panel.disabled = i > current; });
    var invalid = Array.from(form.elements).find(function (field) { return field.willValidate && !field.checkValidity(); });
    if (invalid) {
      showStep(panels.indexOf(invalid.closest('fieldset')), false);
      error.textContent = 'Please check the highlighted field before continuing.';
      invalid.reportValidity(); invalid.focus(); return;
    }
    if (current < 2) { showStep(current + 1, true); return; }
    var text = 'MIMI — BOOKING DRAFT\nNot submitted. No availability, price or reservation is confirmed.\n\n' + entries().map(function (entry) { return entry[0] + ': ' + entry[1]; }).join('\n') + '\n\nContact your chosen property directly to check availability and book.\n';
    var url = URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
    var link = document.createElement('a'); link.href = url; link.download = 'mimi-booking-draft.txt'; document.body.append(link); link.click(); link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    saved.textContent = 'Your draft download has started. Nothing has been sent or booked. Contact your chosen property to arrange your stay.';
    panels.forEach(function (panel, i) { panel.disabled = i !== current; });
  });
  form.querySelectorAll('input[type="text"],textarea').forEach(function (field) {
    field.addEventListener('input', function () { field.setCustomValidity(field.required && !field.value.trim() ? 'Please enter this information.' : ''); });
  });
  validateDates(); showStep(0, false);
})();

/* Mimi's three-step enquiry and demo flow. Delivery requires the configured endpoint. */
(function () {
  "use strict";
  var dialog = document.createElement("dialog");
  dialog.className = "start-dialog";
  dialog.setAttribute("aria-labelledby", "start-title");
  dialog.innerHTML = `
    <button type="button" class="start-close" aria-label="Close get started">×</button>
    <img class="mimi-wordmark start-logo" src="assets/img/mimiapp-logo.png" alt="Mimi App" width="6121" height="1671">
    <ol class="start-progress" aria-label="Your progress"><li><b>1</b><span>Your stays</span></li><li><b>2</b><span>Your email</span></li><li><b>3</b><span>Your business</span></li></ol>
    <h2 id="start-title" tabindex="-1"></h2><p class="start-intro"></p>
    <p class="start-selected-plan" aria-live="polite"></p><form class="start-form" novalidate><div class="start-honeypot" aria-hidden="true"><label>Leave empty<input name="website" tabindex="-1" autocomplete="off"></label></div>
      <fieldset data-step="0"><legend class="start-sr">How many rooms or units do you manage?</legend>
        <div class="start-sizes">
          <label><input type="radio" name="size" value="1–10 rooms or units" required><span><i aria-hidden="true">⌂</i><strong>1–10</strong><small>Rooms or units</small></span></label>
          <label><input type="radio" name="size" value="11–49 rooms or units" required><span><i aria-hidden="true">▦</i><strong>11–49</strong><small>Rooms or units</small></span></label>
          <label><input type="radio" name="size" value="50+ rooms or units" required><span><i aria-hidden="true">◇</i><strong>50+</strong><small>Rooms or units</small></span></label>
        </div>
      </fieldset>
      <fieldset data-step="1" hidden disabled><legend class="start-sr">Your email</legend>
        <div class="field"><label for="start-email">Work email</label><input type="email" id="start-email" name="email" autocomplete="email" required placeholder="you@yourproperty.com" maxlength="254"></div>
        <p class="start-note">Your details will be sent to the Mimi team when you select Send enquiry. Read our <a href="privacy.html">privacy policy</a>.</p>
      </fieldset>
      <fieldset data-step="2" hidden disabled><legend class="start-sr">Your hospitality business</legend>
        <div class="field-row"><div class="field"><label for="start-first">First name *</label><input id="start-first" name="first" autocomplete="given-name" required maxlength="80"></div><div class="field"><label for="start-last">Last name *</label><input id="start-last" name="last" autocomplete="family-name" required maxlength="80"></div></div>
        <div class="field-row"><div class="field"><label for="start-property">Property or company *</label><input id="start-property" name="property" autocomplete="organization" required maxlength="160"></div><div class="field"><label for="start-country">Country *</label><input id="start-country" name="country" autocomplete="country-name" required maxlength="100" placeholder="e.g. Tanzania"></div></div>
        <div class="field-row"><div class="field"><label for="start-phone">Phone / WhatsApp *</label><input id="start-phone" name="phone" type="tel" autocomplete="tel" required maxlength="40" placeholder="Include country code"></div><div class="field"><label for="start-properties">Number of properties *</label><input id="start-properties" name="properties" type="number" min="1" max="10000" step="1" value="1" required></div></div>
        <div class="field"><label for="start-priority">What matters most?</label><select id="start-priority" name="priority"><option>Managing reservations</option><option>Front-office operations</option><option>Housekeeping</option><option>Payments and reporting</option><option>Managing multiple properties</option><option>Exploring the whole platform</option></select></div>
      </fieldset>
      <p class="start-error" role="alert"></p>
      <div class="start-navigation"><button type="button" class="btn btn-ghost start-back">Back</button><button type="submit" class="btn btn-primary start-next">Continue</button></div>
    </form>
    <div class="start-review" hidden><dl></dl><p class="start-note">Check your details, then send your enquiry to info@mimiapp.co.tz. You can request a demo through this same enquiry.</p><div class="start-navigation"><button type="button" class="btn btn-ghost start-edit">Edit details</button><button type="button" class="btn btn-ghost start-copy">Copy details</button><button type="button" class="btn btn-primary start-send">Send enquiry</button></div><p class="start-send-error start-error" role="alert"></p><p class="start-copy-status" role="status"></p><textarea class="start-copy-fallback" aria-label="Enquiry text to copy" readonly hidden></textarea></div>
    <div class="start-success" hidden><div class="start-success-icon" aria-hidden="true">✓</div><p>Your enquiry has been sent to the Mimi team.</p><p>We’ll be back within <strong>one hour during working hours.</strong></p><p>Thank you for choosing Mimi.<br>— Mimi team</p><button class="btn btn-primary start-done" type="button">Done</button></div><p class="start-login">Already using Mimi? <a href="login.html">Log in →</a></p>`;
  document.body.appendChild(dialog);
  var form = dialog.querySelector("form"), steps = Array.from(form.querySelectorAll("fieldset"));
  var step = 0, opener, summary = "", payload = null, sending = false;
  var plans = {"1–10 rooms or units":"Starter","11–49 rooms or units":"Professional","50+ rooms or units":"Enterprise"};
  function updatePlan() { dialog.querySelector(".start-selected-plan").textContent = form.elements.size.value ? plans[form.elements.size.value] + " · " + form.elements.size.value : ""; }
  form.addEventListener("change", updatePlan);
  var titles = ["How many rooms or units do you manage?", "Let’s start with your email", "Tell us about your hospitality business"];
  var intros = ["Count the rooms, tents or apartments across your properties.", "Use the email you would like associated with your enquiry.", "Help us understand your stays and what your team needs."];
  function showStep(value) {
    step = value;
    dialog.querySelector(".start-success").hidden = true;
    dialog.querySelector(".start-progress").hidden = false;
    updatePlan();
    steps.forEach(function (panel, i) { panel.hidden = i !== step; panel.disabled = i !== step; });
    dialog.querySelectorAll(".start-progress li").forEach(function (item, i) { item.classList.toggle("done", i < step); item.classList.toggle("current", i === step); if (i === step) item.setAttribute("aria-current", "step"); else item.removeAttribute("aria-current"); });
    dialog.querySelector("#start-title").textContent = titles[step];
    dialog.querySelector(".start-intro").textContent = intros[step];
    dialog.querySelector(".start-back").hidden = step === 0;
    dialog.querySelector(".start-next").textContent = step === 2 ? "Review enquiry" : "Continue";
    dialog.querySelector(".start-error").textContent = "";
    dialog.querySelector(".start-review").hidden = true;
    form.hidden = false;
    dialog.querySelector("#start-title").focus();
    dialog.scrollTop = 0;
  }
  function open(event, type) {
    if (typeof dialog.showModal !== "function") return;
    event.preventDefault();
    opener = event.currentTarget;
    if (opener.hasAttribute("data-hero-start")) {
      var priority = document.querySelector('input[name="heroPriority"]:checked');
      if (priority) form.elements.priority.value = priority.value;
    }
    if (type) form.elements.type.value = type;
    var selectedSize = opener.getAttribute("data-start-size");
    if (selectedSize && plans[selectedSize]) { form.elements.size.value = selectedSize; step = 0; }
    if (sending) { dialog.showModal(); document.body.classList.add("start-open"); return; }
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
    var menu = document.querySelector(".nav-toggle");
    if (menu) menu.setAttribute("aria-expanded", "false");
    dialog.showModal(); document.body.classList.add("start-open"); showStep(step);
  }
  document.querySelectorAll("a").forEach(function (link) {
    if (/^(get started|book (a |your )?(free )?demo|request (a )?(free )?demo|start demo|talk to sales)/i.test(link.textContent.trim()) || link.hasAttribute("data-get-started")) link.addEventListener("click", function (event) { open(event); });
  });
  var types = {"hotel-management-software.html":"Hotel", "safari-lodge-management-software.html":"Safari lodge", "safari-camp-management-software.html":"Safari camp", "lodge-management-software.html":"Resort", "multi-property.html":"Property group"};
  document.querySelectorAll(".hero-selector-grid a").forEach(function (link) {
    var type = types[link.getAttribute("href")];
    if (type) link.addEventListener("click", function (event) { open(event, type); });
  });
  dialog.querySelector(".start-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("close", function () { document.body.classList.remove("start-open"); if (opener) opener.focus(); });
  dialog.querySelector(".start-back").addEventListener("click", function () { showStep(step - 1); });
  dialog.querySelector(".start-edit").addEventListener("click", function () { showStep(2); });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    steps.forEach(function(panel, i) { panel.disabled = i > step; });
    var invalid = Array.from(form.elements).find(function(field) { return field.willValidate && !field.checkValidity(); });
    if (invalid) { var panelIndex = steps.indexOf(invalid.closest("fieldset")); if (panelIndex >= 0) showStep(panelIndex); invalid.reportValidity(); return; }
    if (!form.reportValidity()) { dialog.querySelector(".start-error").textContent = "Please complete the required fields before continuing."; return; }
    if (step < 2) { showStep(step + 1); return; }
    steps.forEach(function (panel) { panel.disabled = false; });
    var data = new FormData(form);
    var entries = [["Suggested plan",plans[data.get("size")]], ["Rooms / units", data.get("size")], ["Email",data.get("email")], ["Name",data.get("first") + " " + data.get("last")], ["Property / company",data.get("property")], ["Country",data.get("country")], ["Phone",data.get("phone")], ["Properties",data.get("properties")], ["Main priority",data.get("priority")]];
    var list = dialog.querySelector(".start-review dl"); list.replaceChildren();
    entries.forEach(function (entry) { var term = document.createElement("dt"), detail = document.createElement("dd"); term.textContent = entry[0]; detail.textContent = entry[1]; list.append(term, detail); });
    payload = Object.fromEntries(data.entries());
    summary = "Mimi get started enquiry\n\n" + entries.map(function (entry) { return entry.join(": "); }).join("\n");
    form.hidden = true; dialog.querySelector(".start-review").hidden = false;
    dialog.querySelector("#start-title").textContent = "Your stays. Your next step.";
    dialog.querySelector(".start-intro").textContent = "Review your details before sharing them.";
    dialog.querySelector(".start-copy-status").textContent = "";
    dialog.querySelector(".start-copy-fallback").hidden = true;
    dialog.querySelector("#start-title").focus(); dialog.scrollTop = 0;
  });

  dialog.querySelector(".start-done").addEventListener("click", function () { dialog.close(); form.reset(); step = 0; payload = null; });
  dialog.querySelector(".start-send").addEventListener("click", async function () {
    if (sending || !payload) return;
    var endpoint = window.MIMI_ENQUIRY_ENDPOINT;
    var error = dialog.querySelector(".start-send-error");
    error.textContent = "";
    if (!endpoint || location.protocol === "file:") { error.textContent = "Email submission needs a configured web server. Please email info@mimiapp.co.tz or copy your details below."; return; }
    sending = true;
    var send = dialog.querySelector(".start-send"), edit = dialog.querySelector(".start-edit");
    send.disabled = true; edit.disabled = true; send.textContent = "Sending…";
    var controller = new AbortController(), timeout = setTimeout(function () { controller.abort(); }, 20000);
    try {
      var response = await fetch(endpoint, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),signal:controller.signal});
      var result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.message || "We could not send your enquiry. Please try again or email info@mimiapp.co.tz.");
      dialog.querySelector(".start-review").hidden = true;
      dialog.querySelector(".start-success").hidden = false;
      dialog.querySelector(".start-progress").hidden = true;
      dialog.querySelector("#start-title").textContent = "Thank you. You’re on your way.";
      dialog.querySelector(".start-intro").textContent = "";
      dialog.querySelector("#start-title").focus(); dialog.scrollTop = 0;
      form.reset(); step = 0; payload = null; updatePlan();
    } catch (problem) {
      error.textContent = problem.name === "AbortError" ? "We could not confirm whether your enquiry was sent. Please email info@mimiapp.co.tz before trying again." : (problem instanceof SyntaxError || problem instanceof TypeError ? "Email submission is unavailable. Please email info@mimiapp.co.tz or copy your enquiry." : problem.message);
    } finally { clearTimeout(timeout); sending = false; send.disabled = false; edit.disabled = false; send.textContent = "Send enquiry"; }
  });

  dialog.querySelector(".start-copy").addEventListener("click", async function () {
    try { await navigator.clipboard.writeText(summary); dialog.querySelector(".start-copy-status").textContent = "Enquiry copied. You can now paste it into a message."; }
    catch (_) { var text = dialog.querySelector(".start-copy-fallback"); text.value = summary; text.hidden = false; text.focus(); text.select(); dialog.querySelector(".start-copy-status").textContent = "Select and copy the enquiry below."; }
  });
})();

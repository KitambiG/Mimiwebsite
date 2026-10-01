/* Mimi — site interactions */
(function () {
  "use strict";

  /* Sticky nav shadow on scroll */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }
  /* Mobile submenu accordions */
  document.querySelectorAll(".mobile-menu .m-top").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.closest(".m-group");
      if (group) group.classList.toggle("open");
    });
  });
  /* Close mobile menu when navigating */
  document.querySelectorAll(".mobile-menu a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    });
  });

  /* Product availability: Mimi is live on the web; the native mobile app is upcoming. */
  document.querySelectorAll('a[href="#login"]').forEach(function (link) {
    link.href = "login.html";
    link.setAttribute("aria-label", "Log in to the Mimi web app");
  });

  document.querySelectorAll('a[href="mobile.html"]').forEach(function (link) {
    if (!link.querySelector(".soon-label")) {
      var label = document.createElement("span");
      label.className = "soon-label";
      label.textContent = "Coming soon";
      link.appendChild(label);
    }
  });

  if (/\/mobile\.html$/.test(window.location.pathname)) {
    document.title = "Mimi Mobile — Coming Soon | Mimi";
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = "The Mimi mobile app is coming soon. Use the complete Mimi hospitality management platform now at app.mimiapp.co.tz.";

    var mobileHero = document.querySelector(".page-hero");
    if (mobileHero) {
      var eyebrow = mobileHero.querySelector(".eyebrow");
      var heading = mobileHero.querySelector("h1");
      var lead = mobileHero.querySelector(".lead");
      var action = mobileHero.querySelector(".btn");
      if (eyebrow) eyebrow.textContent = "Mobile App · Coming Soon";
      if (heading) heading.textContent = "Mimi Mobile Is Coming Soon";
      if (lead) lead.textContent = "Mimi is available today as a complete web app. Manage your property from any modern browser while we prepare the dedicated mobile app.";
      if (action) {
        action.href = "https://app.mimiapp.co.tz";
        action.textContent = "Open the Web App";
      }
    }

    var mobileIntro = document.querySelector(".section-tight .split > .reveal:last-child");
    if (mobileIntro) {
      var introEyebrow = mobileIntro.querySelector(".eyebrow");
      var introHeading = mobileIntro.querySelector("h2");
      var introLead = mobileIntro.querySelector(".lead");
      if (introEyebrow) introEyebrow.textContent = "Coming Soon";
      if (introHeading) introHeading.textContent = "Built for Work on the Move";
      if (introLead) introLead.textContent = "The upcoming Mimi mobile app will keep your team connected to live property operations wherever work takes them. Until then, Mimi works on mobile through your browser.";
    }
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Pricing monthly / annual toggle */
  var priceToggle = document.querySelector(".price-toggle");
  if (priceToggle) {
    var btns = priceToggle.querySelectorAll("button");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        btns.forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        var mode = b.getAttribute("data-mode");
        document.querySelectorAll("[data-price-monthly]").forEach(function (el) {
          el.style.display = mode === "monthly" ? "" : "none";
        });
        document.querySelectorAll("[data-price-annual]").forEach(function (el) {
          el.style.display = mode === "annual" ? "" : "none";
        });
      });
    });
  }

  /* Demo enquiries use the shared Get Started flow and its delivery endpoint. */

  /* Graceful image fallback — swap failed photos for themed gradient blocks */
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (img && img.tagName === "IMG" && img.classList.contains("u-img")) {
      var wrap = img.closest(".photo, .post-img");
      if (wrap) wrap.classList.add("img-fail");
    }
  }, true);

  /* Footer year */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();

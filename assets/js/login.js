(function () {
  'use strict';
  document.getElementById('login-year').textContent = new Date().getFullYear();
  var carousel = document.querySelector('.destination-carousel');
  var slides = Array.from(carousel.querySelectorAll('.destination-slide'));
  var dots = Array.from(carousel.querySelectorAll('.carousel-dots button'));
  var pause = carousel.querySelector('[data-carousel="pause"]');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var index = 0, paused = reduced.matches, timer;
  carousel.querySelector('.carousel-controls').hidden = false;
  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach(function (slide, i) { slide.hidden = i !== index; });
    dots.forEach(function (dot, i) { dot.setAttribute('aria-pressed', String(i === index)); });
  }
  function schedule() {
    clearInterval(timer);
    pause.textContent = paused ? '▶' : 'Ⅱ';
    pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    if (!paused && !document.hidden && !carousel.matches(':hover') && !carousel.contains(document.activeElement)) {
      timer = setInterval(function () { show(index + 1); }, 6500);
    }
  }
  dots.forEach(function (dot, i) { dot.addEventListener('click', function () { show(i); schedule(); }); });
  carousel.querySelector('[data-carousel="previous"]').addEventListener('click', function () { show(index - 1); schedule(); });
  carousel.querySelector('[data-carousel="next"]').addEventListener('click', function () { show(index + 1); schedule(); });
  pause.addEventListener('click', function () { paused = !paused; schedule(); });
  carousel.addEventListener('mouseenter', schedule);
  carousel.addEventListener('mouseleave', schedule);
  carousel.addEventListener('focusin', schedule);
  carousel.addEventListener('focusout', function () { setTimeout(schedule, 0); });
  document.addEventListener('visibilitychange', schedule);
  reduced.addEventListener('change', function () { if (reduced.matches) paused = true; schedule(); });
  schedule();
})();

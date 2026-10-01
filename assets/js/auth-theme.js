(function () {
  'use strict';
  function update() {
    var hour = Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Dar_es_Salaam', hour: '2-digit', hourCycle: 'h23' }).format(new Date()));
    var theme = hour >= 6 && hour < 18 ? 'light' : 'dark';
    document.documentElement.dataset.authTheme = theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#08352a' : '#fbf9f5';
  }
  update();
  setInterval(update, 30000);
  document.addEventListener('visibilitychange', update);
})();

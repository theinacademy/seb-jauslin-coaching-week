(function () {
  'use strict';

  // Founding cohort offer ends May 31, 2026 at 23:59 CEST (Europe/Zurich = UTC+2)
  var TARGET = new Date('2026-05-31T21:59:00Z');

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function updateCountdowns() {
    var now = new Date();
    var diff = TARGET.getTime() - now.getTime();
    var els = document.querySelectorAll('[data-countdown]');
    if (!els.length) return;

    if (diff <= 0) {
      els.forEach(function (el) { el.textContent = ''; });
      var bar = document.querySelector('.announcement-bar');
      if (bar) {
        bar.style.display = 'none';
        setBarOffset();
      }
      return;
    }

    var total = Math.floor(diff / 1000);
    var d = Math.floor(total / 86400);
    var h = Math.floor((total % 86400) / 3600);
    var m = Math.floor((total % 3600) / 60);
    var s = total % 60;
    var text = d + 'd : ' + pad(h) + 'h : ' + pad(m) + 'm : ' + pad(s) + 's';

    els.forEach(function (el) { el.textContent = text; });
  }

  function setBarOffset() {
    var bar = document.querySelector('.announcement-bar');
    var h = (bar && bar.style.display !== 'none') ? bar.offsetHeight : 0;
    document.documentElement.style.setProperty('--bar-h', h + 'px');
  }

  function initBar() {
    var bar = document.querySelector('.announcement-bar');
    if (!bar) return;

    if (localStorage.getItem('announcement-dismissed') === '1') {
      bar.style.display = 'none';
      setBarOffset();
      return;
    }

    setBarOffset();

    var btn = bar.querySelector('.announcement-bar__dismiss');
    if (btn) {
      btn.addEventListener('click', function () {
        bar.style.display = 'none';
        localStorage.setItem('announcement-dismissed', '1');
        setBarOffset();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initBar();
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
    window.addEventListener('resize', setBarOffset);
  });
}());

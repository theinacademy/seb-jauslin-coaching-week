(function () {
  var TARGET = new Date('2026-05-14T12:00:00Z'); // [TIME_TBD] — update to actual event time in UTC

  function update() {
    var el = document.getElementById('countdown-text');
    if (!el) return;

    var now = Date.now();
    var diff = TARGET.getTime() - now;

    if (diff <= 0) {
      el.parentElement.style.display = 'none';
      return;
    }

    var days    = Math.floor(diff / 86400000);
    var hours   = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000) / 60000);

    if (days >= 2) {
      el.textContent = days + ' days to go';
    } else if (days === 1) {
      el.textContent = 'Tomorrow — ' + hours + 'h ' + minutes + 'm';
    } else if (hours >= 1) {
      el.textContent = hours + 'h ' + minutes + 'm to go';
    } else {
      el.textContent = minutes + ' minutes to go';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    update();
    setInterval(update, 60000);
  });
})();

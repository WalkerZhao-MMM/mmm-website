// Language menu: close on outside click or Escape. Works without JS as a plain <details>.
(function () {
  var menus = document.querySelectorAll('details.mmm-lang');
  if (!menus.length) return;
  document.addEventListener('click', function (e) {
    menus.forEach(function (d) { if (d.open && !d.contains(e.target)) d.open = false; });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    menus.forEach(function (d) {
      if (d.open) { d.open = false; d.querySelector('summary').focus(); }
    });
  });
})();

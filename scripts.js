document.getElementById("year").textContent = new Date().getFullYear();

(function () {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(toggle => {
    const nav = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!nav) return;

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('open')) return;
      const clickedInsideNav = nav.contains(event.target);
      const clickedToggle = toggle.contains(event.target);
      if (!clickedInsideNav && !clickedToggle) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();

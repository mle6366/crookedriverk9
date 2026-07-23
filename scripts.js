document.getElementById("year").textContent = new Date().getFullYear();

(function () {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(toggle => {
    const nav = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!nav) return;
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
})();

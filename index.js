(function () {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  const SCROLL_THRESHOLD = 300; // px scrolled before button appears

  function toggleButtonVisibility() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Throttle scroll events for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleButtonVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });

  scrollBtn.addEventListener('click', scrollToTop);

  // Run once on load in case the page loads already scrolled
  toggleButtonVisibility();
})();
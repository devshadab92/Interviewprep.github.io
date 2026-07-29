// Highlight active TOC link based on scroll position
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section.topic[id]');
  const links = document.querySelectorAll('nav.toc a[href^="#"]');
  const map = {};
  links.forEach(l => map[l.getAttribute('href').slice(1)] = l);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = map[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));

  // Sidebar collapse / expand toggle
  const toggleBtn = document.getElementById('navToggle');
  const navEl = document.querySelector('nav.toc');
  if (toggleBtn && navEl) {
    toggleBtn.addEventListener('click', function () {
      navEl.classList.toggle('collapsed');
      document.body.classList.toggle('nav-collapsed');
    });
  }
});

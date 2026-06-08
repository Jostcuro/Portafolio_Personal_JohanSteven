document.addEventListener('DOMContentLoaded', () => {

  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const icon = themeToggle?.querySelector('i');

  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  icon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';

  themeToggle?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    icon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  });

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', navMenu?.classList.contains('active'));
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  const skillCards = document.querySelectorAll('.skill-card');
  if (skillCards.length && 'IntersectionObserver' in window) {
    skillCards.forEach(card => card.classList.add('skill-hidden'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const cards = entry.target.querySelectorAll('.skill-card');
        cards.forEach((card, i) => {
          const delay = parseInt(card.dataset.delay) || i * 100;
          setTimeout(() => {
            card.classList.remove('skill-hidden');
            card.classList.add('skill-show');
          }, delay);
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    const grid = document.querySelector('.skills-grid');
    if (grid) observer.observe(grid);
  } else {
    skillCards.forEach(card => {
      card.classList.add('skill-show');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

});

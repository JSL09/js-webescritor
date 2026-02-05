document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    sections.forEach((section) => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  sections.forEach((section) => observer.observe(section));
});

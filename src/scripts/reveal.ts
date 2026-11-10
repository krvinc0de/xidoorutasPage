// Revelado al hacer scroll para todo elemento .reveal. Sin JS, o con «reducir movimiento», todo queda visible.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

if ('IntersectionObserver' in window && !reduce) {
  root.classList.add('js');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in'); else io.observe(el);
  });
}


export {};

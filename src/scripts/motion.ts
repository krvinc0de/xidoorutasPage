// Movimiento de la línea de ruta, el patrón de contorno y las entradas con GSAP (inicio y Aplicación).
// Todo es opcional por página: si un bloque no existe, no hace nada. Con «reducir movimiento» no se anima nada.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

// Línea de ruta y autobús
const journey = document.querySelector<HTMLElement>('[data-journey]');
const fill = document.querySelector<HTMLElement>('[data-rail-fill]');
const bus = document.querySelector<SVGElement>('[data-rail-bus]');
const rows = journey ? Array.from(journey.querySelectorAll<HTMLElement>('.stop-row')) : [];
let ticking = false;
function updateRail() {
  ticking = false;
  if (!journey || !fill || !bus) return;
  const r = journey.getBoundingClientRect();
  const y = Math.min(Math.max(window.innerHeight * 0.55 - r.top, 0), r.height);
  fill.style.height = `${y}px`;
  bus.style.transform = `translateY(${y}px)`;
  rows.forEach((row) => row.classList.toggle('passed', row.offsetTop + row.offsetHeight / 2 <= y));
}

// Patrón de contorno: filas en sentidos opuestos
const wm = document.querySelector<HTMLElement>('[data-wordmark]');
const wmRows = wm ? Array.from(wm.querySelectorAll<HTMLElement>('.wm')) : [];
function updateWordmark() {
  if (reduce || !wm) return;
  const r = wm.getBoundingClientRect();
  const t = Math.min(Math.max((window.innerHeight - r.top) / (window.innerHeight + r.height), 0), 1) - 0.5;
  wmRows.forEach((row) => { row.style.transform = `translateX(calc(-50% + ${t * 18 * Number(row.dataset.shift)}vw))`; });
}

window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(() => { updateRail(); updateWordmark(); }); }
}, { passive: true });
window.addEventListener('resize', updateRail);
updateRail(); updateWordmark();

// GSAP: el teléfono del hero entra girando y flota; las capturas entran inclinadas hacia la línea
if (!reduce) {
  gsap.registerPlugin(ScrollTrigger);
  root.classList.add('gsap');
  const hero = document.querySelector('.hero-shot');
  if (hero) {
    gsap.timeline({ delay: 0.25 })
      .from(hero, { y: 90, rotation: -7, scale: 0.86, autoAlpha: 0, duration: 1.2, ease: 'back.out(1.5)' })
      .to(hero, { y: -10, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  }
  document.querySelectorAll<HTMLImageElement>('.stop-row .pic img').forEach((img) => {
    const dir = img.closest('.stop-row')?.hasAttribute('data-flip') ? -1 : 1;
    gsap.timeline({ scrollTrigger: { trigger: img, start: 'top 88%', once: true } })
      .from(img, { y: 120, x: -40 * dir, rotation: 8 * dir, rotationY: -18 * dir, scale: 0.85, autoAlpha: 0, duration: 1.15, ease: 'back.out(1.3)' });
    gsap.fromTo(img, { yPercent: 6 }, { yPercent: -6, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });
}

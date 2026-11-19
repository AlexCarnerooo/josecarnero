/* Interacciones globales: cabecera, menú móvil y revelado al hacer scroll. */

const header = document.querySelector<HTMLElement>('[data-header]');
const nav = header?.querySelector<HTMLElement>('.site-nav');
const toggle = header?.querySelector<HTMLButtonElement>('[data-menu-toggle]');

/* Cabecera: sólida al hacer scroll, se oculta al bajar y reaparece al subir */
if (header) {
  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    const menuOpen = nav?.classList.contains('is-open');
    header.classList.toggle('is-hidden', !menuOpen && y > 400 && y > lastY);
    lastY = y;
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
}

/* Menú móvil */
if (nav && toggle) {
  const label = toggle.querySelector('.sr-only');
  const setOpen = (open: boolean) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Cerrar menú' : 'Abrir menú';
    document.documentElement.style.overflow = open ? 'hidden' : '';
    header?.classList.toggle('is-open', open);
    if (open) header?.classList.remove('is-hidden');
    header?.classList.toggle('is-scrolled', open || window.scrollY > 24);
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => e.matches && setOpen(false));
}

/* Revelado al hacer scroll */
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && revealables.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}

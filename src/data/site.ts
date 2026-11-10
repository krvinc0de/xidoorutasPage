// Datos compartidos por todas las páginas: menú, pie y redes.

export type NavLink = { href: string; label: string };

export const nav: NavLink[] = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#trayectoria', label: 'Trayectoria' },
  { href: '/aplicacion.html', label: 'Aplicación' },
  { href: '/contacto.html', label: 'Contacto' },
];

export const login: NavLink = { href: '/iniciar-sesion.html', label: 'Inicia sesión' };

export const cta: NavLink = { href: '/#avisame', label: 'Avísame' };

export const footer = {
  site: { href: 'https://www.xidoorutas.com', label: 'xidoorutas.com' },
  handle: '@XidooRutas',
  tag: '#ConectandoLaCiudad',
  socials: [
    { href: 'https://www.instagram.com/xidoorutas/', label: 'Instagram' },
    { href: 'https://twitter.com/RutasXidoo', label: 'X / Twitter' },
    { href: 'https://www.facebook.com/XidooRutas', label: 'Facebook' },
  ] satisfies NavLink[],
};

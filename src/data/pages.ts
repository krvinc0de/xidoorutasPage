// Contenido de las páginas interiores: Aplicación, Contacto e Iniciar sesión.
import type { IconName } from '../components/ui/icons';

export const app = {
  meta: {
    title: 'Aplicación · Xidoo Rutas',
    description: 'Descarga Xidoo Rutas: rutas del transporte público, cultura, comercio local y avisos oficiales de Salamanca en una sola app.',
  },
  eyebrow: 'Aplicación',
  title: 'Descarga',
  accent: 'Xidoo Rutas.',
  lede: 'Estamos trabajando para que puedas usar Xidoo Rutas lo antes posible.',
  shot: { src: '/img/app/rutas.png', width: 282, height: 556, alt: 'Pantalla de rutas de Xidoo Rutas sobre el mapa del centro de Salamanca' },
  services: {
    eyebrow: 'Qué trae la app',
    title: 'Cuatro servicios, una sola app.',
    lede: 'Rutas, cultura, comercio local y avisos oficiales, pensados para quien vive en Salamanca y para quien la visita.',
  },
  waitlist: {
    title: 'Te avisamos cuando esté lista.',
    text: 'Deja tu correo y te mandaremos un mensaje cuando Xidoo Rutas esté lista para descargar.',
  },
};

export const contact = {
  meta: {
    title: 'Contacto · Xidoo Rutas',
    description: 'Escríbele al equipo de Xidoo Rutas: dudas, propuestas para tu negocio o avisos para la comunidad de Salamanca.',
  },
  eyebrow: 'Contacto',
  title: 'Habla con',
  accent: 'nosotros.',
  lede: 'Llena este formulario y nosotros te contactamos.',
  channels: [
    { icon: 'pin', label: 'Ubicación', value: 'Salamanca, Guanajuato' },
    { icon: 'ext', label: 'Instagram', value: '@xidoorutas', href: 'https://www.instagram.com/xidoorutas/' },
    { icon: 'ext', label: 'X / Twitter', value: '@RutasXidoo', href: 'https://twitter.com/RutasXidoo' },
    { icon: 'ext', label: 'Facebook', value: 'XidooRutas', href: 'https://www.facebook.com/XidooRutas' },
  ] satisfies { icon: IconName; label: string; value: string; href?: string }[],
  form: {
    title: 'Escríbenos',
    success: '¡Gracias, {nombre}! Recibimos tu mensaje y te contactaremos pronto.',
  },
};

export type Benefit = { icon: IconName; title: string; text: string };
export const login = {
  meta: {
    title: 'Iniciar sesión · Xidoo Rutas',
    description: 'Muy pronto podrás iniciar sesión en Xidoo Rutas y crear el perfil de tu negocio.',
  },
  eyebrow: 'Iniciar sesión',
  title: 'Muy pronto',
  accent: 'podrás entrar.',
  status: 'Próximamente',
  lede: 'Muy pronto habilitaremos el inicio de sesión para que puedas acceder a la plataforma de Xidoo Rutas.',
  benefits: {
    eyebrow: 'Para comercios y anunciantes',
    title: 'Lo que podrás hacer con tu cuenta.',
    items: [
      { icon: 'store', title: 'Conecta con los salmantinos', text: 'Da a conocer tu negocio: solo bríndanos la ubicación y el nombre, y nosotros nos encargamos del resto.' },
      { icon: 'clock', title: 'Siempre disponible', text: 'Xidoo Rutas estará disponible siempre para ti y para los usuarios que ven tu contenido.' },
      { icon: 'sliders', title: 'Personalizable', text: 'Mantén tu estilo con las diferentes formas de personalizar tu perfil, seas comerciante o anunciante.' },
      { icon: 'user', title: 'Tu perfil', text: 'Crea tu perfil de negocio o comerciante con un par de clics.' },
      { icon: 'live', title: 'Rápido', text: 'Trabajamos todos los días para que no tengas ningún problema al usar Xidoo Rutas.' },
      { icon: 'plus', title: 'Y más', text: 'Xidoo Rutas trae aún más funciones que están por salir. Espéralas.' },
    ] satisfies Benefit[],
  },
};

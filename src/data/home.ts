// Contenido del inicio. Cambiar textos aquí no toca el marcado de las secciones.
import type { IconName } from '../components/ui/icons';

export const hero = {
  eyebrow: 'Salamanca, Guanajuato',
  title: ['Tu ciudad,', 'en movimiento.'],
  lede: 'Rutas, horarios y tarifas del transporte público salmantino, junto con cultura, comercio local y avisos oficiales. Todo en una sola app.',
  primary: { href: '#avisame', label: 'Avísame cuando salga' },
  secondary: { href: 'https://www.youtube.com/watch?v=yP6a73tT6c8', label: 'Ver el video' },
  shot: { src: '/img/app/rutas.png', width: 282, height: 556, alt: 'Pantalla de rutas de Xidoo Rutas con las líneas sobre el mapa del centro de Salamanca' },
};

export type Fact = { value: string; text: string };
export const facts: Fact[] = [
  { value: '2.º lugar nacional', text: 'CONIES 2021, emprendimiento tecnológico, entre 100 universidades' },
  { value: '4 servicios', text: 'Rutas, cultura, comercio local y avisos oficiales en una app' },
  { value: 'Hecha en Salamanca', text: 'Por cinco estudiantes de la UTS, desde 2020' },
];

export type Service = {
  icon: IconName; tag: string; title: string; text: string;
  img: { src: string; width: number; height: number; alt: string };
};
export const services = {
  eyebrow: 'Servicios',
  title: 'Todo lo que la ciudad necesitaba, en un solo recorrido.',
  lede: 'Xidoo Rutas mejora el transporte público, impulsa el comercio local y hace llegar la información a quien la necesita.',
  items: [
    { icon: 'route', tag: 'Transporte público', title: 'Rutas de transporte',
      text: 'Conoce las rutas del transporte público y planea tus viajes sin perder tiempo. Si vienes de visita, recorre la ciudad de forma segura.',
      img: { src: '/img/app/rutas.png', width: 282, height: 556, alt: 'Mapa con las rutas de transporte' } },
    { icon: 'church', tag: 'Sitios y eventos', title: 'Ruta Cultural',
      text: 'Conoce los lugares de interés de la ciudad que visitas. Así se fortalece la comunidad y se difunde su cultura.',
      img: { src: '/img/app/ruta-cultural.png', width: 264, height: 519, alt: 'Mapa de sitios culturales de Salamanca' } },
    { icon: 'store', tag: 'Para comerciantes', title: 'Comercios Locales',
      text: 'Damos espacio a los comercios locales y pequeños negocios para que crezcan frente a la alta demanda de productos extranjeros.',
      img: { src: '/img/app/comercios-locales.png', width: 213, height: 421, alt: 'Pantalla de negocios locales' } },
    { icon: 'mega', tag: 'Información de la ciudad', title: 'Anuncios de la Comunidad',
      text: 'Entérate a tiempo de lo que sucede en tu ciudad, desde un sitio de difusión oficial.',
      img: { src: '/img/app/anuncios.png', width: 214, height: 423, alt: 'Pantalla de anuncios oficiales' } },
  ] satisfies Service[],
};

export type Milestone = { date: string; datetime: string; title: string; text: string; highlight?: boolean };
export const timeline = {
  eyebrow: 'Trayectoria',
  title: 'De proyecto escolar a segundo lugar nacional.',
  items: [
    { date: 'SEP 2020', datetime: '2020-09', title: 'El inicio', text: 'Nace como idea de proyecto escolar y crece más allá de una app de rutas.' },
    { date: 'DIC 2020', datetime: '2020-12', title: 'Gran recepción', text: 'La primera exposición de la idea gana el apoyo del público.' },
    { date: 'ENE 2021', datetime: '2021-01', title: 'Comienza el desarrollo', text: 'Bocetos, interfaces, modelado y la primera página web.' },
    { date: 'JUN 2021', datetime: '2021-06', title: 'Primer prototipo', text: 'Prototipos funcionales con las primeras funciones.' },
    { date: 'NOV 2021', datetime: '2021-11', title: '2.º lugar nacional', text: 'CONIES 2021, edición Tamaulipas, categoría emprendimiento tecnológico.', highlight: true },
    { date: 'DIC 2021', datetime: '2021-12', title: 'Últimos escalones', text: 'Mostramos el avance de los prototipos al público.' },
    { date: 'ABR 2022', datetime: '2022-04', title: 'Versión de prueba', text: 'El público prueba la app móvil y las plataformas web.' },
  ] satisfies Milestone[],
};

export const wordmark = { tag: '#ConectandoLaCiudad' };

export const waitlist = {
  title: 'Sé de los primeros en usarla.',
  text: 'Déjanos tu correo y te avisamos cuando Xidoo Rutas esté lista para descargar.',
  stores: [
    { label: 'Google Play', status: 'Próximamente en' },
    { label: 'App Store', status: 'Próximamente en' },
  ],
};

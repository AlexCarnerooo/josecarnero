/**
 * Datos centrales del sitio. Cambia aquí horarios, contacto o enlaces
 * y se actualizan en todas las páginas.
 */

export const site = {
  name: 'José Carnero',
  title: 'José Carnero · Ashtanga & Rocket Yoga en Ferrol',
  description:
    'Clases de Ashtanga y Rocket Yoga en Ferrol con José Carnero. Práctica basada en la alineación, la respiración y la biomecánica. Talleres y retiros.',
  url: 'https://josecarnero.org',
  locale: 'es_ES',
};

export const contact = {
  email: 'jcarnerovillar@gmail.com',
  phone: '+34637312106',
  phoneDisplay: '637 312 106',
  instagram: 'jose_carnero_yoga',
  get instagramUrl() {
    return `https://www.instagram.com/${this.instagram}/`;
  },
  whatsapp(text = 'Hola José, me gustaría información sobre las clases de yoga.') {
    return `https://wa.me/${this.phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
  },
};

export const studio = {
  name: 'Ashtanga Yoga Ferrol',
  street: 'Rúa Alcalde Usero, 23',
  postalCode: '15403',
  city: 'Ferrol',
  region: 'A Coruña',
  mapsUrl: 'https://maps.app.goo.gl/N3XZY4VcXQ17bvMb7',
};

export type ClassSlot = { start: string; end: string; style: string };
export type ClassDay = { day: string; slots: ClassSlot[] };

export const schedule: ClassDay[] = [
  {
    day: 'Lunes',
    slots: [
      { start: '08:00', end: '09:00', style: 'Ashtanga Yoga' },
      { start: '20:45', end: '22:15', style: 'Ashtanga Yoga' },
    ],
  },
  {
    day: 'Miércoles',
    slots: [
      { start: '08:00', end: '09:00', style: 'Ashtanga Yoga' },
      { start: '20:45', end: '22:15', style: 'Ashtanga Yoga' },
    ],
  },
];

export const credentials = [
  { title: 'Rocket Nivel 2', detail: 'David Kyle · Milán, 2025' },
  { title: '250 h Rocket', detail: 'Ricardo Martín, Darvina Plante, Manu Oria, David Cabezas' },
  { title: '50 h Biomecánica y ajustes', detail: 'Formación complementaria' },
  { title: 'RYT 200 h', detail: 'Formación de profesor' },
];

export const teachers = [
  'Petri Räisänen',
  'Ty Landrum',
  'Mark Robberds',
  'Tarik Van Prehn',
  'David Kyle',
  'Ricardo Martín',
  'Cosmin Iancu',
  'Tiago Rocha',
  'Angelo Cecchi',
];

export const nav = [
  { href: '/sobre-mi/', label: 'Sobre mí' },
  { href: '/clases/', label: 'Clases' },
  { href: '/eventos/', label: 'Eventos' },
];

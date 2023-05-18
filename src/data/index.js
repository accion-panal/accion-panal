import { iconsList } from '@/components/icons';

const { SiFastly } = iconsList;

const { GiArtificialIntelligence } = iconsList;

const { MdSecurity } = iconsList;

const { GiReceiveMoney } = iconsList;

const { BsFillHouseDoorFill } = iconsList;

const { BiTimer } = iconsList;

const { GiPositionMarker } = iconsList;

const { SlBadge } = iconsList;

export const navigationData = [
  {
    id: 1,
    name: 'Inicio',
    href: 'inicio-section',
  },
  {
    id: 2,
    name: 'Nosotros',
    href: 'nosotros-section',
  },
  {
    id: 3,
    name: 'Servicios',
    href: 'servicios-section',
    children: [
      {
        id: 1,
        name: 'Panal',
        href: 'panal-services',
      },
      {
        id: 2,
        name: 'Yo Kanjeo',
        href: 'yo-kanjeo-services',
      },
      {
        id: 3,
        name: 'Página web',
        href: 'pagina-web-services',
      },
    ],
  },
  {
    id: 4,
    name: 'Contacto',
    href: 'contacto-section',
  },
  {
    id: 5,
    name: 'Intranet',
    href: 'http://190.114.255.247:195',
  },
];

/** HOME - LE APOSTAMOS A LA ERA DIGITAL */
export const digitalAgeCardData = [
  {
    id: 1,
    title: 'Optimiza tu tiempo',
    desc: 'Te brindamos soluciones que te permitirán gestionar de manera más rápida y sencilla los procesos',
    icon: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684250353/Projects/accion-panal/img/icons/svg/1_hwzcmc.svg',
  },
  {
    id: 2,
    title: 'Mayor productividad',
    desc: 'Mejora las métricas de eficiencia de tu negocio con la tecnología con la que desarrollamos nuestras herramientas',
    icon: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684250376/Projects/accion-panal/img/icons/svg/2_gbahjc.svg',
  },
  {
    id: 3,
    title: 'Ganancias',
    desc: 'Con nuestras herramientas tendrás más oportunidades de cerrar negocios',
    icon: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684250376/Projects/accion-panal/img/icons/svg/3_zktq1i.svg',
  },
];

/** HOME - SERVICIOS */

export const servicesData = [
  {
    id: 1,
    title: 'Software Inmobiliario',
    subtitle: 'Panal',
    desc: 'Mejora las métricas de eficiencia de tu negocio con la tecnología con la que desarrollamos nuestras herramientas.',
    href: '#panal-section',
    src: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684359442/Projects/accion-panal/img/about/png/laptop_pf8rqk.png',
  },
  {
    id: 2,
    title: 'Sistema avanzado de canje',
    subtitle: 'Yo Kanjeo',
    desc: 'Sistema de canje basado en la inteligencia de datos, que te mostrara las unidades disponibles y optimizara el proceso para que sea efectivo.',
    href: '#yo-kanjeo-section',
    src: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684360059/Projects/accion-panal/img/about/png/image3png_khl2vp.png',
  },
  {
    id: 3,
    title: 'Desarrollo Web',
    subtitle: 'Páginas Web',
    desc: 'Desarrollo y diseño de sitios web responsivos para corredores inmobiliarios, con la que podrás sincronizar tus publicaciones con nuestro integrador y hacer crecer tu marca.',
    href: '#paginas-web-section',
    src: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684360057/Projects/accion-panal/img/about/png/image2png_eyn9nw.png',
  },
];

/* ABOUT SECTION */

export const mainInfoAbout = [
  {
    id: 1,
    title:
      'Aportamos valor a la labor del corredor de propiedades junto a la innovación',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684360056/Projects/accion-panal/img/about/png/image1png_tqxv3w.png',
    children: [
      {
        id: 1,
        strongName: 'Acción Panal',
        name: 'nace de la necesidad de nuevas e innovadoras herramientas que ayuden a optimizar el corretaje inmobiliario. Creamos un proyecto que cree firmemente en la era digital y la evolución del mercado inmobiliario en Chile.',
      },
      {
        id: 2,
        strongName: '',
        name: 'Somos una empresa dedicada al desarrollo de Software y herramientas que van orientadas a la mejora del trabajo del corredor, creadas con inteligencia artificial y análisis de datos.',
      },
    ],
  },
];

export const statsClients = [
  {
    id: 1,
    stats: 300,
    title: 'Ejecutivos inmobiliarios trabajan con nosotros.',
  },
  {
    id: 2,
    stats: 7000,
    title: 'Publicaciones en nuestra plataforma Panal.',
  },
  {
    id: 3,
    stats: 10000,
    title: 'Visitas de clientes potenciales a nuestra plataforma.',
  },
];

export const dataAlianzaCarousel = [
  {
    id: 1,
    title: 'TrueCapital',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684292268/Projects/accion-panal/img/logo/png/truecapital_tdeyxk.png',
    href: 'https://www.truecapital.cl/',
  },
  {
    id: 2,
    title: 'Partners and Advisers',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684292270/Projects/accion-panal/img/logo/png/partners_y8vcbr.png',
    href: 'https://partnersadvisers.cl/',
  },
  {
    id: 3,
    title: 'AssetPlan',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684292267/Projects/accion-panal/img/logo/png/assetplan_b9ktgj.png',
    href: 'https://www.assetplan.cl/',
  },
];

export const dataClientsCarousel = [
  {
    id: 1,
    title: 'Unne',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684292395/Projects/accion-panal/img/logo/png/unne_original_1_i4xuyk.png',
    href: 'https://unne.cl/',
  },
  {
    id: 2,
    title: 'Aulen Propiedades',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684336830/Projects/accion-panal/img/logo/png/aulen_edited_ddti8l.png',
    href: 'https://aulenpropiedades.cl/',
  },
  {
    id: 3,
    title: 'Rukam',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684336830/Projects/accion-panal/img/logo/png/rukam_edited_kgn7m3.png',
    href: '',
  },
];

/*SERVICIOS */

export const dataPortalCarousel = [
  {
    id: 1,
    title: 'Portal inmobiliario',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/portalinmobiliario_caidlw.png',
    href: 'https://www.portalinmobiliario.com/',
  },
  {
    id: 2,
    title: 'Toc toc',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/toctoc_m7xp0v.png',
    href: 'https://www.toctoc.com/',
  },
  {
    id: 3,
    title: 'Yapo',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/yapo_rloeg8.png',
    href: 'https://new.yapo.cl/',
  },
  {
    id: 4,
    title: 'Top Propiedades',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/topPropiedades_m5wkgw.png',
    href: 'https://www.toppropiedades.cl/',
  },
];

export const KanjeCard = [
  {
    id: 1,
    title: 'SISTEMA INTELIGENTE',
    desc: 'Nuestro sistema te ayudará a conseguir de manera sencilla y eficaz la propiedad con las características adecuadas o al cliente interesado.',
    icon: <GiArtificialIntelligence />,
  },
  {
    id: 2,
    title: 'SEGURIDAD',
    desc: 'Contamos con un sistema que te brinda seguridad y transparencia en el proceso de canje.',
    icon: <MdSecurity />,
  },
  {
    id: 3,
    title: 'MAS INGRESOS',
    desc: 'Amplía tu cartera de propiedades captando nuevos y potenciales clientes y cierra las operaciones lo más pronto posible.',
    icon: <GiReceiveMoney />,
  },
];

export const BeneficIcons = [
  {
    id: 1,
    title: 'VISIBILIDAD',
    desc: 'Aumenta la visibilidad de tus propiedades para tener más posibilidades de cerrar negocios.',
    icon: <BsFillHouseDoorFill />,
  },
  {
    id: 2,
    title: 'AHORRA TIEMPO',
    desc: 'Publica y administra tu cartera de una manera fácil y eficaz para que ahorres tiempo y te dediques a arrendar o a vender.',
    icon: <BiTimer />,
  },
  {
    id: 3,
    title: 'POSICIONAMIENTO',
    desc: 'Promociona tu empresa y dale mayor posicionamiento para que compitas con los mejores corredores.',
    icon: <GiPositionMarker />,
  },

  {
    id: 4,
    title: 'PROFESIONALISMO',
    desc: 'Transmite un aspecto profesional y brinda seguridad a los clientes.',
    icon: <SlBadge />,
  },
];

export type Lang = 'es' | 'en'

export const translations: Record<Lang, {
  titulo: string
  subtitulo: string
  sobre: string
  desc: string
  servicios: string
  paquetes: string
  videoTitulo: string
  videoDesc: string
  flyerTitulo: string
  flyerDesc: string
}> = {
  es: {
    titulo: 'Lanzamiento Web',
    subtitulo: 'Páginas web profesionales para emprendedores y pequeños negocios',
    sobre: 'Sobre mí',
    desc: '¡Hola! Soy <strong>Santiago Bueno</strong>, tengo <strong>23 años</strong> y actualmente estoy estudiando la carrera de <strong>Tecnicatura Universitaria en Desarrollo de Software</strong>. Me apasiona crear páginas web modernas, funcionales y adaptadas a las necesidades de cada cliente. Busco ayudar a emprendedores y negocios a construir su presencia digital de una manera profesional y atractiva.',
    servicios: 'Mis Servicios',
    paquetes: 'Mis Paquetes',
    videoTitulo: 'Edición de Video Profesional',
    videoDesc: 'Servicios de edición de video para redes sociales, YouTube o eventos. ¡Próximamente más detalles y precios!',
    flyerTitulo: 'Diseño Gráfico y Branding',
    flyerDesc: 'Creación de logos, flyers, banners y todo lo que necesitas para la identidad visual de tu marca. ¡Próximamente más detalles y precios!',
  },
  en: {
    titulo: 'Web Launch',
    subtitulo: 'Professional websites for entrepreneurs and small businesses',
    sobre: 'About Me',
    desc: "Hi! I'm <strong>Santiago Bueno</strong>, <strong>23 years old</strong>, and I am currently studying <strong>Software Development</strong>. I am passionate about creating modern, functional websites tailored to each client's needs. I aim to help entrepreneurs and businesses build their digital presence in a professional and attractive way.",
    servicios: 'My Services',
    paquetes: 'My Packages',
    videoTitulo: 'Professional Video Editing',
    videoDesc: 'Video editing services for social media, YouTube, or events. More details and pricing coming soon!',
    flyerTitulo: 'Graphic Design & Branding',
    flyerDesc: "Creation of logos, flyers, banners, and everything you need for your brand's visual identity. More details and pricing coming soon!",
  },
}

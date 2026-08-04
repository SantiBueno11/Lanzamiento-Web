export type PlanColor = 'basico' | 'intermedio' | 'avanzado'

export interface Plan {
  title: string
  features: string[]
  price: string
  desc: string
  color: PlanColor
  formUrl: string
}

export const webPlans: Plan[] = [
  {
    title: 'Plan Básico',
    features: [
      'Página de presentación con logo y descripción',
      'Sección de contacto con WhatsApp',
      'Diseño adaptado a celulares',
    ],
    price: '$100.000',
    desc: 'Ideal para quienes comienzan su presencia online. Incluye una página profesional con tu logo, descripción y contacto por WhatsApp. Perfecto para mostrar tu negocio de forma simple y moderna.',
    color: 'basico',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfyYumcDKm0TiTBAfMRjU7OWAuCFl1eRd24lPNiwvJhSok-yw/viewform?usp=dialog',
  },
  {
    title: 'Plan Intermedio',
    features: [
      'Galería de productos o servicios',
      'Enlaces a redes sociales',
      'Diseño más personalizado',
    ],
    price: '$200.000',
    desc: 'Pensado para quienes quieren dar un paso más. Agrega galería de productos, redes sociales y un diseño más personalizado. Ideal para destacar tu marca con estilo.',
    color: 'intermedio',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdg1vK9OaNWqGwcNGLBNDItmAvuGtxCdYaiZPNzPdIzN_jFHQ/viewform?usp=dialog',
  },
  {
    title: 'Plan Avanzado',
    features: [
      'Formulario avanzado o reservas',
      'Animaciones y efectos visuales',
      'Optimización de velocidad y soporte 30 días',
    ],
    price: '$350.000',
    desc: 'Perfecto para negocios que buscan destacar. Incluye formularios avanzados, animaciones, optimización y soporte técnico por 30 días. Tu web se verá moderna, rápida y profesional.',
    color: 'avanzado',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdRutgYdUrljaLxOcoCDa2A1dao18XIzy7f9TtFFMrd-g9X3g/viewform?usp=dialog',
  },
]

export const videoPlans: Plan[] = [
  {
    title: 'Plan Reel',
    features: [
      'Edición de 1 video corto (hasta 1 min)',
      'Cortes y transiciones ágiles',
      'Música de fondo sin copyright',
    ],
    price: '$50.000',
    desc: 'Perfecto para TikToks, Reels o Shorts. Edición ágil y moderna para captar la atención en redes sociales.',
    color: 'basico',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfyYumcDKm0TiTBAfMRjU7OWAuCFl1eRd24lPNiwvJhSok-yw/viewform?usp=dialog',
  },
  {
    title: 'Plan Contenido',
    features: [
      'Edición video hasta 10 mins',
      'Corrección de color básica',
      'Gráficos y textos simples',
    ],
    price: '$120.000',
    desc: 'Ideal para videos de YouTube, tutoriales o contenido corporativo. Un acabado profesional para tu canal.',
    color: 'intermedio',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdg1vK9OaNWqGwcNGLBNDItmAvuGtxCdYaiZPNzPdIzN_jFHQ/viewform?usp=dialog',
  },
  {
    title: 'Plan Premium',
    features: [
      'Edición avanzada (multicámara)',
      'Efectos visuales y motion graphics',
      'Corrección de color profesional',
    ],
    price: '$250.000',
    desc: 'El paquete completo. Perfecto para videos musicales, anuncios o proyectos que requieren la máxima calidad.',
    color: 'avanzado',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdRutgYdUrljaLxOcoCDa2A1dao18XIzy7f9TtFFMrd-g9X3g/viewform?usp=dialog',
  },
]

export const flyerPlans: Plan[] = [
  {
    title: 'Pack Logo',
    features: [
      'Diseño de Logo (3 propuestas)',
      'Manual de marca básico',
      'Formatos para web y redes',
    ],
    price: '$80.000',
    desc: 'Define la identidad de tu marca.',
    color: 'basico',
    formUrl: '',
  },
]

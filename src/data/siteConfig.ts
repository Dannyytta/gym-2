export type ButtonVariant = "primary" | "outline";

export interface SiteConfig {
  meta: {
    title: string;
  };
  branding: {
    highlight: string;
    name: string;
    footerDescription: string;
    copyright: string;
  };
  whatsapp: {
    href: string;
    label: string;
  };
  navigation: Array<{ href: string; label: string }>;
  hero: {
    title: string;
    highlighted: string;
    suffix: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
    ctas: Array<{ href: string; label: string; variant: ButtonVariant }>;
    image: { src: string; alt: string };
  };
  services: {
    title: string;
    highlighted: string;
    description: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  classes: {
    title: string;
    highlighted: string;
    description: string;
    items: Array<{
      image: string;
      alt: string;
      name: string;
      schedule: string;
      time: string;
      cta: { href: string; label: string };
    }>;
  };
  trainers: {
    title: string;
    highlighted: string;
    description: string;
    items: Array<{
      image: string;
      alt: string;
      name: string;
      role: string;
      social: string[];
    }>;
  };
  plans: {
    title: string;
    highlighted: string;
    description: string;
    items: Array<{
      name: string;
      price: string;
      period: string;
      popular?: boolean;
      features: Array<{ label: string; included: boolean }>;
      cta: { href: string; label: string; variant: ButtonVariant };
    }>;
  };
  testimonials: {
    tag: string;
    title: string;
    highlighted: string;
    description: string;
    items: Array<{
      rating: number;
      text: string;
      image: string;
      name: string;
      detail: string;
    }>;
  };
  contact: {
    tag: string;
    title: string;
    highlighted: string;
    description: string;
    info: Array<{
      icon: string;
      title: string;
      detail: string;
      detailSecondary?: string;
    }>;
    social: string[];
    form: {
      options: Array<{ value: string; label: string }>;
      submitLabel: string;
    };
  };
  map: {
    heading: string;
    address: string;
    directions: { href: string; label: string };
    iframe: string;
  };
  footer: {
    newsletterTitle: string;
    quickLinksTitle: string;
    scheduleTitle: string;
    emergencyTitle: string;
    emergencyPhone: string;
    emergencyHref: string;
    schedule: Array<{ label: string; value: string }>;
    legalLinks: Array<{ href: string; label: string }>;
  };
}

export const siteConfig = {
  meta: {
    title: "IronFit Gym - Transforma tu cuerpo",
  },
  branding: {
    highlight: "IRON",
    name: "FIT",
    footerDescription:
      "Transforma tu cuerpo y mente con nosotros. El mejor equipamiento, entrenadores profesionales y un ambiente motivador.",
    copyright: "2025 IronFit Gym. Todos los derechos reservados.",
  },
  whatsapp: {
    href: "https://wa.me/1234567890",
    label: "WhatsApp",
  },
  navigation: [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#clases", label: "Clases" },
    { href: "#entrenadores", label: "Entrenadores" },
    { href: "#planes", label: "Planes" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ],
  hero: {
    title: "TRANSFORMA",
    highlighted: "TU VIDA",
    suffix: "HOY",
    subtitle: "Más de 10,000 miembros han cambiado sus vidas con nosotros. ¿Qué esperas?",
    stats: [
      { value: "15", label: "Entrenadores" },
      { value: "25", label: "Clases" },
      { value: "10000", label: "Miembros" },
    ],
    ctas: [
      { href: "#planes", label: "ÚNETE AHORA", variant: "primary" },
      { href: "#clases", label: "VER CLASES", variant: "outline" },
    ],
    image: {
      src:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Entrenamiento en gimnasio",
    },
  },
  services: {
    title: "LO QUE",
    highlighted: "OF RECEMOS",
    description: "Equipamiento de última generación y profesionales certificados",
    items: [
      {
        icon: "fas fa-dumbbell",
        title: "Entrenamiento Personalizado",
        description: "Programas diseñados específicamente para tus necesidades y objetivos.",
      },
      {
        icon: "fas fa-heartbeat",
        title: "Cardio Zone",
        description: "Área equipada con las mejores máquinas cardiovasculares para quemar calorías.",
      },
      {
        icon: "fas fa-weight",
        title: "Área de Pesas",
        description: "Equipos profesionales para desarrollar fuerza y masa muscular.",
      },
      {
        icon: "fas fa-swimming-pool",
        title: "Piscina",
        description: "Clases de natación y aquagym en nuestra piscina climatizada.",
      },
      {
        icon: "fas fa-spa",
        title: "Spa y Sauna",
        description: "Relájate después del entrenamiento en nuestro área de bienestar.",
      },
      {
        icon: "fas fa-utensils",
        title: "Asesoría Nutricional",
        description: "Planificación alimenticia personalizada para complementar tu entrenamiento.",
      },
    ],
  },
  classes: {
    title: "NUESTRAS",
    highlighted: "CLASES GRUPALES",
    description: "Variedad de clases para todos los niveles y objetivos",
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Crossfit",
        name: "Crossfit",
        schedule: "Lunes, Miércoles, Viernes",
        time: "8:00 AM - 9:00 AM",
        cta: { href: "#", label: "RESERVAR" },
      },
      {
        image:
          "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Yoga",
        name: "Yoga",
        schedule: "Martes, Jueves",
        time: "7:00 AM - 8:00 AM",
        cta: { href: "#", label: "RESERVAR" },
      },
      {
        image:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Spinning",
        name: "Spinning",
        schedule: "Lunes a Viernes",
        time: "6:00 PM - 7:00 PM",
        cta: { href: "#", label: "RESERVAR" },
      },
      {
        image:
          "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Boxeo",
        name: "Boxeo",
        schedule: "Martes, Jueves, Sábado",
        time: "5:00 PM - 6:00 PM",
        cta: { href: "#", label: "RESERVAR" },
      },
    ],
  },
  trainers: {
    title: "CONOCE A",
    highlighted: "NUESTRO EQUIPO",
    description: "Profesionales certificados para ayudarte a alcanzar tus metas",
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Entrenador 1",
        name: "Carlos Méndez",
        role: "Especialista en Crossfit",
        social: ["#", "#", "#"],
      },
      {
        image:
          "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Entrenador 2",
        name: "Laura Gómez",
        role: "Especialista en Yoga",
        social: ["#", "#", "#"],
      },
      {
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Entrenador 3",
        name: "Javier Rodríguez",
        role: "Especialista en Hipertrofia",
        social: ["#", "#", "#"],
      },
    ],
  },
  plans: {
    title: "ELIGE TU",
    highlighted: "MEMBRESÍA",
    description: "Flexibilidad para adaptarse a tus necesidades",
    items: [
      {
        name: "BÁSICO",
        price: "$29",
        period: "/mes",
        features: [
          { label: "Acceso a área de pesas", included: true },
          { label: "Acceso a cardio", included: true },
          { label: "Clases grupales", included: false },
          { label: "Entrenador personal", included: false },
          { label: "Acceso a piscina", included: false },
        ],
        cta: { href: "#", label: "ELEGIR PLAN", variant: "outline" },
      },
      {
        name: "ESTÁNDAR",
        price: "$49",
        period: "/mes",
        popular: true,
        features: [
          { label: "Acceso a área de pesas", included: true },
          { label: "Acceso a cardio", included: true },
          { label: "Clases grupales", included: true },
          { label: "Entrenador personal", included: false },
          { label: "Acceso a piscina", included: true },
        ],
        cta: { href: "#", label: "ELEGIR PLAN", variant: "primary" },
      },
      {
        name: "PREMIUM",
        price: "$79",
        period: "/mes",
        features: [
          { label: "Acceso a área de pesas", included: true },
          { label: "Acceso a cardio", included: true },
          { label: "Clases grupales", included: true },
          { label: "Entrenador personal", included: true },
          { label: "Acceso a piscina", included: true },
        ],
        cta: { href: "#", label: "ELEGIR PLAN", variant: "outline" },
      },
    ],
  },
  testimonials: {
    tag: "TESTIMONIOS",
    title: "LO QUE DICEN",
    highlighted: "NUESTROS CLIENTES",
    description: "Historias reales de transformación",
    items: [
      {
        rating: 5,
        text:
          "Desde que me uní a PowerGym, mi vida ha cambiado completamente. Los entrenadores son profesionales y el ambiente es increíble. He logrado resultados que nunca pensé posibles.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        name: "María González",
        detail: "Miembro desde 2020",
      },
      {
        rating: 4.5,
        text:
          "El mejor gimnasio de la ciudad. Las instalaciones son impecables y siempre están limpias. Las clases de spinning son mi favorita, el instructor es muy motivador.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Juan Pérez",
        detail: "Miembro desde 2021",
      },
      {
        rating: 5,
        text:
          "El plan nutricional personalizado combinado con el entrenamiento me ha ayudado a perder 15kg en 3 meses. Estoy más saludable y feliz que nunca. ¡Gracias PowerGym!",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Ana Martínez",
        detail: "Miembro desde 2022",
      },
    ],
  },
  contact: {
    tag: "CONTACTO",
    title: "VISÍTANOS",
    highlighted: "HOY",
    description: "Estamos aquí para ayudarte en tu viaje fitness",
    info: [
      {
        icon: "fas fa-map-marker-alt",
        title: "Dirección",
        detail: "Av. Fitness 1234, Ciudad Deportiva",
      },
      {
        icon: "fas fa-phone-alt",
        title: "Teléfono",
        detail: "+1 234 567 890",
      },
      {
        icon: "fas fa-envelope",
        title: "Email",
        detail: "info@ironfitgym.com",
      },
      {
        icon: "fas fa-clock",
        title: "Horario",
        detail: "Lunes a Viernes: 5:00 AM - 11:00 PM",
        detailSecondary: "Sábado y Domingo: 7:00 AM - 9:00 PM",
      },
    ],
    social: ["#", "#", "#", "#"],
    form: {
      options: [
        { value: "membresia", label: "Membresía" },
        { value: "clases", label: "Clases" },
        { value: "entrenador", label: "Entrenador Personal" },
        { value: "nutricion", label: "Nutrición" },
      ],
      submitLabel: "ENVIAR MENSAJE",
    },
  },
  map: {
    heading: "VISÍTANOS",
    address: "Av. Fitness 1234, Ciudad Deportiva",
    directions: {
      href: "https://maps.google.com",
      label: "CÓMO LLEGAR",
    },
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.98731792453988!3d40.75798597138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
  footer: {
    newsletterTitle: "NEWSLETTER",
    quickLinksTitle: "ENLACES RÁPIDOS",
    scheduleTitle: "HORARIO",
    emergencyTitle: "EMERGENCIA",
    emergencyPhone: "+1 234 567 890",
    emergencyHref: "tel:+1234567890",
    schedule: [
      { label: "Lunes - Viernes", value: "5:00 AM - 11:00 PM" },
      { label: "Sábado", value: "7:00 AM - 9:00 PM" },
      { label: "Domingo", value: "7:00 AM - 9:00 PM" },
    ],
    legalLinks: [
      { href: "#", label: "Términos y condiciones" },
      { href: "#", label: "Política de privacidad" },
    ],
  },
} as const satisfies SiteConfig;

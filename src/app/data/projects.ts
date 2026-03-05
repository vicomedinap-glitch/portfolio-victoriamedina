export interface Project {
  explorationImages: any;
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  brief: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "kora-identity",
    title: "KORA",
    category: "Identidad de Marca",
    year: "2026",
    role: "Dirección Creativa, Diseño de Marca",
    brief: "KORA nace como una marca de joyería contemporánea dirigida a mujeres modernas que buscan piezas con significado emocional.",
    challenge: "El reto era construir una identidad que no solo vendiera accesorios, sino que representara conexión, emoción y presencia.",
    solution: "KORA = corazón con identidad propia. El nombre parte de la palabra 'corazón', pero se resignifica con una K para darle carácter, fuerza y modernidad. La marca se construye bajo la idea de: Cada pieza es un latido. Esto convierte la joyería en símbolo emocional, no solo en accesorio. Desarrollé un sistema visual que traduce la intensidad emocional en formas orgánicas y tipografía con personalidad. La paleta cromática combina tonos tierra con un acento dorado sutil, evocando calidez y cercanía.",
    impact: "La identidad logró conectar emocionalmente con el público objetivo, generando una comunidad comprometida desde el lanzamiento. La marca se posicionó como referente de joyería con propósito.",
    image: "/img/projects/logo-kora.png",
    featured: true,
    explorationImages: ["/img/projects/ig-kora.png"]
  },
  {
    id: "Ninis-editorial",
    title: "Nini's Bakery",
    category: "Diseño Editorial",
    year: "2026",
    role: "Dirección de Arte, Diseño de Layouts",
    brief: "Marca de dulces artesanales que buscaba profesionalizar la presentación de sus productos y unificar su comunicación visual tanto en empaque como en su presencia digital. El proyecto se enfocó en crear un sistema visual claro, atractivo y funcional para productos congelados, manteniendo una estética cercana y confiable.",
    challenge: "Necesidad de legibilidad en condiciones de frío, falta de identidad visual consistente, presencia digital poco estructurada",
    solution: "Se desarrolló un sistema visual coherente que permite a la marca comunicar profesionalismo y claridad tanto en punto de venta como en entorno digital, fortaleciendo su identidad y experiencia de usuario.",
    impact: "La coherencia entre packaging y entorno digital permitió que la marca se percibiera más profesional y cercana, aumentando la recordación y la conexión con su audiencia.",
    image: "/img/projects/logo-ninis.png",
    featured: true,
    explorationImages: ["/img/projects/etiqueta-ninis.png"]
  },
  {
    id: "elinstituto-event",
    title: "Congreso de Derecho Tributario - El Instituto",
    category: "Eventos",
    year: "2025",
    role: "Dirección Creativa, Diseño de eventos",
    brief: "Evento académico dirigido a profesionales, abogados, docentes y estudiantes del área tributaria. El reto era desarrollar una identidad visual que transmitiera seriedad, autoridad y claridad, sin caer en lo rígido o anticuado.",
    challenge: "Los eventos jurídicos suelen tener identidades visuales genéricas o demasiado tradicionales. Se necesitaba una propuesta contemporánea que mantuviera credibilidad institucional, sin embargo, moderna.",
    solution: "El sistema gráfico se construyó desde la idea de estructura y precisión, conceptos vinculados al ámbito tributario. Se utilizaron formas geométricas y una paleta de colores mdoernos con acentos sobrios para transmitir profesionalismo sin perder frescura. La tipografía se seleccionó por su legibilidad y carácter, reforzando la autoridad del evento.",
    impact: "La identidad permitió posicionar el congreso como un evento académico serio y contemporáneo, reforzando su credibilidad y coherencia visual en todos los puntos de contacto con los asistentes.",
    image: "/img/projects/congreso.JPG",
    featured: true,
    explorationImages: ["/img/projects/congreso.PNG"]
  },
];
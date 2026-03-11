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
    category: "Brand Identity",
    year: "2026",
    role: "Creative Direction, Brand Design",
    brief: "KORA emerges as a contemporary jewelry brand aimed at modern women seeking pieces with emotional meaning.",
    challenge: "The challenge was to build an identity that not only sold accessories but represented connection, emotion, and presence.",
    solution: "KORA = heart with a personality of its own. The name comes from the word 'heart' but is reimagined with a K to give it character, strength, and modernity. The brand is built on the idea that each piece is a heartbeat. This turns jewelry into an emotional symbol, not just an accessory. I developed a visual system that translates emotional intensity into organic forms and typography with personality. The color palette combines earth tones with a subtle golden accent, evoking warmth and closeness.",
    impact: "The identity managed to emotionally connect with the target audience, generating a committed community from launch. The brand positioned itself as a benchmark for purpose-driven jewelry.",
    image: "/img/projects/logo-kora.png",
    featured: true,
    explorationImages: ["/img/projects/ig-kora.png"]
  },
  {
    id: "Ninis-editorial",
    title: "Nini's Bakery",
    category: "Editorial Design",
    year: "2026",
    role: "Art Direction, Layout Design",
    brief: "A handcrafted sweets brand looking to professionalize product presentation and unify its visual communication across packaging and digital presence. The project focused on creating a clear, attractive, and functional visual system for frozen products while maintaining a friendly and trustworthy aesthetic.",
    challenge: "Need for readability under cold conditions, lack of consistent visual identity, unstructured digital presence.",
    solution: "A coherent visual system was developed to allow the brand to convey professionalism and clarity both at the point of sale and in the digital environment, strengthening its identity and user experience.",
    impact: "The coherence between packaging and digital environment allowed the brand to be perceived as more professional and approachable, increasing recall and audience connection.",
    image: "/img/projects/logo-ninis.png",
    featured: true,
    explorationImages: ["/img/projects/etiqueta-ninis.png", "/img/projects/etiqueta-ninis2.png", "/img/projects/postetiqueta-ninis.jpg"]
  },
  {
    id: "elinstituto-event",
    title: "Tax Law Conference - El Instituto",
    category: "Events",
    year: "2025",
    role: "Creative Direction, Event Design",
    brief: "An academic event aimed at professionals, lawyers, educators, and students in the tax field. The challenge was to develop a visual identity that conveyed seriousness, authority, and clarity without feeling rigid or outdated.",
    challenge: "Legal events often have generic or overly traditional visual identities. A contemporary proposal was needed that maintained institutional credibility while feeling modern.",
    solution: "The graphic system was constructed from the idea of structure and precision, concepts linked to the tax field. Geometric forms and a modern color palette with sober accents were used to convey professionalism without losing freshness. The typography was chosen for its legibility and character, reinforcing the event's authority.",
    impact: "The identity helped position the conference as a serious and contemporary academic event, reinforcing its credibility and visual coherence across all touchpoints with attendees.",
    image: "/img/projects/congreso.JPG",
    featured: true,
    explorationImages: ["/img/projects/congreso.PNG", "/img/projects/congreso2.png", "/img/projects/congreso3.png", "/img/projects/congreso4.png", "/img/projects/congreso5.png"]
  },
];
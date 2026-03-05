import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Proyecto no encontrado
          </h1>
          <Link to="/" className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main 
      className="pt-20 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div 
        className="px-6 md:px-12 max-w-[1400px] mx-auto py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity mb-12">
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-4 space-y-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-xs tracking-[0.2em] opacity-40 mb-2">PROYECTO</p>
              <h1 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h1>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] opacity-40 mb-2">CATEGORÍA</p>
                <p className="text-lg">{project.category}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] opacity-40 mb-2">AÑO</p>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] opacity-40 mb-2">ROL</p>
                <p className="text-lg">{project.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 
                className="mb-6 pb-4 border-b"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  borderColor: 'var(--wine)',
                }}
              >
                El brief
              </h2>
              <p className="text-lg leading-relaxed opacity-70">
                {project.brief}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 
                className="mb-6 pb-4 border-b"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  borderColor: 'var(--wine)',
                }}
              >
                El reto
              </h2>
              <p className="text-lg leading-relaxed opacity-70">
                {project.challenge}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 
                className="mb-6 pb-4 border-b"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  borderColor: 'var(--wine)',
                }}
              >
                La solución
              </h2>
              <p className="text-lg leading-relaxed opacity-70">
                {project.solution}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 
                className="mb-6 pb-4 border-b"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  borderColor: 'var(--wine)',
                }}
              >
                Impacto
              </h2>
              <p className="text-lg leading-relaxed opacity-70">
                {project.impact}
              </p>
            </motion.section>

            {/* Visual Explorations */}
            <motion.section 
              className="pt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <h2 
                className="mb-8"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                }}
              >
                Exploración visual
              </h2>
              <motion.img 
                src={project.explorationImages?.[0]}
                alt="Visual exploration"
                className="aspect-[16/9] bg-gray-100 w-full h-full object-cover"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
            </motion.section>
            
          </div>
        </div>
      </div>

      {/* Next Project */}
      <motion.div 
        className="border-t border-black/10 py-16 px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="max-w-[1400px] mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-3 text-sm hover:opacity-60 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver todos los proyectos
          </Link>
        </div>
      </motion.div>
    </motion.main>
  );
}
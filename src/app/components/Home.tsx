import React from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 w-full items-center">
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-sm tracking-[0.2em] opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DISEÑADORA GRÁFICA
              </motion.p>
              <h1 
                className="leading-[1.1] tracking-tight" 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                  fontWeight: 300,
                }}
              >
                Diseño con{' '}
                <span className="italic" style={{ color: 'var(--wine)' }}>intención</span>,{' '}
                construyo con estrategia.
              </h1>
            </div>
            <motion.p 
              className="text-lg leading-relaxed max-w-2xl opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Creo identidades visuales que no solo se ven bien,
              sino que responden a un propósito claro.
              Cada decisión gráfica parte de análisis, 
              dirección y coherencia, para construir marcas sólidas,
              diferenciadas y preparadas para crecer.
            </motion.p>
            <motion.button 
              onClick={() => {
                document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-black hover:bg-black hover:text-white transition-all duration-300 group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src="public/img/projects/victoria.JPG"
                alt="Victoria Medina"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(93, 31, 47, 0.1))' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 300,
            }}
          >
            Casos de estudio
          </h2>
          <p className="text-lg opacity-60 max-w-2xl">
            Cada proyecto es una oportunidad para crear algo significativo. 
            Aquí selecciono trabajo que muestra proceso, estrategia y resultado.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id} 
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <Link to={`/project/${project.id}`}>
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-8 lg:gap-16 items-center`}>
                  <motion.div 
                    className={`${index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-7 lg:col-start-6'} ${index % 2 !== 0 ? 'lg:row-start-1' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                  <div className={`${index % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:col-start-1 lg:row-start-1'} space-y-6`}>
                    <div className="space-y-3">
                      <p className="text-xs tracking-[0.2em] opacity-50">
                        {project.category.toUpperCase()} · {project.year}
                      </p>
                      <h3 
                        className="group-hover:opacity-60 transition-opacity"
                        style={{ 
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                          fontWeight: 400,
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed opacity-70">
                      {project.brief}
                    </p>
                    <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--wine)' }}>
                      Ver caso completo
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Proceso Creativo */}
      <section id="proceso" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 
              className="mb-8"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: 300,
              }}
            >
              Proceso
            </h2>
            <p className="text-lg leading-relaxed opacity-70 mb-12">
              No creo solo piezas gráficas. Desarrollo sistemas visuales 
              que nacen de la estrategia y se ejecutan con sensibilidad.
            </p>
            <motion.div 
              className="aspect-[4/3] overflow-hidden bg-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyNjE1MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Proceso creativo"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-12 lg:pt-32">
            {[
              {
                number: "01",
                title: "Investigación",
                description: "Entiendo el contexto, la competencia y, sobre todo, a las personas. Cada marca habla a alguien. Mi trabajo es descubrir qué necesitan escuchar."
              },
              {
                number: "02",
                title: "Estrategia",
                description: "Defino posicionamiento, tono y dirección visual antes de crear cualquier forma. El diseño sin estrategia es decoración."
              },
              {
                number: "03",
                title: "Exploración",
                description: "Experimento sin límites. Boceto, pruebo tipografías, juego con composiciones. Es aquí donde nacen las soluciones inesperadas."
              },
              {
                number: "04",
                title: "Refinamiento",
                description: "Elimino lo innecesario. Ajusto cada detalle hasta que el sistema funcione en todos los contextos con coherencia y flexibilidad."
              },
            ].map((step, index) => (
              <motion.div 
                key={step.number} 
                className="border-l-2 pl-6 space-y-2" 
                style={{ borderColor: 'var(--wine)' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <p className="text-xs tracking-[0.2em] opacity-40">{step.number}</p>
                <h3 className="text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed opacity-70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Personal */}
      <section id="sobre-mi" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1612778367652-ec672cfeb737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGJ1cmd1bmR5fGVufDF8fHx8MTc3MjY1NTA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Abstract composition"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 
              className=""
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: 300,
              }}
            >
              Visión creativa
            </h2>
            <div className="space-y-6 text-lg leading-relaxed opacity-70">
              <p>
                Soy diseñadora gráfica con una formación que combina diseño
                de comunicación visual y bellas artes. Esta intersección 
                me permite crear trabajo que es tanto estratégico
                como estéticamente resonante.
              </p>
              <p>
                Creo que el diseño más poderoso es invisible en su complejidad pero 
                imposible de ignorar en su impacto. Me interesa la tensión entre 
                minimalismo y emoción, entre sistema y sensibilidad.
              </p>
              <p>
                He trabajado con marcas emergentes y estudios establecidos, siempre 
                buscando proyectos donde pueda aportar visión estratégica y ejecución 
                refinada. Mi enfoque es colaborativo, riguroso y profundamente humano.
              </p>
            </div>
            <div className="pt-6">
              <p className="text-sm tracking-[0.15em] opacity-50 mb-4">CONTACTO</p>
              <div className="space-y-2">
                <p className="text-lg">vicomedinap@gmail.com</p>
                <p className="text-lg">+593 99 456 7829</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm tracking-[0.2em]">VICTORIA MEDINA</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm hover:opacity-60 transition-opacity">Instagram</a>
            <a href="#" className="text-sm hover:opacity-60 transition-opacity">Facebook</a>
            <a href="#" className="text-sm hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
          <p className="text-sm opacity-40">© 2026 Todos los derechos reservados</p>
        </div>
      </footer>
    </main>
  );
}
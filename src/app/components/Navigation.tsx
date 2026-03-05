import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="text-sm tracking-[0.2em] hover:opacity-60 transition-opacity">
          VICTORIA MEDINA
        </Link>
        
        {location.pathname === '/' && (
          <motion.div 
            className="flex gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button 
              onClick={() => scrollToSection('proyectos')}
              className="text-sm tracking-wide hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Proyectos
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('proceso')}
              className="text-sm tracking-wide hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Proceso
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-sm tracking-wide hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sobre mí
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
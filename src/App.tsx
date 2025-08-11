import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              X
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              A
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl mb-8"
          >
            <p className="mb-2">Assistance</p>
            <p className="mb-2">eXperience</p>
            <p className="mb-2">Intelligence</p>
            <p>Alert</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            La próxima generación de asistencia inteligente para hoteles,
            diseñada pensando en la seguridad y comodidad de nuestros mayores.
          </motion.p>
        </motion.div>

        {/* Animated Band */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-96 h-96 rounded-full border-8 border-accent-blue opacity-20"></div>
        </motion.div>
      </section>
    </div>
  );
}

export default App; 
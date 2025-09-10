import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-accent-500/10 to-transparent animate-bg-pan" style={{ backgroundSize: '200% 200%' }}></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full filter blur-3xl opacity-40 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full filter blur-3xl opacity-40 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-lg"
          >
            <span className="block text-white/90">Hi, I'm</span>
            <span className="gradient-text drop-shadow-lg">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 drop-shadow-md">
              {personalInfo.role}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-white/40 mx-auto rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center hover:shadow-glass hover:-translate-y-0.5 duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center hover:shadow-soft hover:-translate-y-0.5 duration-200"
            >
              View My Work
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToNextSection}
              className="text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-8 h-8 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

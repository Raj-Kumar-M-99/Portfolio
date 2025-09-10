import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/90 dark:bg-black/70 backdrop-blur-md text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                {personalInfo.name}
              </span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              {personalInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Thanks for visiting my portfolio! Feel free to reach out if you'd like to collaborate or just chat about technology.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-200 mb-2">Let's Connect</h4>
            
            <div className="flex flex-col space-y-3">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </motion.a>
              
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </motion.a>
              
              <motion.a
                href={personalInfo.github || "https://github.com/raj-kumar-m"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-1 text-red-400"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              using React & TailwindCSS
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-soft transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Quick Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/10 text-center"
        >
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-brand-400 transition-colors duration-200 mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

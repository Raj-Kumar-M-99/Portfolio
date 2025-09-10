import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Briefcase, Award, Code } from 'lucide-react';
import { experiences, resumeInfo } from '../../data/portfolioData';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-3xl shadow-soft hover:shadow-glass transition-all duration-300 overflow-hidden border border-white/40 dark:border-white/20 hover-lift"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 to-accent-500"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

      <div className="ml-16 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.position}
            </h3>
            <div className="flex items-center text-brand-600 dark:text-brand-400 font-semibold mb-2">
              <Briefcase className="w-4 h-4 mr-2" />
              {experience.company}
            </div>
          </div>
          <div className="flex flex-col sm:items-end text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center mb-1">
              <Calendar className="w-4 h-4 mr-2" />
              {experience.duration}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {experience.location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
            <Award className="w-4 h-4 mr-2" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, achievementIndex) => (
              <motion.li
                key={achievementIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
            <Code className="w-4 h-4 mr-2" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium rounded-full border border-brand-200 dark:border-brand-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeInfo.downloadUrl;
    link.download = `Raj_Kumar_M_Resume_${resumeInfo.lastUpdated.replace(' ', '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="section-padding bg-gray-50/50 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            My journey in software development, from junior developer to senior roles, 
            building impactful solutions and leading teams.
          </p>
          
          {/* Resume Download CTA */}
          <motion.button
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 btn-primary px-8 py-3 shadow-glass"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last updated: {resumeInfo.lastUpdated}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white/90 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-soft"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I'm always excited to take on new challenges and contribute to meaningful projects. 
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center px-8 py-3 shadow-glass"
            >
              Get In Touch
            </motion.a>
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center px-8 py-3"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

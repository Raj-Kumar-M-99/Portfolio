import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target, Heart } from 'lucide-react';
import { personalInfo, softSkills } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-white/40 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 flex items-center justify-center">
                  <User className="w-32 h-32 text-blue-600 dark:text-blue-400" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg text-center">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Profile Picture</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800"
              >
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Experience</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Development</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
              >
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Focus</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Modern Web Technologies</p>
              </motion.div>
            </div>

            {/* Soft Skills */}
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What I Bring</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

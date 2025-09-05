import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiTypescript, SiPython, SiNodedotjs, 
  SiMongodb, SiGithub
} from 'react-icons/si';
import { Code, Server, Cloud, Database, Wrench, Cpu, Globe, Settings } from 'lucide-react';
import { skills } from '../../data/portfolioData';

// Icon mapping for the skills - using fallbacks for unavailable icons
const iconMap = {
  SiReact: SiReact,
  SiRedux: Settings,
  SiNextdotjs: Globe,
  SiAngular: Code,
  SiJavascript: SiJavascript,
  SiTypescript: SiTypescript,
  SiBootstrap: Code,
  SiTailwindcss: Code,
  SiJquery: Code,
  SiDotnet: Code,
  SiNodedotjs: SiNodedotjs,
  SiExpress: Server,
  SiCsharp: Code,
  SiPython: SiPython,
  SiFlask: Server,
  SiDjango: Server,
  SiAmazonaws: Cloud,
  SiAmazonec2: Cloud,
  SiAmazons3: Cloud,
  SiMongodb: SiMongodb,
  SiMysql: Database,
  SiMicrosoftsqlserver: Database,
  SiGithub: SiGithub,
  SiVisualstudiocode: Code,
  SiVisualstudio: Code,
  SiGit: SiGithub,
  SiBitbucket: Code,
  SiPostman: Wrench,
  SiDocker: Settings,
  SiAlgorithm: Cpu,
};

// Category icons
const categoryIcons = {
  'Frontend Development': Code,
  'Backend Development': Server,
  'Cloud': Cloud,
  'Databases': Database,
  'Tools': Wrench,
  'Other Skills': Cpu,
};

const SkillCard = ({ skill, index }) => {
  const IconComponent = iconMap[skill.icon] || Cpu;
  
  // Get icon class for brand colors
  const getIconClass = (skillName) => {
    const name = skillName.toLowerCase().replace(/[\s\.]/g, '');
    if (name.includes('react')) return 'icon-react';
    if (name.includes('javascript') || name.includes('js')) return 'icon-js';
    if (name.includes('typescript')) return 'icon-ts';
    if (name.includes('python')) return 'icon-python';
    if (name.includes('node')) return 'icon-node';
    if (name.includes('mongodb')) return 'icon-mongodb';
    if (name.includes('github')) return 'icon-github';
    if (name.includes('aws') || name.includes('ec2') || name.includes('s3')) return 'icon-aws';
    if (name.includes('docker')) return 'icon-docker';
    if (name.includes('git') && !name.includes('github')) return 'icon-git';
    if (name.includes('angular')) return 'icon-angular';
    if (name.includes('bootstrap')) return 'icon-bootstrap';
    if (name.includes('tailwind')) return 'icon-tailwind';
    if (name.includes('mysql')) return 'icon-mysql';
    if (name.includes('flask')) return 'icon-flask';
    if (name.includes('django')) return 'icon-django';
    if (name.includes('express')) return 'icon-express';
    if (name.includes('jquery')) return 'icon-jquery';
    if (name.includes('postman')) return 'icon-postman';
    if (name.includes('bitbucket')) return 'icon-bitbucket';
    if (name.includes('net') || name.includes('c#')) return 'icon-dotnet';
    if (name.includes('visual studio code')) return 'icon-vscode';
    return '';
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-white/90 dark:bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-white/30"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-300">
          <IconComponent className={`w-8 h-8 transition-all duration-300 ${getIconClass(skill.name)}`} />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-yellow-300 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, skillList, index }) => {
  const CategoryIcon = categoryIcons[category] || Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/90 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30"
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4">
          <CategoryIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillList.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-md">
            I have experience with a wide range of technologies and tools. 
            Here's my technical skill set organized by category.
          </p>
        </motion.div>

        {/* Skills Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(skills).slice(0, 4).map(([category, skillList], index) => {
            const CategoryIcon = categoryIcons[category] || Code;
            return (
              <div key={category} className="text-center">
                <div className="bg-white/90 dark:bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/30 mb-2">
                  <CategoryIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skillList.length}
                  </div>
                </div>
                <p className="text-sm text-gray-800 dark:text-white font-medium">
                  {category.split(' ')[0]}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillCategory
              key={category}
              category={category}
              skillList={skillList}
              index={index}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white/90 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/30"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Always Learning
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Technology evolves rapidly, and I'm committed to continuous learning and staying 
            up-to-date with the latest trends and best practices in software development.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center"
          >
            Let's Build Something Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

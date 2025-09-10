import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, Wrench, Cpu } from 'lucide-react';
import { skills } from '../../data/portfolioData';

// Import icons from cons folder with fallbacks
import Flask from '../../icons/Flask';
import BootStrap from '../../icons/BootStrap';
import NET from '../../icons/NET';
import Python from '../../icons/Python';
import TypeScript from '../../icons/TypeScript';
import CSharp from '../../icons/CSharp';
import Aws from '../../icons/Aws';
import JavaScript from '../../icons/JavaScript';
import Reactjs from '../../icons/Reactjs';
import ReactRedux from '../../icons/ReactRedux';
import Tailwind from '../../icons/Tailwind';
import Next from '../../icons/Next';
import Angular from '../../icons/Angular';
import JQuery from '../../icons/JQuery';
import Node from '../../icons/Node';
import Django from '../../icons/Django';
import Express from '../../icons/Express';
import Github from '../../icons/Github';
import VsCode from '../../icons/vscode';
import VisualStudio from '../../icons/VisualStudio';
import Git from '../../icons/Git';
import BitBucket from '../../icons/BitBucket';
import Postman from '../../icons/Postman';
import Docker from '../../icons/Docker';
import SQLServer from '../../icons/SQLServer';
import MongoDb from '../../icons/MongoDb';
import MySQL from '../../icons/MySQL';
import Algorithms from '../../icons/Algorithms';
import { SiAmazonec2, SiAmazons3 } from 'react-icons/si';
import { ImTree } from 'react-icons/im';

// Clean icon mapping using cons folder icons with fallbacks
const iconMap = {
  SiReact: Reactjs,
  SiRedux: ReactRedux,
  SiNextdotjs: Next,
  SiAngular: Angular,
  SiJavascript: JavaScript,
  SiTypescript: TypeScript,
  SiBootstrap: BootStrap,
  SiTailwindcss: Tailwind,
  SiJquery: JQuery,
  SiDotnet: NET,
  SiNodedotjs: Node,
  SiExpress: Express,
  SiCsharp: CSharp,
  SiPython: Python,
  SiFlask: Flask,
  SiDjango: Django,
  SiAmazonaws: Aws,
  SiAmazonec2: SiAmazonec2,
  SiAmazons3: SiAmazons3,
  SiMongodb: MongoDb,
  SiMysql: MySQL,
  SiMicrosoftsqlserver: SQLServer,
  SiGithub: Github,
  SiVisualstudiocode: VsCode,
  SiVisualstudio: VisualStudio,
  SiGit: Git,
  SiBitbucket: BitBucket,
  SiPostman: Postman,
  SiDocker: Docker,
  SiAlgorithm: Algorithms,
  SiDataStructures: ImTree
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
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-white/90 dark:bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-soft hover:shadow-glass transition-all duration-300 group border border-white/30 hover-lift"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-gray-100/80 dark:bg-white/10 rounded-lg mb-3 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-300">
          <IconComponent className="w-11 h-11 transition-all duration-300" />
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
      className="bg-white/90 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-soft border border-white/30"
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
          className="mt-16 text-center bg-white/90 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-soft"
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

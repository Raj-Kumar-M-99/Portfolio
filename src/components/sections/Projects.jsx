import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, ArrowRight } from 'lucide-react';
import { projects } from '../../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-3xl shadow-soft hover:shadow-glass transition-all duration-300 overflow-hidden border border-white/40 dark:border-white/20 hover-lift"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-brand-100 to-accent-100 dark:from-brand-900/40 dark:to-accent-900/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="h-full flex items-center justify-center">
          <Folder className="w-16 h-16 text-brand-600 dark:text-brand-400" />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-soft">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Project #{project.id}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium rounded-md border border-brand-200 dark:border-brand-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex items-center justify-between pt-4 border-t border-white/40 dark:border-white/10">
          <div className="flex space-x-3">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 px-3 py-2 bg-gray-100/80 dark:bg-white/10 hover:bg-gray-200/90 dark:hover:bg-white/15 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 text-sm"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
            
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 px-3 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors duration-200 text-sm shadow-soft"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </motion.a>
          </div>
          
          <motion.div
            whileHover={{ x: 5 }}
            className="text-brand-600 dark:text-brand-400"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-blue-900/30 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>

          <div className="w-24 h-1 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-100 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            problem-solving, and creating user-friendly applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-200 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/raj-kumar-m"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 btn-primary px-8 py-3 shadow-glass"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

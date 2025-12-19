import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt, FaEllipsisH, FaClock, FaRocket, FaBan, FaFilter } from 'react-icons/fa';

const Projects: React.FC = () => {
  const categories = ['All', 'AI / ML', 'Systems', 'Web', 'Cybersecurity', 'UI/UX', 'XR'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.4 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-widest mb-4">
            <FaRocket className="animate-bounce" /> Creative Works
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight drop-shadow-sm">
            Project Portfolio
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-10 shadow-lg shadow-cyan-500/20"></div>
          
          {/* Category Filter Navigation */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            <div className="flex items-center gap-2 mr-2 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-tighter">
              <FaFilter size={10} /> Filter By:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-500 ${
                  activeCategory === cat
                    ? 'text-white scale-110'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-xl shadow-lg shadow-cyan-500/20 z-0"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              const isLive = project.demo && project.demo !== "#";
              const hasSource = project.github && project.github !== "#";
              
              return (
                <motion.div
                  layout
                  key={`${project.title}-${index}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ 
                    layout: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="group perspective-1000 h-[22rem] cursor-pointer"
                >
                  <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180 transition-all shadow-xl group-hover:shadow-2xl rounded-3xl">
                    
                    {/* Front Face */}
                    <div className="absolute w-full h-full backface-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:bg-white/60 dark:group-hover:bg-slate-800/60">
                      <div className="absolute top-0 right-0 p-8">
                         <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center backdrop-blur-md border border-cyan-500/20 group-hover:rotate-12 transition-transform duration-500">
                            <FaGithub className="text-cyan-600 dark:text-cyan-400 text-xl" />
                          </div>
                      </div>

                      <div>
                        <div className="inline-block px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-widest mb-6">
                          {project.category}
                        </div>
                        
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-[10px] font-black text-slate-600 dark:text-slate-400 bg-slate-200/50 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-300/30 dark:border-white/5 uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 px-1 py-1">+ {project.tech.length - 3}</span>
                        )}
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-900/95 dark:bg-black/95 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-8 flex flex-col justify-between">
                      
                      <motion.div 
                        variants={detailVariants}
                        initial="hidden"
                        whileInView="show"
                        className="flex-1 flex flex-col items-start w-full relative"
                      >
                        <h4 className="text-xl font-black text-white mb-4 tracking-tight border-b-2 border-cyan-500/30 pb-2 w-full">{project.title}</h4>
                        
                        {/* Description with Truncation Indicator */}
                        <div className="relative group/desc w-full max-h-32 overflow-hidden">
                          <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                            {project.description}
                          </p>
                          {/* Subtly fading gradient and ellipsis to signal truncation */}
                          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900 dark:from-black to-transparent pointer-events-none flex items-end justify-center pb-1">
                            <FaEllipsisH className="text-cyan-500/30 text-[10px] animate-pulse" />
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-1.5 opacity-60">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-[9px] font-bold text-cyan-400">#{t}</span>
                          ))}
                        </div>
                      </motion.div>
                      
                      <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                        {hasSource ? (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border border-white/10 hover:border-cyan-500/50"
                          >
                            <FaGithub /> Source
                          </a>
                        ) : (
                          <div 
                            className="flex items-center justify-center gap-2 py-3 bg-slate-800/30 text-slate-600 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-slate-700/30 cursor-not-allowed opacity-50"
                          >
                            <FaBan size={10} /> Private
                          </div>
                        )}
                        
                        {isLive ? (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-cyan-500/20 transition-all transform hover:scale-105"
                          >
                            <FaExternalLinkAlt size={10} /> View Demo
                          </a>
                        ) : (
                          <a 
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="flex items-center justify-center gap-2 py-3 bg-slate-800/50 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-slate-700/50 cursor-not-allowed group/pending relative overflow-hidden"
                          >
                            <FaClock size={10} className="animate-pulse" /> Pending
                            <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover/pending:translate-x-[100%] transition-transform duration-1000"></div>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Call to action for more projects */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 text-center"
        >
          <a 
            href="https://github.com/OrionGD?tab=repositories" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition-colors font-bold text-sm flex items-center justify-center gap-2 group"
          >
            See all 15+ repositories on GitHub <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Internal utility for the CTA
const FaArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default Projects;
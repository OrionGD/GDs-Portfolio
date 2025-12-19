import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { FaGithub, FaFileDownload, FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider mb-4 uppercase text-sm">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light">
            {PERSONAL_INFO.role}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-300 dark:hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>

            <a 
              href="assets/resume.pdf"
              download="Godfrey_TR_Resume.pdf"
              className="px-8 py-3 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-300 dark:hover:bg-white/10 transition-all flex items-center gap-2"
              aria-label="Download Resume"
            >
              <FaFileDownload /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
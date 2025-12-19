import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
              About Me
            </h3>
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-8 rounded-2xl shadow-sm dark:shadow-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                I build intelligent, user centric software systems using full stack development, AI integration, and strong UX principles. A concise, high impact statement that immediately communicates your core value.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
              Education
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-cyan-500"></div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-1">{edu.institution}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
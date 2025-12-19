import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-48px] w-px bg-slate-300 dark:bg-slate-700 -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="md:w-5/12"></div>
                
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-cyan-500 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full"></div>
                </div>

                <div className="md:w-5/12 bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-6 rounded-xl hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
                  <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs rounded-full mb-3 border border-cyan-200 dark:border-cyan-500/20">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                  <h4 className="text-slate-500 dark:text-slate-400 text-sm mb-4">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
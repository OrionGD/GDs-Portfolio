import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, LEADERSHIP_XR } from '../constants';
import { FaAward, FaUsers } from 'react-icons/fa';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <FaAward className="text-cyan-500" />
              Certifications & Achievements
            </h3>
            
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-white/5 border-l-4 border-cyan-500 p-6 rounded-r-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
                >
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cert.title}</h4>
                  {cert.year && <span className="text-xs text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded mb-2 inline-block">{cert.year}</span>}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <FaUsers className="text-violet-500" />
              Leadership & XR
            </h3>
            
            <div className="grid gap-4">
              {LEADERSHIP_XR.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-200 dark:border-white/5 hover:border-violet-500/50 transition-all shadow-sm dark:shadow-none"
                >
                  <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
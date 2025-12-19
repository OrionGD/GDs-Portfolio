import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { FaGithub, FaHackerrank, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const CodingProfiles: React.FC = () => {
  const platforms = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: PERSONAL_INFO.github,
      username: '@OrionGD',
      color: 'border-slate-500/30',
      glow: 'group-hover:shadow-slate-500/20',
      iconColor: 'text-slate-400',
      description: 'Repositories, open-source contributions, and technical documentation.'
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: PERSONAL_INFO.leetcode,
      username: 'OrionGD',
      color: 'border-orange-500/30',
      glow: 'group-hover:shadow-orange-500/20',
      iconColor: 'text-orange-500',
      description: 'Problem solving, algorithmic challenges, and data structure mastery.'
    },
    {
      name: 'HackerRank',
      icon: FaHackerrank,
      url: PERSONAL_INFO.hackerrank,
      username: '@OrionGD07',
      color: 'border-emerald-500/30',
      glow: 'group-hover:shadow-emerald-500/20',
      iconColor: 'text-emerald-500',
      description: 'Verified skills, technical assessments, and competitive coding.'
    }
  ];

  return (
    <section id="coding-hub" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Coding Ecosystem
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Explore my live activity and problem-solving progress across various industry-standard platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group block p-8 rounded-[2.5rem] bg-white/40 dark:bg-slate-900/20 backdrop-blur-xl border ${platform.color} transition-all duration-500 shadow-lg ${platform.glow}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center shadow-inner border border-white/10 ${platform.iconColor}`}>
                  <platform.icon size={28} />
                </div>
                <FaExternalLinkAlt className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                {platform.name}
              </h3>
              <p className="text-sm font-bold text-cyan-500 mb-4">{platform.username}</p>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {platform.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                Visit Profile <span className="w-8 h-px bg-slate-300 dark:bg-slate-700 group-hover:bg-cyan-500 group-hover:w-12 transition-all"></span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
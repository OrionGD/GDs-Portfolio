import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { FaGithub } from 'react-icons/fa';

const GithubActivity: React.FC = () => {
  return (
    <section id="github-activity" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-[#30363d] rounded-2xl p-6 md:p-10 shadow-xl"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-[#30363d]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-white/10 flex items-center justify-center text-white">
                <FaGithub size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  GitHub Contributions
                </h2>
                <p className="text-sm text-slate-500">
                  @OrionGD • Live open-source activity
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
            >
              View GitHub Profile ↗
            </a>
          </div>

          {/* Live Contribution Graph */}
          <div className="flex justify-center overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/OrionGD"
              alt="GitHub contribution graph for OrionGD"
              className="w-full max-w-4xl"
              loading="lazy"
            />
          </div>

          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 italic text-center">
            Live data sourced directly from GitHub — updated automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;

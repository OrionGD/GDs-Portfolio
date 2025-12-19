import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { SiLeetcode } from 'react-icons/si';
import { FaFire, FaTrophy, FaLightbulb, FaExternalLinkAlt, FaCheckCircle, FaBrain } from 'react-icons/fa';

interface SubmissionData {
  [timestamp: string]: number;
}

const LeetCodeActivity: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number; week: number; day: number } | null>(null);
  const [liveStats, setLiveStats] = useState({
    totalSolved: 0,
    totalQuestions: 0,
    easySolved: 0,
    totalEasy: 0,
    mediumSolved: 0,
    totalMedium: 0,
    hardSolved: 0,
    totalHard: 0,
    acceptanceRate: 0,
    ranking: 0,
    submissionCalendar: "{}" as string,
    loading: true,
    error: false
  });

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/OrionGD`);
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'success') {
            setLiveStats({
              totalSolved: data.totalSolved || 0,
              totalQuestions: data.totalQuestions || 3300,
              easySolved: data.easySolved || 0,
              totalEasy: data.totalEasy || 800,
              mediumSolved: data.mediumSolved || 0,
              totalMedium: data.totalMedium || 1600,
              hardSolved: data.hardSolved || 0,
              totalHard: data.totalHard || 900,
              acceptanceRate: data.acceptanceRate || 0,
              ranking: data.ranking || 0,
              submissionCalendar: data.submissionCalendar || "{}",
              loading: false,
              error: false
            });
          }
        }
      } catch (error) {
        setLiveStats(prev => ({ ...prev, loading: false, error: true }));
      }
    };
    fetchLeetCodeData();
  }, []);

  const heatmapData = useMemo(() => {
    try {
      const submissions: SubmissionData = JSON.parse(liveStats.submissionCalendar || "{}");
      const grid = [];
      const now = new Date();
      const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - (52 * 7) - endDate.getDay());

      for (let i = 0; i < 53 * 7; i++) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + i);
        const dayStart = Math.floor(new Date(d.setHours(0,0,0,0)).getTime() / 1000);
        const dayEnd = dayStart + 86400;
        let count = 0;
        Object.keys(submissions).forEach(ts => {
          const val = parseInt(ts);
          if (val >= dayStart && val < dayEnd) count += submissions[ts];
        });
        grid.push({
          date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count: count,
          level: count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 7 ? 3 : 4
        });
      }
      return grid;
    } catch (e) {
      return Array(53 * 7).fill({ count: 0, level: 0, date: '' });
    }
  }, [liveStats.submissionCalendar]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 4: return 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]';
      case 3: return 'bg-orange-500/80';
      case 2: return 'bg-orange-500/60';
      case 1: return 'bg-orange-500/30';
      default: return 'bg-slate-200/50 dark:bg-white/5 hover:bg-white/10 transition-colors';
    }
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const statsBreakdown = [
    { label: 'Easy', value: liveStats.easySolved, total: liveStats.totalEasy, color: 'text-emerald-500', barColor: 'bg-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Medium', value: liveStats.mediumSolved, total: liveStats.totalMedium, color: 'text-[#ffa116]', barColor: 'bg-[#ffa116]', bg: 'bg-[#ffa116]/10' },
    { label: 'Hard', value: liveStats.hardSolved, total: liveStats.totalHard, color: 'text-rose-500', barColor: 'bg-rose-500', bg: 'bg-rose-500/10' }
  ];

  return (
    <section id="leetcode" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white/40 dark:bg-[#0a0a0a]/60 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#ffa116] to-[#f43f5e] p-0.5 shadow-2xl shadow-orange-500/20 group cursor-pointer hover:rotate-3 transition-transform">
                <div className="w-full h-full rounded-[1.4rem] bg-slate-900 flex items-center justify-center">
                  <SiLeetcode size={48} className="text-[#ffa116] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Algorithm Forge</h2>
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      Rank: {liveStats.loading ? '...' : liveStats.ranking.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-500/20 transition-all"
            >
              Analyze Profile <FaExternalLinkAlt size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-12 bg-slate-50/50 dark:bg-white/[0.02] rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-inner">
              <div className="relative w-56 h-56 mb-10">
                <svg className="w-full h-full transform -rotate-90 relative">
                  <circle cx="112" cy="112" r="104" className="stroke-slate-200 dark:stroke-white/5 fill-none" strokeWidth="14" />
                  <motion.circle
                    cx="112" cy="112" r="104"
                    initial={{ strokeDasharray: "0 653" }}
                    whileInView={{ strokeDasharray: `${(liveStats.totalSolved / Math.max(1, liveStats.totalQuestions)) * 653} 653` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, ease: "circOut" }}
                    className="stroke-orange-500 fill-none"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-6xl font-black text-slate-900 dark:text-white mb-1">
                    {liveStats.loading ? '...' : liveStats.totalSolved}
                  </span>
                  <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Mastered</span>
                </div>
              </div>
              <div className="w-full space-y-4">
                 <div className="flex justify-between items-center px-8 py-5 rounded-2xl bg-white/50 dark:bg-black/30 border border-slate-200 dark:border-white/5 shadow-sm">
                   <div className="flex items-center gap-3">
                     <FaBrain className="text-orange-500" />
                     <span className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Accuracy</span>
                   </div>
                   <span className="text-lg font-black text-slate-900 dark:text-white">{liveStats.acceptanceRate}%</span>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {statsBreakdown.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2.5rem] bg-white/50 dark:bg-white/[0.04] border border-white/20 dark:border-white/5 flex flex-col group hover:border-orange-500/20 transition-all shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{stat.label}</span>
                      <div className={`w-10 h-10 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <FaLightbulb size={16} />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-5">
                      <span className={`text-4xl font-black ${stat.color}`}>{liveStats.loading ? '...' : stat.value}</span>
                      <span className="text-sm font-bold text-slate-400">/ {stat.total}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-slate-50/50 dark:bg-black/40 p-10 rounded-[3rem] border border-slate-200/50 dark:border-white/5 group relative shadow-inner overflow-x-auto scrollbar-hide">
                <div className="min-w-fit flex gap-[4px]">
                  {Array.from({ length: 53 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[4px]">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const data = heatmapData[weekIndex * 7 + dayIndex];
                        return (
                          <motion.div
                            key={dayIndex}
                            onMouseEnter={() => setHoveredCell({ ...data, week: weekIndex, day: dayIndex })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-4 h-4 md:w-4.5 md:h-4.5 rounded-[4px] ${getLevelColor(data?.level || 0)} cursor-crosshair transition-all duration-300 hover:scale-125`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeActivity;
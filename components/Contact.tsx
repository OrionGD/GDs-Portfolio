import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              Feel free to reach out for collaborations, opportunities, or just to say hello.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <FaEnvelope />
                </div>
                {PERSONAL_INFO.email}
              </a>
              
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center">
                  <FaPhone />
                </div>
                {PERSONAL_INFO.phone}
              </div>
              
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-start md:items-end">
             <div className="flex gap-4 mb-8">
               {SOCIAL_LINKS.map((social, index) => (
                 <a
                   key={index}
                   href={social.url}
                   target="_blank"
                   rel="noreferrer"
                   className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-500 hover:text-white transition-all transform hover:scale-110"
                   title={social.label}
                 >
                   <social.icon size={20} />
                 </a>
               ))}
             </div>
          </div>
        </div>

        {/* Declaration & Footer Bottom */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 mt-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-slate-500 italic text-sm">
              "I hereby declare that the above information is true and correct to the best of my knowledge."
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-sm text-slate-600 dark:text-slate-600 font-mono">
              <span>Date: 10 December 2025</span>
              <span>Place: Tiruchirapalli</span>
              <span className="font-bold text-slate-500 dark:text-slate-400">Signature: Godfrey T R</span>
            </div>
          </div>
          
          <div className="text-center mt-12 text-xs text-slate-500 dark:text-slate-700">
            &copy; {new Date().getFullYear()} Godfrey T R. Built with React & Tailwind.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
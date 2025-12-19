import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300 relative">
      <Background3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Gallery />
        <CodingProfiles />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
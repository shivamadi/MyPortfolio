import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen text-text-primary selection:bg-blue-600/30 selection:text-white relative font-sans overflow-x-hidden">

      {/* Cinematic Mouse Spotlight Interaction */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Hyper-Stable Hardware Accelerated 3D Engine */}
      <Background3D />

      {/* Top focus glowing linear light */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-[100] fixed shadow-[0_0_20px_rgba(59,130,246,0.4)]" />

      {/* Main Content Hub */}
      <div className="relative z-10 flex flex-col">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

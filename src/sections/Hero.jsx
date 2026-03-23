import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import heroImage from '../assets/hero.jpeg';
import TiltCard from '../components/TiltCard';

const Hero = () => {
  const containerRef = useRef(null);

  // High-precision mouse tracking for 3D Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Wide parallax translations for background layers
  const shardX = useTransform(springX, [-0.5, 0.5], [60, -60]);
  const shardY = useTransform(springY, [-0.5, 0.5], [60, -60]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative"
      style={{ perspective: 1200 }}
    >
      {/* 3D Interactive Tech Environment */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">

        {/* Cinematic HUD Scanners (Animated Rings) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <motion.div
            animate={{ rotate: 360, scale: [0.8, 1.1, 0.8], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-[800px] h-[800px] border-2 border-primary/20 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 0.7, 1], opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[600px] h-[600px] border border-indigo-500/30 rounded-full"
          />
        </div>

        {/* Floating Code Shard (Parallax Layer 1) */}
        <motion.div
          style={{
            x: shardX,
            y: shardY,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            left: '15%',
            top: '20%'
          }}
          className="absolute w-40 h-40 bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl"
        >
          <div className="absolute inset-0 flex items-center justify-center text-primary/10 text-6xl font-mono">{"{ }"}</div>
        </motion.div>

        {/* Interactive Gradient Pulsors */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              x: useTransform(springX, [-0.5, 0.5], [100 * (i + 1), -100 * (i + 1)]),
              y: useTransform(springY, [-0.5, 0.5], [100 * (i + 1), -100 * (i + 1)]),
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(129, 140, 248, 0.08)',
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            className="absolute rounded-full blur-[120px]"
          />
        ))}

        {/* Large Floating Bracket (Parallax Layer 2) */}
        <motion.div
          style={{
            x: useTransform(springX, [-0.5, 0.5], [-80, 80]),
            y: useTransform(springY, [-0.5, 0.5], [-80, 80]),
            rotateX,
            rotateY,
            right: '10%',
            bottom: '15%'
          }}
          className="absolute w-64 h-64 bg-primary/5 border border-primary/10 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
        >
          <div className="text-primary/20 text-9xl font-mono select-none">{"</>"}</div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: 40 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 80, duration: 1.2 }}
          className="space-y-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, translateZ: 20 }}
            className="inline-block py-2 px-4 rounded-full bg-blue-600/10 border border-blue-500/20 text-primary text-xs font-bold tracking-[0.2em] uppercase cursor-default shadow-lg backdrop-blur-3xl"
          >
            Available for new opportunities
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-text-primary leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-600 to-cyan-400 drop-shadow-[0_10px_30px_rgba(59,130,246,0.3)] block pb-4 mt-2"
              >
                Shivam Kumar
              </motion.span>
            </h1>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl md:text-4xl text-text-secondary/80 font-medium tracking-tight"
          >
            Engineering <span className="text-white">Multimodal AI</span> & <span className="text-white">Full-Stack</span> Systems.
          </motion.h2>

          <p className="text-lg text-text-secondary max-w-lg leading-relaxed border-l-2 border-primary/20 pl-6 py-2">
            I craft pixel-perfect, highly scalable architectures with a focus on immersive user experiences and performance-driven intelligence.
          </p>

          <div className="flex flex-wrap gap-6 pt-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-black tracking-wide flex items-center gap-3 transition-all relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">Let's Connect <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="#"
              download
              whileHover={{ scale: 1.05, y: -8, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/10 text-white rounded-2xl font-black tracking-wide flex items-center gap-3 transition-all hover:border-primary/40"
            >
              Resume <Download size={20} />
            </motion.a>
          </div>

          <div className="flex gap-6 pt-10">
            {[
              { icon: <FaLinkedin size={26} />, url: 'https://linkedin.com/in/shivam-kumar00' },
              { icon: <FaGithub size={26} />, url: 'https://github.com/shivamadi' },
              { icon: <Mail size={26} />, url: 'mailto:shivamadi306@gmail.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 10 : -10, color: "#3b82f6" }}
                className="text-text-secondary bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-primary/30 shadow-xl transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative"
        >
          <TiltCard intensity={35}>
            <div
              className="relative w-72 h-[400px] md:w-[450px] md:h-[560px] mx-auto transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-primary via-indigo-600 to-transparent p-1 shadow-[0_40px_100px_rgba(59,130,246,0.5)] overflow-hidden">
                <div
                  className="w-full h-full bg-[#020617] rounded-[2.8rem] overflow-hidden border-[10px] border-white/5 flex items-center justify-center relative backdrop-blur-3xl"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <motion.img
                    src={heroImage}
                    alt="Shivam Kumar"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    style={{ transform: "translateZ(80px)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Advanced 3D orbit rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border border-dashed border-blue-500/20 rounded-[4rem] pointer-events-none"
                style={{ transform: "translateZ(-30px) rotateX(45deg)" }}
              />
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

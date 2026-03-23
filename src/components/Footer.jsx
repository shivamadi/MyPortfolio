import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-16 relative overflow-hidden flex flex-col items-center">
      
      {/* Cinematic dark floor with deep blue glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10" style={{ perspective: 1200 }}>
        
        {/* Deep Space Brand Signature */}
        <motion.div 
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="flex flex-col items-center md:items-start group cursor-default transform-gpu"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-4xl font-black tracking-tighter cursor-pointer text-white mb-4 flex items-center leading-none"
          >
            Shivam<motion.span whileHover={{ rotate: 360, scale: 1.5 }} className="text-primary inline-block origin-center ml-0.5 font-black text-6xl leading-[0]">.</motion.span>
          </Link>
          <p className="text-text-secondary text-xs font-bold uppercase tracking-[0.2em] bg-white/5 px-5 py-2 rounded-full border border-white/10 shadow-sm leading-none">
            © {new Date().getFullYear()} Shivam Kumar.
          </p>
        </motion.div>

        {/* Cinematic Social Dock */}
        <div className="flex items-center gap-8">
          {[
            { icon: <FaLinkedin size={28} />, url: 'https://linkedin.com/in/shivam-kumar00', label: 'LinkedIn' },
            { icon: <FaGithub size={28} />, url: 'https://github.com/shivamadi', label: 'GitHub' },
            { icon: <Mail size={28} />, url: 'mailto:shivamadi306@gmail.com', label: 'Email' }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -12, scale: 1.15, rotate: i % 2 === 0 ? 10 : -10, color: '#3b82f6' }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-text-secondary/70 bg-white/5 p-5 rounded-2xl shadow-xl border border-white/10 transition-all hover:border-primary/50 flex items-center justify-center transform-gpu"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to top "Launch" button */}
        <motion.div whileHover={{ y: -10, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="w-20 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-[2rem] text-text-secondary hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_20px_40px_rgba(59,130,246,0.5)] transition-all cursor-pointer group shadow-2xl relative overflow-hidden"
            aria-label="Back to top"
          >
            <motion.div 
               animate={{ y: [0, -8, 0] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="relative z-10"
            >
              <ArrowUp size={30} className="stroke-[3]" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
      
      {/* Footer accent text */}
      <div className="mt-20 text-[10px] font-bold tracking-[0.5em] text-text-secondary/30 uppercase leading-none">
         Designed & Engineered with Precision
      </div>
    </footer>
  );
};

export default Footer;

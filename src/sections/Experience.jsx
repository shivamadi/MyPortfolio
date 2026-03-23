import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const EXPERIENCE = [
  {
    role: 'Summer Intern - Multimodal AI for Mental Health Detection',
    company: 'Virtual / Open Source Project',
    date: "Jun'23 - Jul'23",
    description: [
      'Worked on a Multimodal AI system integrating text, audio, and facial emotion analysis for mental-health monitoring.',
      'Implemented NLP (BERT, TextBlob), Audio Emotion Recognition (Librosa), and Facial Emotion Detection (OpenFace + OpenCV).',
      'Built a Flask-based real-time interface for emotion prediction using webcam, microphone, and text input.',
      'Developed and documented the complete project including AI model, preprocessing pipeline, and testing.'
    ],
    tech: [
      { name: 'Python', slug: 'py' },
      { name: 'Flask', slug: 'flask' },
      { name: 'OpenCV', slug: 'opencv' },
      { name: 'Scikit-Learn', slug: 'sklearn' },
      { name: 'BERT', slug: 'huggingface' }, // Closest visual for BERT context
      { name: 'PyTorch', slug: 'pytorch' }
    ],
    link: '#'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden" style={{ perspective: 1500 }}>
      {/* Dynamic 3D Environment Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary cursor-default">
            Experience History
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-8 text-lg font-medium opacity-80">
            A chronological timeline of engineering specialized software and AI architectures.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 space-y-20 pl-12 max-w-5xl mx-auto py-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
              className="relative"
            >
              {/* Premium Pulsing Node */}
              <div className="absolute -left-[64px] top-8 z-20">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#3b82f6]" />
                </motion.div>
              </div>

              <TiltCard intensity={10}>
                <div
                  className="bg-surface/20 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-surface-light border-white/5 shadow-2xl hover:border-primary/50 transition-all relative overflow-hidden h-full group/card"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 blur-[90px] group-hover/card:bg-primary/20 transition-colors" />

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8 relative z-10" style={{ transform: "translateZ(50px)" }}>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-white tracking-tight group-hover/card:text-primary transition-colors leading-[1.1]">{exp.role}</h3>
                      <div className="flex items-center gap-4 text-text-secondary font-bold bg-white/5 py-2 px-5 rounded-2xl border border-white/5 w-max">
                        <Briefcase size={20} className="text-primary" />
                        <span className="text-base">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-xs font-black bg-primary px-8 py-3 rounded-2xl text-white shadow-xl uppercase tracking-widest whitespace-nowrap">
                      {exp.date}
                    </div>
                  </div>

                  <ul className="space-y-6 mb-12 relative z-10" style={{ transform: "translateZ(30px)" }}>
                    {exp.description.map((desc, dIdx) => (
                      <motion.li
                        key={dIdx}
                        whileHover={{ x: 10, color: '#fff' }}
                        className="text-text-secondary leading-relaxed flex items-start gap-5 transition-all text-lg font-medium"
                      >
                        <span className="text-primary font-black text-2xl leading-none mt-1 group-hover/card:scale-125 transition-transform">▹</span>
                        {desc}
                      </motion.li>
                    ))}
                  </ul>

                  {/* High-fidelity library icons with hover effects */}
                  <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5 relative z-10" style={{ transform: "translateZ(60px)" }}>
                    {exp.tech.map((tech, tIdx) => (
                      <motion.div
                        key={tIdx}
                        whileHover={{ 
                          scale: 1.25, 
                          rotate: 8,
                          zIndex: 50,
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          filter: 'drop-shadow(0 0 15px rgba(59,130,246,0.6))'
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group/icon transition-all h-16 w-16"
                      >
                        <img 
                          src={`https://skillicons.dev/icons?i=${tech.slug}`} 
                          alt={tech.name} 
                          title={tech.name}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

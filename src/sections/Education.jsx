import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    institution: 'Lovely Professional University',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png',
    location: 'Phagwara, Punjab',
    date: "Aug'23 - Present",
    score: 'CGPA - 7.50'
  },
  {
    degree: 'Intermediate',
    institution: 'R.D Public School',
    location: 'Muzaffarpur, Bihar',
    date: "Apr'19 - Mar'21",
    score: 'Percentage - 83'
  },
  {
    degree: 'Matriculate',
    institution: 'Gurukul Vidyapeeth',
    location: 'India',
    date: "Apr'18 - Mar'19",
    score: 'Percentage - 90'
  }
];

const CERTIFICATIONS = [
  {
    title: 'Introduction to Hardware and Operating Systems - IBM (Coursera)',
    date: "Sep'24",
    link: '#'
  },
  {
    title: 'Java Programming',
    date: "Jan'23-May'23",
    link: '#'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-transparent relative overflow-hidden" style={{ perspective: 1500 }}>
      {/* Dynamic 3D Environment Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-start relative z-10">

        {/* Education Perspective */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div className="mb-14 flex items-center gap-6">
            <div className="p-4 bg-primary/20 rounded-3xl border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <GraduationCap className="text-primary w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary mb-4 relative inline-block group cursor-default">
              Education
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-white/10 space-y-12 pl-10 ml-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[50px] top-8 w-5 h-5 rounded-full bg-primary ring-8 ring-blue-500/10 z-10 shadow-[0_0_20px_#3b82f6]" />

                <TiltCard intensity={15}>
                  <div
                    className="bg-surface/20 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-surface-light border-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:border-primary/50 transition-all relative overflow-hidden group/card"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Interior Glow Pulse */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] group-hover/card:bg-primary/20 transition-colors" />

                    <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 relative z-10" style={{ transform: "translateZ(50px)" }}>
                        <div className="space-y-4">
                            <motion.h3 className="text-2xl font-black text-text-primary group-hover/card:text-primary transition-colors tracking-tight leading-tight">{edu.degree}</motion.h3>
                            <div className="text-text-secondary font-bold text-lg">{edu.institution}</div>
                        </div>
                        {edu.logo && (
                            <motion.div 
                               whileHover={{ scale: 1.1, rotate: 10 }}
                               className="w-20 h-20 bg-white p-3 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl border border-white/10"
                            >
                                <img src={edu.logo} alt={edu.institution} className="w-full h-auto" />
                            </motion.div>
                        )}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-text-secondary/60 bg-white/5 w-max px-4 py-1.5 rounded-full border border-white/5 mb-8 shadow-inner" style={{ transform: "translateZ(40px)" }}>
                      <MapPin size={16} className="text-primary" /> {edu.location}
                    </div>

                    <div className="flex justify-between items-center bg-black/40 border border-white/10 px-6 py-4 rounded-2xl relative z-10 shadow-lg group-hover/card:bg-primary transition-all duration-500" style={{ transform: "translateZ(60px)" }}>
                      <span className="font-black text-primary font-mono text-sm tracking-widest group-hover/card:text-white">{edu.date}</span>
                      <span className="font-black text-white bg-primary px-4 py-2 rounded-xl text-xs uppercase tracking-tighter shadow-xl group-hover/card:bg-white group-hover/card:text-primary">{edu.score}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications and Extras Column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-24"
        >
          {/* Certificates */}
          <div>
            <motion.div className="mb-14 flex items-center gap-6">
              <div className="p-4 bg-yellow-500/20 rounded-3xl border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary cursor-default">
                Certifications
              </h2>
            </motion.div>

            <div className="space-y-8">
              {CERTIFICATIONS.map((cert, index) => (
                <TiltCard key={index} intensity={20}>
                  <div
                    className="bg-surface/20 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-surface-light border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-8 shadow-2xl group relative overflow-hidden transition-all hover:border-yellow-500/50"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                    <div style={{ transform: "translateZ(30px)" }}>
                      <h3 className="text-xl font-black text-text-primary mb-3 group-hover:text-yellow-500 transition-colors uppercase tracking-widest leading-tight">{cert.title}</h3>
                      <p className="text-xs font-black tracking-[0.2em] text-text-secondary/60 flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
                        {cert.date}
                      </p>
                    </div>
                    <motion.a
                      href={cert.link}
                      whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 15px 30px rgba(234, 179, 8, 0.4)" }}
                      whileTap={{ scale: 0.9 }}
                      style={{ transform: "translateZ(60px)" }}
                      className="px-10 py-4 bg-yellow-500 text-black font-black uppercase text-xs tracking-widest rounded-2xl transition-all flex items-center justify-center gap-4"
                    >
                      Verify <ExternalLink size={18} strokeWidth={3} />
                    </motion.a>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Social Extracurricular Box */}
          <TiltCard intensity={10}>
            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent backdrop-blur-3xl p-12 border border-emerald-500/20 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden h-full group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[70px] -z-10 group-hover:bg-emerald-500/20 transition-colors" />

              <h4 className="text-3xl font-black text-white mb-10 flex items-center justify-between" style={{ transform: "translateZ(40px)" }}>
                Philanthropy
                <span className="text-xs font-black bg-emerald-500 px-5 py-2.5 rounded-full text-white shadow-xl tracking-widest font-mono">SOCIAL</span>
              </h4>

              <ul className="space-y-6" style={{ transform: "translateZ(30px)" }}>
                {[
                  'Volunteered with Navya Foundation NGO for development activities.',
                  'Conducted large-scale food conservation awareness sessions.',
                  'Led a tree plantation drive, planting 200+ saplings with local communities.'
                ].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 10, color: '#fff' }} className="flex items-start gap-6 transition-colors text-lg text-text-secondary font-medium">
                    <span className="text-emerald-500 font-bold text-2xl leading-none mt-1">»</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;

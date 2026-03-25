import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden" style={{ perspective: 1500 }}>
      {/* Dynamic 3D Floating Shapes background for this section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 60, 0],
            rotate: [0, -45, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary mb-4 relative inline-block group cursor-default">
            About Me
            <motion.span
              className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.6)] rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-8 text-lg font-medium">
            A snapshots into the mind of a software engineer driven by innovation and high-impact technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Interactive 3D Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: "spring", stiffness: 80, duration: 1 }}
            className="lg:col-span-5 h-full"
          >
            <TiltCard className="h-full group">
              <div
                className="h-full bg-surface/20 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-surface-light border-white/5 shadow-[0_22px_70px_4px_rgba(0,0,0,0.56)] relative overflow-hidden flex flex-col justify-between"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div style={{ transform: "translateZ(50px)" }}>
                  <div className="w-16 h-1 bg-primary mb-6 rounded-full" />
                  <h3 className="text-3xl font-black mb-6 text-text-primary tracking-tight">
                    Shivam Kumar
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-lg mb-8">
                    I am a dedicated Computer Science student at Lovely Professional University, engineering specialized AI systems and scalable web environments.
                  </p>
                </div>

                <ul className="space-y-4" style={{ transform: "translateZ(30px)" }}>
                  {[
                    { label: 'Degree', val: 'B.Tech CSE' },
                    { label: 'Location', val: 'Muzaffarpur / Phagwara' },
                    { label: 'Status', val: 'Actively Building' }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-text-secondary/80 bg-white/5 p-3 rounded-2xl border border-white/5 transition-colors hover:border-primary/30"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#3b82f6]"></span>
                      <span className="text-sm"><strong>{item.label}:</strong> {item.val}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Layered 3D Story */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {[
              {
                num: '01',
                title: 'The Vision',
                text: 'Starting from hardware curiosity, I evolved into building complex Multimodal AI systems that help detect mental health patterns using real-time biometric signals.'
              },
              {
                num: '02',
                title: 'Engineering Philosophy',
                text: 'Code is just a tool; the impact is what matters. I focus on high-performance architectures, clean abstraction, and pixels that solve real human problems.'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80, rotateX: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, delay: i * 0.2 }}
                className="h-full"
              >
                <TiltCard intensity={10} className="h-full">
                  <div
                    className="h-full bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all shadow-2xl relative overflow-hidden group"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors" />

                    <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-4 relative z-10" style={{ transform: "translateZ(40px)" }}>
                      <span className="text-4xl font-black text-primary/30 font-mono tracking-tighter">{card.num}</span>
                      {card.title}
                    </h4>
                    <p className="text-text-secondary text-lg leading-relaxed relative z-10" style={{ transform: "translateZ(20px)" }}>
                      {card.text}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}

            {/* Premium Stat Grid */}
            <div className="grid grid-cols-3 gap-4 h-full">
              {[
                { title: '7.50', sub: 'CGPA' },
                { title: '12K+', sub: 'Stars' },
                { title: 'TOP 1%', sub: 'Rank' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  whileHover={{
                    y: -10,
                    rotateY: 15,
                    boxShadow: "0 20px 40px rgba(59,130,246,0.2)",
                    borderColor: "rgba(59,130,246,0.4)"
                  }}
                  className="p-6 bg-surface/40 backdrop-blur-md rounded-[1.5rem] border border-white/10 text-center cursor-pointer transition-all duration-300 transform-gpu"
                >
                  <div className="text-3xl font-black text-primary mb-1 tracking-tighter">{stat.title}</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-secondary/60">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

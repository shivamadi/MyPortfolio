import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';

const SKILLS_DATA = [
  {
    category: 'Languages',
    icon_slugs: ['cpp', 'c', 'java', 'js', 'py', 'ts'],
    skills: ['C++', 'C', 'Java', 'JavaScript', 'Python', 'TypeScript'],
  },
  {
    category: 'Frameworks/Libraries',
    icon_slugs: ['html', 'css', 'tailwind', 'react', 'nextjs', 'nodejs', 'express'],
    skills: ['HTML/CSS', 'Tailwind CSS', 'React.js', 'Next.js', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases & ORM',
    icon_slugs: ['mysql', 'mongodb'],
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Platforms',
    icon_slugs: ['git', 'github', 'docker', 'vscode'],
    skills: ['Git', 'GitHub', 'Docker', 'VS Code'],
  },
  {
    category: 'Soft Skills',
    icon_slugs: ['discord', 'notion', 'slack'], 
    skills: ['Problem-Solving', 'Leadership', 'Team Collaboration'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden" style={{ perspective: 1500 }}>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary mb-4 relative inline-block cursor-default group">
            Technical Arsenal
            <motion.span
              className="absolute -bottom-3 left-0 h-1 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1 }}
            />
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-8 text-lg font-medium opacity-80">
            Hover over any technology to explore its integration and performance metrics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILLS_DATA.map((skillGroup, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TiltCard intensity={15} className="h-full">
                <div
                  className="bg-surface/20 backdrop-blur-2xl p-10 h-full rounded-[2.5rem] border border-surface-light border-white/5 shadow-[0_22px_70px_4px_rgba(0,0,0,0.4)] group overflow-hidden relative flex flex-col justify-between transition-all hover:border-primary/50"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="mb-8 relative z-10" style={{ transform: "translateZ(50px)" }}>
                    <h3 className="text-2xl font-black text-text-primary tracking-tight transition-colors group-hover:text-primary mb-4">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Individual Technology Icon Grid */}
                  <div className="relative z-10 grid grid-cols-4 gap-4" style={{ transform: "translateZ(30px)" }}>
                    {skillGroup.icon_slugs.map((slug, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10,
                          zIndex: 50,
                          filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))" 
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative cursor-pointer"
                      >
                         <img
                           src={`https://skillicons.dev/icons?i=${slug}`}
                           alt={slug}
                           className="w-full h-auto transition-all"
                         />
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {skillGroup.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] uppercase font-black tracking-widest text-text-secondary/60 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:opacity-100 transition-opacity opacity-40 -z-10" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

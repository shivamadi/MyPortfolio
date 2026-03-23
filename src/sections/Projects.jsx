import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import TiltCard from '../components/TiltCard';

const PROJECTS_DATA = [
  {
    title: 'YouTube Clone – Video Streaming App',
    date: "Dec'23",
    description: [
      'Engineered a YouTube clone web application fetching and displaying trending videos using YouTube Data API v3.',
      'Built interactive video playback system with modal autoplay, keyboard controls, hover animations, and skeleton loading screen.',
      'Designed responsive video grid layout adapting from 1-4 columns across devices.'
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'YouTube Data API v3', 'JavaScript'],
    github: 'https://github.com/shivamadi/Youtube-clone',
    live: 'https://youtube-clone-omega-vert.vercel.app/'
  },
  {
    title: 'Coupon - Digital Online Coupon Organizer',
    date: "Jan'24",
    description: [
      'Created an automated background service using Node-cron to trigger real-time expiration alerts, mitigating user asset loss by 30%.',
      'Engineered a responsive frontend with advanced filtering and sorting algorithms.',
      'Optimized the retrieval of digital assets and improved application accessibility and usability by 25%.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Node-cron'],
    github: 'https://github.com/shivamadi/Coupon-Organiser',
    live: 'https://coupon-organizer.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ scale: 1.05, textShadow: "0px 10px 20px rgba(59,130,246,0.5)" }}
            className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary mb-4 relative inline-block cursor-default transition-all duration-300 transform-gpu"
          >
            Featured Projects
            <span className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-6">
            A selection of my recent works highlighting my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div
                  style={{ transformStyle: 'preserve-3d' }}
                  className="bg-surface/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-surface-light hover:border-primary/50 relative shadow-2xl flex flex-col h-full group"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary via-indigo-600 to-primary-dark"></div>

                  <div className="p-8 flex-1 flex flex-col relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-4">
                        <a href={project.github} className="text-text-secondary hover:text-white transition-all bg-surface-light/50 p-2.5 rounded-xl hover:bg-primary/20">
                          <FaGithub size={20} />
                        </a>
                        <a href={project.live} className="text-text-secondary hover:text-white transition-all bg-surface-light/50 p-2.5 rounded-xl hover:bg-primary/20">
                          <ExternalLink size={20} className="stroke-2" />
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-primary font-bold uppercase tracking-widest bg-primary/10 inline-block w-max px-4 py-1.5 rounded-full border border-primary/20 mb-6" style={{ transform: "translateZ(40px)" }}>{project.date}</p>

                    <ul className="space-y-4 mb-8 flex-1" style={{ transform: "translateZ(20px)" }}>
                      {project.description.map((desc, dIdx) => (
                        <li
                          key={dIdx}
                          className="text-text-secondary leading-relaxed flex items-start group-hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className="text-primary mr-3 font-bold">»</span>
                          <span className="text-[15px]">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2.5 mt-auto pt-6 border-t border-surface-light/40 w-full" style={{ transform: "translateZ(50px)" }}>
                      {project.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono text-primary font-bold bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects;

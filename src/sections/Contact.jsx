import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Directing data to server... (Demo)');
    setTimeout(() => {
      setStatus('Message successful! I will reach out soon.');
    }, 2000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden" style={{ perspective: 1500 }}>
      {/* Dynamic Dark Nebula Glow */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: "spring", stiffness: 80, duration: 1 }}
          className="text-center mb-24"
        >
          <motion.h2
            whileHover={{ scale: 1.1, rotateY: 10 }}
            className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white over to-text-secondary mb-6 relative inline-block cursor-default tracking-tighter"
          >
            Get In Touch
            <span className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-gradient-to-r from-blue-500 top-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></span>
          </motion.h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-8 font-medium leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact Dock */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-2xl font-black text-white mb-10 px-4 tracking-tighter uppercase border-l-4 border-primary pl-6">Contact Node</h3>
            {[
              { icon: <Mail size={24} />, title: "Email", info: "shivamadi306@gmail.com", href: "mailto:shivamadi306@gmail.com" },
              { icon: <Phone size={24} />, title: "Phone", info: "+91-7091214155", href: "tel:+917091214155" },
              { icon: <MapPin size={24} />, title: "Location", info: "Phagwara, Punjab, India", href: null },
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard intensity={10} className="h-full">
                  <div
                    className="flex items-center gap-6 bg-surface/30 backdrop-blur-2xl border border-surface-light p-8 rounded-2xl shadow-xl group transition-all h-full hover:border-primary/50"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div
                      className="p-4 bg-surface-light/50 rounded-xl text-primary flex-shrink-0 shadow-lg group-hover:bg-primary group-hover:text-white transition-all transform-gpu"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      {contact.icon}
                    </div>
                    <div style={{ transform: "translateZ(20px)" }}>
                      <h4 className="text-lg font-black text-text-primary group-hover:text-primary transition-colors">{contact.title}</h4>
                      {contact.href ? (
                        <a href={contact.href} className="text-text-secondary hover:text-white transition-colors font-medium text-sm break-all">
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-text-secondary font-medium text-sm">
                          {contact.info}
                        </p>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Dynamic Matrix Form */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: "spring", stiffness: 80, duration: 1.2 }}
            className="lg:col-span-8 h-full"
          >
            <TiltCard intensity={5} className="h-full">
              <div
                className="bg-surface/30 backdrop-blur-2xl p-10 md:p-14 rounded-3xl border border-surface-light shadow-2xl relative overflow-hidden h-full group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[120px] -z-10 group-hover:bg-primary/20 transition-colors" />

                <h3 className="text-3xl font-black text-white mb-12 flex items-center gap-6" style={{ transform: "translateZ(50px)" }}>
                  Send Message
                  <div className="h-0.5 flex-1 bg-surface-light rounded-full" />
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8" style={{ transform: "translateZ(30px)" }}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-text-secondary ml-1">Identity</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-light/30 border border-surface-light rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-surface-light/50 transition-all shadow-inner"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-text-secondary ml-1">Communications</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-light/30 border border-surface-light rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-surface-light/50 transition-all shadow-inner"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-text-secondary ml-1">Message Payload</label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface-light/30 border border-surface-light rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-surface-light/50 transition-all resize-none shadow-inner"
                      placeholder="Project Details..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.9)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-5 bg-primary text-white rounded-xl font-black tracking-widest uppercase transition-all shadow-xl relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex justify-center items-center gap-4">
                      Send <Send size={20} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </span>
                  </motion.button>
                  {status && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-sm font-bold text-center bg-primary/10 py-4 rounded-xl border border-primary/20">
                      {status}
                    </motion.p>
                  )}
                </form>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

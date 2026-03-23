import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = "", intensity = 15 }) => {
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

  // Dynamic glare mapping
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      className={`relative group transition-all duration-300 ${className}`}
    >
      {/* 3D Inner Content Wrapper */}
      <div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic Shadow Depth */}
        <div
          className="absolute inset-[5%] rounded-[inherit] bg-black/40 blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100"
          style={{ transform: "translateZ(-40px)" }}
        />

        {/* Real-time Glare Layer */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
          style={{
            background: glareBackground,
            transform: "translateZ(1px)"
          }}
        />

        {/* The Card Body */}
        <div className="w-full h-full relative z-10 rounded-[inherit]">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;

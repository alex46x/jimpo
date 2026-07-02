'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

interface MagneticProps {
  children: React.ReactNode;
}

function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, high-fidelity spring configuration
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull distance (multiplied by 0.35 to keep it controlled and premium)
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-12 px-4 md:px-8 lg:px-16 overflow-hidden select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Animated Brand Logo */}
        <div className="flex items-center space-x-2 group">
          <motion.span 
            className="w-2 h-2 bg-[#FF5C00] rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <span className="font-display font-black text-xs tracking-widest text-white">MAKHDU.M SYSTEMS // 2026</span>
        </div>

        {/* Social Links with Magnetic Effect */}
        <div className="flex items-center space-x-4 md:space-x-6 z-10">
          <Magnetic>
            <a 
              href="https://github.com/cyphex-0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8A8A8A] hover:text-[#FF5C00] transition-colors flex items-center space-x-2 text-xs font-mono tracking-wider px-4 py-2 bg-white/[0.02] border border-white/5 hover:border-[#FF5C00]/20 rounded-full"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
          </Magnetic>
          <span className="text-white/10 text-xs font-mono">/</span>
          <Magnetic>
            <a 
              href="https://www.linkedin.com/in/shahmakhdum/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8A8A8A] hover:text-[#FF5C00] transition-colors flex items-center space-x-2 text-xs font-mono tracking-wider px-4 py-2 bg-white/[0.02] border border-white/5 hover:border-[#FF5C00]/20 rounded-full"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>
          </Magnetic>
        </div>

        {/* Center: System Status */}
        <div className="text-center font-mono text-[9px] text-[#8A8A8A] uppercase tracking-[0.2em]">
          All intellectual compilations secure // Built with pride
        </div>

        {/* Back to top button with Magnetic Effect */}
        <Magnetic>
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 hover:bg-[#FF5C00]/20 border border-white/8 hover:border-[#FF5C00]/40 rounded-full text-white transition-all duration-300 flex items-center justify-center cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#FF5C00] transition-colors" />
          </button>
        </Magnetic>

      </div>
    </footer>
  );
}

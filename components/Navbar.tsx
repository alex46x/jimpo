'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { useLenis } from 'lenis/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollTo } from '@/lib/use-scroll-to';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();
  const lenis = useLenis();

  // Track page-wide scroll progress for the top hairline indicator.
  const { scrollYProgress } = useScroll();
  const progressSpring = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.4,
  });

  // Detect prefers-reduced-motion so the indicator snaps instead of tweening.
  const reducedMotion = useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined' || !window.matchMedia) return () => {};
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
      mql.addEventListener('change', callback);
      return () => mql.removeEventListener('change', callback);
    },
    () =>
      typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false,
    () => false,
  );

  // Keep aria-valuenow in sync with the live progress value for screen readers.
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const node = document.querySelector<HTMLElement>(
        '[data-scroll-progressbar="true"]',
      );
      if (node) node.setAttribute('aria-valuenow', String(Math.round(latest * 100)));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Lock body scroll while the mobile drawer is open. Don't stop Lenis —
  // stopping it freezes lenis.scrollTo() so nav clicks appear dead.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    scrollTo(targetId);
    setActiveSection(targetId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 md:px-8 py-6 pointer-events-none"
        animate={{
          paddingTop: isScrolled ? '16px' : '24px',
          paddingBottom: isScrolled ? '16px' : '24px',
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      >
        <div
          className="relative w-full max-w-5xl bg-black/40 backdrop-blur-md border border-white/8 rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 shadow-xl shadow-black/10"
        >
          <motion.div
            role="progressbar"
            aria-label="Page scroll progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
            data-scroll-progressbar="true"
            style={{
              scaleX: reducedMotion ? scrollYProgress : progressSpring,
              transformOrigin: '0% 50%',
            }}
            className="absolute left-0 right-0 -bottom-px h-[1.5px] rounded-full bg-gradient-to-r from-[#FF5C00] via-[#FF8A2D] to-[#FF5C00] origin-left will-change-transform"
          />
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <span className="w-2.5 h-2.5 bg-[#FF5C00] rounded-full transition-all duration-300 group-hover:scale-125" />
            <span className="font-display font-black text-sm tracking-wider text-white">MAKHDU.M</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-4 py-1.5 font-display text-xs font-semibold tracking-wider uppercase text-white transition-all duration-300 hover:text-[#FF5C00]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 bg-[#FF5C00]/10 rounded-full border border-[#FF5C00]/20 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA / Quick contact */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#FF5C00]/40 group"
            >
              <span>Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5C00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-white/5 transition-all text-white border border-transparent hover:border-white/10"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FF5C00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-lg z-40 flex flex-col justify-between p-10 pt-28"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sunset-glow opacity-30 pointer-events-none" />

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 z-10">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`font-display text-4xl font-black tracking-tight uppercase transition-all ${
                        isActive 
                          ? 'text-[#FF5C00]' 
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom contact info */}
            <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between gap-6 z-10">
              <div>
                <span className="block text-[10px] text-[#8A8A8A] uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:contact.makhdum@gmail.com" className="font-display font-medium text-sm text-white hover:text-[#FF5C00] transition-colors">
                  contact.makhdum@gmail.com
                </a>
              </div>
              <div className="flex space-x-6">
                <a href="https://github.com/cyphex-0" target="_blank" rel="noopener noreferrer" className="font-display text-xs text-[#8A8A8A] hover:text-white transition-colors uppercase tracking-widest">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/shahmakhdum/" target="_blank" rel="noopener noreferrer" className="font-display text-xs text-[#8A8A8A] hover:text-white transition-colors uppercase tracking-widest">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, ArrowRight, Check, Send } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  // SR-only announcement that swaps in when the form transitions state.
  const [statusAnnouncement, setStatusAnnouncement] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build a real mailto: handoff so the message actually leaves the page
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`
    );
    const href = `mailto:contact.makhdum@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(true);
    setStatusAnnouncement(
      'Compiling transmission. Please wait while your message is being prepared.',
    );
    // Visual feedback window matches the prior fake-loading feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setStatusAnnouncement(
        'Transmission completed successfully. Your message has been routed to the mail client.',
      );
      setFormData({ name: '', email: '', message: '' });
      // Hand off to the user's mail client
      window.location.href = href;
      setTimeout(() => {
        setIsSent(false);
        setStatusAnnouncement('');
      }, 4000);
    }, 700);
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen bg-[#050505] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background warm glowing atmosphere */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] sunset-glow-strong opacity-30 pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] sunset-glow opacity-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.1] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionLabel prefix="05" title="TRANSACT" className="mb-4" />

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase"
          >
            LET&apos;S BUILD <br />
            <span className="text-[#FF5C00]">SOMETHING</span> <br />
            <span className="text-stroke text-stroke-hover">MEANINGFUL</span>
          </motion.h2>
        </div>

        {/* Form & Info Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Direct Transmissions Info */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed">
              Have an advanced computational project in mind? Looking for an engineering asset to amplify your team? Reach out via telemetry or dispatch an email directly. Let&apos;s assemble the architecture.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.a 
                href="mailto:contact.makhdum@gmail.com"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 rounded-2xl transition-all group"
              >
                <div className="w-12 h-12 bg-black rounded-xl border border-white/8 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/30 transition-all">
                  <Mail className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">Email Dispatch</span>
                  <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
                    contact.makhdum@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a 
                href="https://wa.me/8801903458910" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 rounded-2xl transition-all group"
              >
                <div className="w-12 h-12 bg-black rounded-xl border border-white/8 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/30 transition-all">
                  <MessageSquare className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">WhatsApp Link</span>
                  <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
                    +880 1903458910
                  </span>
                </div>
              </motion.a>

              {/* Telephone */}
              <motion.a 
                href="tel:+8801903458910"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 rounded-2xl transition-all group"
              >
                <div className="w-12 h-12 bg-black rounded-xl border border-white/8 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/30 transition-all">
                  <Phone className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">Voice Hotkey</span>
                  <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
                    +880 1903458910
                  </span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Screen-reader-only live region for status announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {statusAnnouncement}
      </div>

      {/* Right Column: High-End Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#0F1115] border border-white/5 hover:border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/80 order-1 lg:order-2"
          >
            <h3 className="font-display font-black text-xl text-white tracking-wide uppercase mb-8 pb-3 border-b border-white/5">
              SECURE TELEMETRY FORM
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2 relative">
                <label htmlFor="name" className="block font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                  Sender Name / Alias
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. ALEXANDER NIKOLA"
                  className="w-full bg-black/40 border border-white/8 hover:border-white/20 focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 transition-all outline-none"
                  data-cursor="text"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2 relative">
                <label htmlFor="email" className="block font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                  Telemetry Return Address (Email)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. client@agency.com"
                  className="w-full bg-black/40 border border-white/8 hover:border-white/20 focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 transition-all outline-none"
                  data-cursor="text"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2 relative">
                <label htmlFor="message" className="block font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                  Encrypted Project Specification
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Define the technical boundaries or collaborative scope..."
                  className="w-full bg-black/40 border border-white/8 hover:border-white/20 focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 transition-all outline-none resize-none"
                  data-cursor="text"
                />
              </div>

              {/* Large Animated Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full py-4 rounded-xl font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer disabled:cursor-default"
                  style={{
                    backgroundColor: isSent ? '#00c853' : '#FF5C00',
                    color: '#FFFFFF',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>COMPILING TRANSMISSION...</span>
                    </>
                  ) : isSent ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>TRANSMISSION COMPLETED SUCCESSFULLY</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>TRANSMIT PACKETS</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

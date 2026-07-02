'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MessageSquare,
  Check,
  Send,
  User,
  FileText,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import SectionLabel from './SectionLabel';

const MAX_MESSAGE = 600;

type Field = 'name' | 'email' | 'message';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<Record<Field, boolean>>({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [statusAnnouncement, setStatusAnnouncement] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: Field) => setTouched((p) => ({ ...p, [field]: true }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const nameValid = formData.name.trim().length >= 2;
  const messageValid = formData.message.trim().length >= 10;

  const nameError = touched.name && !nameValid;
  const emailError = touched.email && !emailValid;
  const messageError = touched.message && !messageValid;

  const formComplete = nameValid && emailValid && messageValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!formComplete || isSubmitting || isSent) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
    );
    const href = `mailto:contact.makhdum@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(true);
    setStatusAnnouncement(
      'Compiling transmission. Please wait while your message is being prepared.',
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setStatusAnnouncement(
        'Transmission completed successfully. Your message has been routed to the mail client.',
      );
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
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
      {/* Atmospheric glows */}
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
            <span className="text-[#FF5C00]">SOMETHING</span>{' '}
            <br />
            <span className="text-stroke text-stroke-hover">MEANINGFUL</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Direct Transmissions */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed">
              Have an advanced computational project in mind? Looking for an engineering asset
              to amplify your team? Reach out via telemetry or dispatch an email directly.
              Let&apos;s assemble the architecture.
            </p>

            <div className="space-y-4">
              {[
                {
                  href: 'mailto:contact.makhdum@gmail.com',
                  Icon: Mail,
                  label: 'Email Dispatch',
                  value: 'contact.makhdum@gmail.com',
                  external: false,
                },
                {
                  href: 'https://wa.me/8801903458910',
                  Icon: MessageSquare,
                  label: 'WhatsApp Link',
                  value: '+880 1903458910',
                  external: true,
                },
                {
                  href: 'tel:+8801903458910',
                  Icon: Phone,
                  label: 'Voice Hotkey',
                  value: '+880 1903458910',
                  external: false,
                },
              ].map(({ href, Icon, label, value, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] hover:border-[#FF5C00]/30 rounded-2xl transition-all overflow-hidden"
                >
                  {/* Hover sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#FF5C00]/0 via-[#FF5C00]/10 to-[#FF5C00]/0 transition-transform duration-700 ease-out" />
                  <div className="relative z-10 w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/40 transition-all">
                    <Icon className="w-5 h-5 text-[#FF5C00]" />
                  </div>
                  <div className="relative z-10 flex-1 min-w-0">
                    <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="block font-display font-bold text-sm text-white group-hover:text-[#FF8A2D] transition-colors truncate">
                      {value}
                    </span>
                  </div>
                  <ArrowUpRight className="relative z-10 w-4 h-4 text-[#8A8A8A] group-hover:text-[#FF5C00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 pt-2 text-[#8A8A8A]">
              <ShieldCheck className="w-4 h-4 text-[#FF5C00]" />
              <span className="font-mono text-[10px] uppercase tracking-wider">
                End-to-end private · No trackers
              </span>
            </div>
          </div>

          {/* Screen-reader live region */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {statusAnnouncement}
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="group relative rounded-2xl">
              {/* Animated aurora border ring */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#FF5C00]/0 via-[#FF5C00]/40 to-[#FF8A2D]/0 opacity-60 blur-[2px] group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-[1.5px] rounded-2xl opacity-70"
                style={{
                  background:
                    'conic-gradient(from 0deg, #FF5C00, #FF8A2D, #FF5C00, #050505, #FF5C00)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative bg-[#0F1115] rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/80">
                {/* Header row */}
                <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.06]">
                  <h3 className="font-display font-black text-xl text-white tracking-wide uppercase">
                    Secure Telemetry Form
                  </h3>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/25">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF5C00]" />
                    </span>
                    <span className="font-mono text-[9px] text-[#FF8A2D] uppercase tracking-wider">
                      LIVE
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <Field
                    id="name"
                    label="Sender Name / Alias"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('name')}
                    Icon={User}
                    placeholder="e.g. Alexander Nikola"
                    error={nameError ? 'Name must be at least 2 characters.' : undefined}
                    delay={0.05}
                  />

                  <Field
                    id="email"
                    type="email"
                    label="Telemetry Return Address (Email)"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('email')}
                    Icon={Mail}
                    placeholder="e.g. client@agency.com"
                    error={emailError ? 'Enter a valid email address.' : undefined}
                    delay={0.12}
                  />

                  <Field
                    id="message"
                    label="Encrypted Project Specification"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('message')}
                    Icon={FileText}
                    placeholder="Define the technical boundaries or collaborative scope..."
                    multiline
                    maxLength={MAX_MESSAGE}
                    error={messageError ? 'Briefly describe the scope (min 10 chars).' : undefined}
                    hint={`${formData.message.length} / ${MAX_MESSAGE}`}
                    delay={0.19}
                  />

                  {/* Submit Button */}
                  <div className="pt-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || isSent}
                      whileHover={!isSubmitting && !isSent ? { scale: 1.01 } : undefined}
                      whileTap={!isSubmitting && !isSent ? { scale: 0.99 } : undefined}
                      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                      className={`relative w-full overflow-hidden rounded-xl font-display text-xs font-bold tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed ${
                        isSent
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-black shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)]'
                          : isSubmitting
                            ? 'bg-gradient-to-r from-[#FF5C00]/70 to-[#FF8A2D]/70 text-white'
                            : 'text-white shadow-[0_10px_40px_-10px_rgba(255,92,0,0.6)] hover:shadow-[0_14px_50px_-10px_rgba(255,92,0,0.85)]'
                      }`}
                      style={isSent || isSubmitting ? undefined : {
                        background: 'linear-gradient(110deg, #FF5C00 0%, #FF7A1F 45%, #FF8A2D 100%)',
                      }}
                    >
                      {/* Shine sweep */}
                      {!isSubmitting && !isSent && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-y-0 -left-[40%] w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent group-hover:animate-none"
                          style={{ animation: 'shine 2.6s ease-in-out infinite' }}
                        />
                      )}

                      {/* Success ripple */}
                      <AnimatePresence>
                        {isSent && (
                          <motion.span
                            key="ripple"
                            aria-hidden
                            initial={{ scale: 0, opacity: 0.6 }}
                            animate={{ scale: 6, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white"
                          />
                        )}
                      </AnimatePresence>

                      <span className="relative flex items-center gap-2.5">
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Compiling Transmission</span>
                          </>
                        ) : isSent ? (
                          <>
                            <Check className="w-4 h-4" strokeWidth={3} />
                            <span>Transmission Completed</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 -translate-x-0 group-hover:translate-x-0 transition-transform" />
                            <span>Transmit Packets</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>

                    {/* Helper line */}
                    <div className="mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider">
                      <span className="flex items-center gap-1.5 text-[#8A8A8A]">
                        <Sparkles className="w-3 h-3 text-[#FF5C00]" />
                        {formComplete ? 'All channels clear · ready to send' : 'Awaiting valid input'}
                      </span>
                      <span className="text-[#FF5C00]/60">
                        Encrypted · Mail-client handoff
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(0) skewX(-20deg); }
          60% { transform: translateX(360%) skewX(-20deg); }
          100% { transform: translateX(360%) skewX(-20deg); }
        }
      `}</style>
    </section>
  );
}

/* ============================== Field Component ============================== */

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: () => void;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  placeholder: string;
  type?: string;
  multiline?: boolean;
  maxLength?: number;
  error?: string;
  hint?: string;
  delay?: number;
};

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  Icon,
  placeholder,
  type = 'text',
  multiline = false,
  maxLength,
  error,
  hint,
  delay = 0,
}: FieldProps) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;
  const floating = focused || filled;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="space-y-1.5"
    >
      <div
        className={`relative rounded-xl bg-black/40 border transition-all duration-300 ${
          error
            ? 'border-red-500/50 shadow-[0_0_0_3px_rgba(239,68,68,0.12)]'
            : focused
              ? 'border-[#FF5C00]/70 shadow-[0_0_0_3px_rgba(255,92,0,0.18)]'
              : 'border-white/[0.08] hover:border-white/20'
        }`}
      >
        {/* Focus sweep line */}
        <span
          aria-hidden
          className={`pointer-events-none absolute left-0 top-0 h-[2px] w-full origin-left rounded-t-xl bg-gradient-to-r from-[#FF5C00] via-[#FF8A2D] to-[#FF5C00] transition-transform duration-500 ${
            focused ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        <label
          htmlFor={id}
          className={`absolute left-12 font-mono text-[10px] uppercase tracking-wider pointer-events-none transition-all duration-200 ${
            floating
              ? 'top-1.5 text-[#FF8A2D] text-[9px]'
              : 'top-1/2 -translate-y-1/2 text-[#8A8A8A]'
          } ${multiline && !floating ? 'top-3 translate-y-0' : ''}`}
        >
          {label}
        </label>

        <div className="relative flex items-start">
          <div
            className={`pl-4 pr-2 pt-3.5 transition-colors ${
              focused ? 'text-[#FF5C00]' : 'text-[#8A8A8A]'
            }`}
          >
            <Icon className="w-4 h-4" strokeWidth={1.75} />
          </div>

          {multiline ? (
            <textarea
              id={id}
              name={id}
              required
              rows={4}
              maxLength={maxLength}
              value={value}
              onChange={onChange}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false);
                onBlur();
              }}
              placeholder={floating ? placeholder : ''}
              className="peer w-full bg-transparent rounded-xl pl-1 pr-4 pt-5 pb-3 text-sm text-white placeholder-white/30 outline-none resize-none transition-all"
              data-cursor="text"
            />
          ) : (
            <input
              id={id}
              name={id}
              type={type}
              required
              value={value}
              onChange={onChange}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false);
                onBlur();
              }}
              placeholder={floating ? placeholder : ''}
              className="peer w-full bg-transparent rounded-xl pl-1 pr-4 pt-5 pb-3 text-sm text-white placeholder-white/30 outline-none transition-all"
              data-cursor="text"
            />
          )}
        </div>
      </div>

      {/* Row: error + hint */}
      <div className="flex items-center justify-between min-h-[14px] px-1">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.span
              key="err"
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="text-[10px] font-mono text-red-400"
            >
              {error}
            </motion.span>
          ) : (
            <motion.span
              key="ok"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] font-mono text-[#8A8A8A]/60"
            >
              {/* spacer keeps height stable */}
              &nbsp;
            </motion.span>
          )}
        </AnimatePresence>

        {hint && (
          <span className="text-[10px] font-mono text-[#8A8A8A]/70 tabular-nums">
            {hint}
          </span>
        )}
      </div>
    </motion.div>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Code, Server, Cpu, Wrench, Sparkles, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0 to 100 for visual progress meter
  description: string;
}

interface SkillCategory {
  id: string;
  index: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  skills: Skill[];
}

export default function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>('ai-ml'); // Open AI/ML by default as key highlight

  const categories: SkillCategory[] = [
    {
      id: 'ai-ml',
      index: '01',
      title: 'AI & Machine Learning',
      icon: <Cpu className="w-5 h-5 text-[#FF5C00]" />,
      summary: 'Architecting intelligent pipelines, agentic workflows, and semantic interfaces.',
      skills: [
        { name: 'Generative AI & LLMs (Gemini, OpenAI SDK)', level: 90, description: 'Prompt orchestration, function calling, unstructured knowledge graphs.' },
        { name: 'Agentic Workflows (LangChain, Custom Agents)', level: 85, description: 'Tool integration, multi-agent frameworks, self-correcting pipelines.' },
        { name: 'Model Tuning & Fine-Tuning', level: 75, description: 'Instruction alignment, parameter optimization, embeddings, semantic databases.' },
        { name: 'Computer Vision & NLP Foundations', level: 80, description: 'Spatial analysis, feature extraction, convolutional architectures.' }
      ]
    },
    {
      id: 'backend',
      index: '02',
      title: 'Backend Engineering',
      icon: <Server className="w-5 h-5 text-[#FF5C00]" />,
      summary: 'Building high-throughput, secure server nodes and relational schemas.',
      skills: [
        { name: 'Node.js & Express / NestJS', level: 92, description: 'Asynchronous concurrency models, REST APIs, WebSocket interfaces.' },
        { name: 'PostgreSQL & Cloud SQL', level: 88, description: 'Relational database schema optimization, indexing, indexing strategies.' },
        { name: 'Firebase & Firestore / Auth', level: 90, description: 'Real-time database triggers, secure auth paradigms, cloud firestore.' },
        { name: 'System Security & Encryption', level: 82, description: 'JWT/OAuth, secure request validation, environmental variables integrity.' }
      ]
    },
    {
      id: 'frontend',
      index: '03',
      title: 'Frontend Architecture',
      icon: <Code className="w-5 h-5 text-[#FF5C00]" />,
      summary: 'Crafting responsive, editorial visual layouts with micro-interactions.',
      skills: [
        { name: 'Next.js 15 & React 19', level: 95, description: 'Server components by default, Server actions, partial hydration, standalone configurations.' },
        { name: 'TypeScript & Typings Architecture', level: 90, description: 'Rigorous type-safety, interface patterns, compile-time validation.' },
        { name: 'Tailwind CSS (v4)', level: 98, description: 'Tailwind utility classes, custom theme configuration, responsive adaptive typography.' },
        { name: 'Framer Motion & Custom Physics', level: 88, description: 'Scroll-spy layout triggers, layoutId synchronization, fluid hardware-accelerated animations.' }
      ]
    },
    {
      id: 'tools',
      index: '04',
      title: 'Engineering Tools & Workflows',
      icon: <Wrench className="w-5 h-5 text-[#FF5C00]" />,
      summary: 'Automating developer environments, container pipelines, and compilation.',
      skills: [
        { name: 'Git & GitHub Workflows', level: 90, description: 'Action pipelines, clean branch models, custom semantic versions.' },
        { name: 'Docker / Cloud Run Deployments', level: 85, description: 'Containerization, microservices hosting, scale-to-zero configurations.' },
        { name: 'Linters & Performance Audits', level: 92, description: 'ESLint configurations, bundle size optimizations, high Lighthouse metrics.' },
        { name: 'API Grounding & WebSockets', level: 86, description: 'Live streams, bi-directional client events, JSON schemas.' }
      ]
    }
  ];

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="skills" 
      className="relative min-h-screen bg-[#0F1115] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden border-y border-white/5"
    >
      {/* Background neon rim overlay */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] sunset-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] sunset-glow opacity-10 pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2.5 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
            <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">02 / COMPETENCIES</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-white tracking-tight uppercase"
          >
            SYSTEM SKILLS & <br />
            <span className="text-stroke text-stroke-hover">INTELLIGENCE</span> INDEX
          </motion.h2>
        </div>

        {/* Accordion Categories Container */}
        <div className="space-y-4">
          {categories.map((category, catIndex) => {
            const isExpanded = expandedId === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  isExpanded 
                    ? 'bg-black/50 border-[#FF5C00]/30 shadow-xl shadow-black/40' 
                    : 'bg-black/10 border-white/5 hover:border-white/10 hover:bg-black/20'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(category.id)}
                  className="w-full px-6 md:px-8 py-7 flex items-center justify-between text-left cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-6 md:space-x-8">
                    {/* Index */}
                    <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-widest block">
                      {category.index}
                    </span>
                    
                    {/* Icon & Title */}
                    <div className="flex items-center space-x-4">
                      {category.icon}
                      <h3 className="font-display font-extrabold text-lg md:text-xl lg:text-2xl text-white tracking-wide uppercase">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right side helper info */}
                  <div className="flex items-center space-x-4">
                    <span className="hidden md:inline-block font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                      {isExpanded ? 'ACTIVE_INDEX' : 'COLLAPSED'}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className={`w-5 h-5 ${isExpanded ? 'text-[#FF5C00]' : 'text-[#8A8A8A]'}`} />
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Body Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
                        {/* Summary description */}
                        <p className="text-xs md:text-sm text-[#8A8A8A] leading-relaxed max-w-xl mb-8 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                          <span>{category.summary}</span>
                        </p>

                        {/* List of Skills inside category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                          {category.skills.map((skill, skillIndex) => (
                            <div 
                              key={skill.name} 
                              className="group/skill"
                            >
                              {/* Name and percentage */}
                              <div className="flex justify-between items-baseline mb-2">
                                <span className="font-display font-bold text-xs uppercase text-white/90 group-hover/skill:text-[#FF8A1D] transition-colors tracking-wide">
                                  {skill.name}
                                </span>
                                <span className="font-mono text-[10px] text-[#FF5C00] font-bold">
                                  {skill.level}%
                                </span>
                              </div>

                              {/* Custom progress lines */}
                              <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full mb-2">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-[#FF5C00] to-[#FF8A1D] absolute top-0 left-0"
                                />
                              </div>

                              {/* Tech detailed description */}
                              <p className="text-[10px] text-[#8A8A8A] leading-relaxed">
                                {skill.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

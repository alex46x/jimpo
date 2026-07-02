'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Coffee, Code2, Cpu, Compass } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function About() {
  const timelineData = [
    {
      year: "2018",
      title: "First Lines of Code",
      description: "Discovered programming through local robotics workshops. Intrigued by the intersection of hardware logic and high-level compiler automation."
    },
    {
      year: "2020",
      title: "Full-Stack Exploration",
      description: "Dived deep into standard software architectures, database design, and optimization models. Built production web structures during the quarantine."
    },
    {
      year: "2022",
      title: "HSC Graduation",
      description: "Completed Higher Secondary Certificate at the prestigious Govt BL College with a focus on advanced physical sciences and mathematical foundations."
    },
    {
      year: "2024",
      title: "System Intelligence",
      description: "Began academic studies (BSc) at North Western University while simultaneously researching generative AI paradigms and agentic workflows."
    },
    {
      year: "Present",
      title: "CRAFTING FUTURE CONCEPTS",
      description: "Building production-grade applications that combine structural software design with sophisticated large language model integrations."
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-[#050505] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background glow and subtle grids */}
      <div className="absolute top-1/2 left-[-10%] w-[50vw] h-[50vw] sunset-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] sunset-glow opacity-10 pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <SectionLabel prefix="01" title="DISCIPLINE" className="mb-4" />

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase"
          >
            THE ART OF <br />
            <span className="text-stroke text-stroke-hover">RESTRUCTURING</span> REALITY
          </motion.h2>
        </div>

        {/* Editorial Layout: Split Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Big Statement & Detailed Bio */}
          <div className="lg:col-span-6 space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-display font-light text-2xl md:text-3xl lg:text-4xl leading-snug text-white/90"
            >
              Shah Makhdum is a Software & AI Engineer who merges rigorous system logic with fluid human experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6 text-[#8A8A8A] text-sm md:text-base leading-relaxed"
            >
              <p>
                My programming journey started with a simple question: <span className="text-white font-medium">How can we teach systems to think, rather than just execute?</span> This curiosity quickly developed into an obsession with scalable software architecture, deep agentic pipelines, and custom machine learning implementations.
              </p>
              
              <p>
                I thrive in environments where technical constraints demand creative problem-solving. Whether it is tuning full-stack performance bottlenecks, designing secure cloud models, or building agent infrastructures with the Gemini API, I view every challenge as an opportunity to ship clean, timeless code.
              </p>

              {/* Side Stories: Travel & Food */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-white">
                    <Compass className="w-4 h-4 text-[#FF5C00]" />
                    <span className="font-display font-bold text-xs uppercase tracking-widest">Wanderlust</span>
                  </div>
                  <p className="text-xs text-[#8A8A8A]">
                    Outside of terminal windows, I explore geography. Traveling refreshes my mental scope, forcing me to appreciate diverse human perspectives and offline cultures.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-white">
                    <Coffee className="w-4 h-4 text-[#FF5C00]" />
                    <span className="font-display font-bold text-xs uppercase tracking-widest">Food Culture</span>
                  </div>
                  <p className="text-xs text-[#8A8A8A]">
                    An avid explorer of traditional food cultures. I see culinary arts as another form of design—perfect balance, raw passion, and meticulous ingredient orchestration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-End Interactive Timeline */}
          <div className="lg:col-span-6 relative pl-4 md:pl-8 border-l border-white/8 py-2">
            <span className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-[#FF5C00] z-10" />
            <span className="absolute bottom-0 left-[-4px] w-2 h-2 rounded-full bg-white/20 z-10" />
            
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-white/50 mb-12">
              TIMELINE OF COMPILATION
            </h3>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group pl-6"
                >
                  {/* Timeline point hover glowing ring */}
                  <div className="absolute top-1.5 left-[-29px] w-3 h-3 rounded-full bg-[#050505] border border-[#8A8A8A] group-hover:border-[#FF5C00] group-hover:bg-[#FF5C00]/10 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#8A8A8A] group-hover:bg-[#FF5C00] rounded-full transition-colors" />
                  </div>

                  {/* Year Tag */}
                  <span className="inline-block font-mono text-xs font-bold text-[#FF5C00] mb-2 tracking-widest bg-[#FF5C00]/5 px-2 py-0.5 rounded border border-[#FF5C00]/10">
                    {item.year}
                  </span>

                  {/* Text details */}
                  <h4 className="font-display font-extrabold text-base text-white tracking-wide uppercase mb-1.5 transition-colors group-hover:text-[#FF8A1D]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

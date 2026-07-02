'use client';

import React, { Suspense, useState } from 'react';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import EducationAndExperience from '@/components/EducationAndExperience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Lightweight skeleton painted while each heavy client subtree hydrates.
 * Keeps perceived load time low when sections lazy-commit.
 */
function SectionFallback() {
  return (
    <div className="w-full py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="h-2 w-24 rounded-full bg-white/5 animate-pulse" />
        <div className="h-10 w-2/3 rounded-md bg-white/5 animate-pulse" />
        <div className="h-4 w-full rounded-md bg-white/5 animate-pulse" />
        <div className="h-4 w-5/6 rounded-md bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic intro loader */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main app viewport */}
      {!isLoading && (
        <div className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-[#FF5C00] selection:text-white">
          {/* Hardware-accelerated custom cursor */}
          <CustomCursor />

          {/* Floating glassmorphic header */}
          <Navbar />

          {/* Content sections — each lazy boundary isolates hydration cost
              so the Loader→Content handoff stays smooth. */}
          <main>
            <Suspense fallback={<SectionFallback />}>
              <Hero />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <About />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <EducationAndExperience />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Contact />
            </Suspense>
          </main>

          {/* Minimal, elegant brand footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

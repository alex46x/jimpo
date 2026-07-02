'use client';

import * as React from 'react';
import { motion } from 'motion/react';

interface SectionLabelProps {
  /** Zero-padded section index, e.g. "01", "02", "03" */
  prefix: string;
  /** Short uppercase noun, e.g. "DISCIPLINE", "COMPETENCIES" */
  title: string;
  /** Optional className merged onto the outer wrapper. */
  className?: string;
  /** Disable the entry animation for tests / SSR shells. */
  animate?: boolean;
}

/**
 * SectionLabel — the tiny orange "01 / DISCIPLINE" eyebrow used at the top
 * of every section. Centralized so the typography, spacing, and animation
 * stay in lock-step across the site.
 */
export default function SectionLabel({
  prefix,
  title,
  className = '',
  animate = true,
}: SectionLabelProps) {
  const content = (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
      <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">
        {prefix} / {title}
      </span>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
}

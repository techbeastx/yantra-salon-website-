"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// Simulated before/after using CSS gradients since we have a single stylist image
// In production, replace with real before/after photos
const BEFORE_LABEL = "Before";
const AFTER_LABEL = "After";

export function BeforeAfter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSlider = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const percentage = Math.min(Math.max((relativeX / rect.width) * 100, 2), 98);
      setSliderPos(percentage);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => { if (isDragging) updateSlider(e.clientX); },
    [isDragging, updateSlider]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => { if (isDragging) updateSlider(e.touches[0].clientX); },
    [isDragging, updateSlider]
  );

  return (
    <section id="results" ref={sectionRef} className="bg-[#080808] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold">
            The Transformation
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-light leading-[1.1]">
            See the<br />
            <em className="italic text-[#C9A84C]">difference.</em>
          </h2>
          <p className="text-white/40 text-sm font-light mt-6 max-w-md mx-auto leading-relaxed">
            Drag to reveal the transformation. Real results, real clients.
          </p>
        </motion.div>

        {/* Before / After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          ref={sliderRef}
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* AFTER side - full width base */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #1a0f0a 0%, #2d1a0e 30%, #1a0d0a 60%, #0d0808 100%)",
              }}
            />
            {/* Simulated "after" glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-48 h-48 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <div className="text-center">
                <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-[#C9A84C] mb-2 italic">Radiant Glow</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">Post treatment</p>
              </div>
            </div>
          </div>

          {/* BEFORE side - clip on left */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div
              className="absolute inset-0"
              style={{
                width: `${(100 / sliderPos) * 100}%`,
                background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 40%, #1e1e1e 70%, #111 100%)",
              }}
            />
            <div
              className="absolute inset-0 flex items-end justify-center pb-16"
              style={{ width: `${(100 / sliderPos) * 100}%` }}
            >
              <div className="text-center">
                <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-white/60 mb-2 italic">Natural State</p>
                <p className="text-white/30 text-xs uppercase tracking-widest">Pre treatment</p>
              </div>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-[2px] h-full bg-white/30" />
            <div className="absolute w-12 h-12 rounded-full bg-white shadow-xl shadow-black/50 flex items-center justify-center gap-1 cursor-col-resize">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8L2 5M2 5L5 2M2 5H14M14 5L11 2M14 5L11 8" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 11L2 8M2 8L5 5M2 8H14M14 8L11 5M14 8L11 11" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(0 3)"/>
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
            <span className="text-white/60 text-[10px] uppercase tracking-[0.25em] font-medium">{BEFORE_LABEL}</span>
          </div>
          <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-full bg-[#C9A84C]/20 backdrop-blur-sm border border-[#C9A84C]/30">
            <span className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] font-medium">{AFTER_LABEL}</span>
          </div>
        </motion.div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center text-white/20 text-xs uppercase tracking-[0.3em] mt-8"
        >
          ← Drag to reveal →
        </motion.p>
      </div>
    </section>
  );
}

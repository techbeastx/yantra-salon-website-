"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Using Unsplash for demo grid — in production replace with real Instagram embeds
const posts = [
  { id: 1, color: "from-[#2a1a0e] to-[#1a0e06]", label: "Bridal Look", tall: true },
  { id: 2, color: "from-[#0f0f0f] to-[#1a1510]", label: "Hair Color", tall: false },
  { id: 3, color: "from-[#120c08] to-[#1e1208]", label: "Skin Glow", tall: false },
  { id: 4, color: "from-[#1a1200] to-[#2a1e00]", label: "Nail Art", tall: false },
  { id: 5, color: "from-[#0d0d0d] to-[#1a1710]", label: "Spa Day", tall: true },
  { id: 6, color: "from-[#150e08] to-[#1f1508]", label: "Keratin", tall: false },
];

export function InstagramShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={sectionRef} className="bg-[#0a0a0a] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold">
              Instagram
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-light leading-[1.1]">
              A glimpse of<br />
              <em className="italic text-[#C9A84C]">our craft.</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/yantrasalon"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-btn"
            className="group flex items-center gap-3 px-7 py-3.5 border border-white/10 rounded-full text-white/60 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-400"
          >
            <InstagramIcon size={16} className="transition-transform group-hover:scale-110 duration-300" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Follow @yantrasalon</span>
          </a>
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[280px]">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/yantrasalon"
              target="_blank"
              rel="noopener noreferrer"
              id={`instagram-post-${post.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.8, ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${post.tall ? "row-span-2" : "row-span-1"}`}
            >
              {/* Gradient background (replace with <Image> in production) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />

              {/* Decorative gold accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[#C9A84C]/5" />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3">
                <InstagramIcon size={28} className="text-white" />
                <span className="text-white text-xs uppercase tracking-[0.25em] font-medium">{post.label}</span>
              </div>

              {/* Gold corner */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-r-[50px] border-t-[#C9A84C]/10 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Label chip */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-white/80 text-[10px] uppercase tracking-widest">{post.label}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/yantrasalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white/40 hover:text-[#C9A84C] transition-colors duration-300 text-sm font-light tracking-wide group"
          >
            <InstagramIcon size={16} />
            <span>See more on Instagram</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

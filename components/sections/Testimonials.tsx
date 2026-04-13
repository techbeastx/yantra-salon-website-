"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    service: "Bridal Makeup",
    rating: 5,
    text: "Yantra Salon completely transformed my bridal appearance. The team's attention to detail was extraordinary — every brush stroke felt intentional and breathtaking. My guests couldn't stop complimenting me throughout the entire wedding.",
    initial: "PS",
  },
  {
    name: "Deepika Rathore",
    service: "Keratin Treatment",
    rating: 5,
    text: "I've visited many salons, but nothing compares to Yantra's level of service. The keratin treatment left my hair silkier than I imagined possible. The ambience, the hygiene, the expertise — all absolutely world-class.",
    initial: "DR",
  },
  {
    name: "Meera Joshi",
    service: "HydraFacial",
    rating: 5,
    text: "The skin therapy here is genuinely transformative. After just one session my skin looked like I'd been on a 2-week vacation. The products they use are premium and the therapist's technique is impeccable.",
    initial: "MJ",
  },
  {
    name: "Anita Kulkarni",
    service: "Hair Color",
    rating: 5,
    text: "They really understand hair. My Balayage came out looking exactly like the reference — actually better. The colorist consulted with me for 20 minutes before starting. That level of care is rare to find.",
    initial: "AK",
  },
  {
    name: "Kavya Singh",
    service: "Party Makeup",
    rating: 5,
    text: "I walked in nervous and walked out feeling like a celebrity. The makeup lasted all night through dancing, heat, and everything. Absolutely unmatched in all of Jodhpur. My go-to salon now.",
    initial: "KS",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={sectionRef} className="bg-[#050505] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-end justify-between gap-6"
        >
          <div>
            <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold">
              Client Voices
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-light leading-[1.1]">
              Stories of<br />
              <em className="italic text-[#C9A84C]">transformation.</em>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-[#C9A84C] text-lg">★</span>
              ))}
            </div>
            <div>
              <p className="text-white text-2xl font-serif">4.9</p>
              <p className="text-white/40 text-[10px] uppercase tracking-wide">966 Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-16 pb-4"
        style={{ cursor: "grab" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            id={`testimonial-${i + 1}`}
            className="shrink-0 w-[380px] md:w-[440px] bg-[#0d0d0d] border border-white/5 rounded-2xl p-10 flex flex-col gap-6 hover:border-[#C9A84C]/20 transition-colors duration-500"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, s) => (
                <span key={s} className="text-[#C9A84C] text-sm">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/70 text-[0.95rem] font-light leading-[1.8] flex-1">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C]/60 to-[#C9A84C]/20 flex items-center justify-center">
                <span className="text-[#050505] text-xs font-semibold">{t.initial}</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-[#C9A84C]/60 text-[10px] uppercase tracking-[0.2em] mt-0.5">{t.service}</p>
              </div>
              <div className="ml-auto">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 2L2 18M18 2H8M18 2V12" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* CTA card */}
        <div className="shrink-0 w-[280px] bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl p-10 flex flex-col items-center justify-center gap-6 hover:bg-[#C9A84C]/10 transition-colors duration-500 cursor-pointer group">
          <div className="w-16 h-16 rounded-full border border-[#C9A84C]/40 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
            <span className="text-[#C9A84C] text-2xl">★</span>
          </div>
          <div className="text-center">
            <p className="font-serif text-xl text-white font-light mb-2">Leave a<br />Review</p>
            <p className="text-white/30 text-xs tracking-wide">Share your experience</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

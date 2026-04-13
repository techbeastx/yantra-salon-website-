"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import gsap from "gsap";

const sentence = "Yantra Salon";
const letters = sentence.split("");

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Badge
    tl.fromTo(badgeRef.current, 
      { opacity: 0, y: 20, letterSpacing: "0.5em" },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Each letter of the title
    tl.fromTo(".hero-letter",
      { opacity: 0, y: 80, rotateX: -60 },
      { 
        opacity: 1, y: 0, rotateX: 0,
        duration: 1, stagger: 0.04, ease: "power4.out"
      },
      "-=0.8"
    );

    // Subtitle + CTA
    tl.fromTo([subtitleRef.current, ctaRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-[#050505]"
      style={{ perspective: "1000px" }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 h-[120%] w-full top-[-10%]"
      >
        <Image
          src="/hero.jpg"
          alt="Yantra Salon luxury interior"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505]"
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
      >
        {/* Rating badge */}
        <motion.p
          ref={badgeRef}
          className="uppercase tracking-[0.4em] text-[10px] text-[#C9A84C] mb-8 font-semibold opacity-0 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-[#C9A84C]/60" />
          Exclusively For Women
          <span className="inline-block w-8 h-px bg-[#C9A84C]/60" />
        </motion.p>

        {/* Animated title */}
        <h1
          className="font-serif font-light text-[clamp(4rem,12vw,9rem)] text-white leading-none tracking-[-0.02em] mb-6"
          style={{ perspective: "600px" }}
          aria-label="Yantra Salon"
        >
          {letters.map((letter, i) => (
            <span
              key={i}
              className="hero-letter inline-block opacity-0"
              style={{ display: letter === " " ? "inline" : "inline-block", whiteSpace: letter === " " ? "pre" : undefined }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="opacity-0 font-sans text-sm md:text-base text-white/50 tracking-[0.2em] uppercase mb-12 font-light"
        >
          Jodhpur, Rajasthan &nbsp;·&nbsp; Est. 2010
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:02912433521"
            id="hero-cta-book"
            className="group px-10 py-4 bg-[#C9A84C] text-[#050505] rounded-full text-[11px] tracking-[0.2em] font-semibold uppercase transition-all duration-500 hover:bg-white hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] flex items-center gap-3"
          >
            Book Appointment
          </a>
          <a
            href="tel:02912433521"
            id="hero-cta-call"
            className="group px-10 py-4 border border-white/20 text-white rounded-full text-[11px] tracking-[0.2em] font-semibold uppercase transition-all duration-500 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center gap-3 backdrop-blur-sm"
          >
            <Phone size={14} className="transition-transform group-hover:rotate-12" />
            Call Now
          </a>
        </div>

        {/* Rating pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
        >
          <span className="text-[#C9A84C] text-sm">★</span>
          <span className="text-white text-xs font-medium tracking-wide">4.9</span>
          <span className="text-white/40 text-xs">·</span>
          <span className="text-white/50 text-xs tracking-wide">966 Reviews</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

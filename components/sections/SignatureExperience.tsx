"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  { label: "Happy Clients", value: "10,000+" },
  { label: "Star Rating", value: "4.9" },
  { label: "Years of Excellence", value: "14+" },
  { label: "Expert Stylists", value: "12" },
];

export function SignatureExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pinned scroll section (Apple-style)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      tl.fromTo(imageRef.current,
        { clipPath: "inset(8% 8% 8% 8% round 16px)", scale: 1.05 },
        { clipPath: "inset(0% 0% 0% 0% round 0px)", scale: 1, ease: "power2.inOut" }
      );

      tl.fromTo(textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "power3.out" },
        "-=0.5"
      );

      // Stats count up
      statsRef.current.forEach((stat, i) => {
        if (!stat) return;
        gsap.fromTo(stat,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: stat, start: "top 90%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Full-bleed image reveal */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src="/stylist.jpg"
          alt="Expert stylist at Yantra Salon"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Overlay content */}
      <div ref={textRef} className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 opacity-0">
        <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.4em] mb-6 font-semibold">
          The Experience
        </p>
        <h2 className="font-serif text-[clamp(2.5rem,7vw,6.5rem)] text-white font-light leading-[1.05] mb-8 max-w-3xl">
          Where every woman finds her{" "}
          <em className="italic text-[#C9A84C]">finest self.</em>
        </h2>
        <p className="text-white/50 text-base font-light leading-relaxed max-w-lg mb-16">
          Our expert team of stylists brings together artistry, technique, and an intuitive understanding of beauty — delivering transformations that feel deeply personal.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => { statsRef.current[i] = el; }}
              className="flex flex-col gap-1"
            >
              <span className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-white font-light leading-none">
                {f.value}
              </span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-medium">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

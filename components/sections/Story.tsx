"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stories = [
  {
    label: "01",
    title: "Beauty, Redefined\nWith Precision.",
    desc: "Every detail matters. We craft an experience tailored to your unique elegance — where artistry meets ritual.",
  },
  {
    label: "02",
    title: "Hygiene.\nTrust. Luxury.",
    desc: "Our commitment to pristine environments and premium products ensures peace of mind with every indulgent service.",
  },
  {
    label: "03",
    title: "An Exclusive\nSanctuary.",
    desc: "Designed solely for women — a private world to escape, rejuvenate, and be pampered without compromise.",
  },
];

export function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Image parallax
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      slidesRef.current.forEach((slide, i) => {
        if (!slide) return;

        const number = slide.querySelector(".story-number");
        const heading = slide.querySelector(".story-heading");
        const desc = slide.querySelector(".story-desc");
        const line = slide.querySelector(".story-line");

        gsap.set([number, heading, desc, line], { opacity: 0, y: 50 });

        ScrollTrigger.create({
          trigger: slide,
          start: "top 70%",
          onEnter: () => {
            gsap.to([number, line], {
              opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
            });
            gsap.to(heading, {
              opacity: 1, y: 0, duration: 1.1, ease: "power4.out", delay: 0.1,
            });
            gsap.to(desc, {
              opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.3,
            });
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="bg-[#050505] overflow-hidden">
      {/* Intro block */}
      <div className="container mx-auto px-6 md:px-16 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div>
            <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold">Our Philosophy</p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-light leading-[1.1]">
              The Yantra<br />
              <em className="italic text-[#C9A84C]">Standard</em>
            </h2>
          </div>
          <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
            Since our founding, we have redefined what a women's salon can be — elevating every ritual into an art form.
          </p>
        </div>

        {/* Large image with gold overlay */}
        <div className="relative h-[55vh] md:h-[70vh] rounded-2xl overflow-hidden mb-0" ref={imageRef}>
          <Image
            src="/story.jpg"
            alt="Yantra Salon treatment room"
            fill
            className="object-cover object-center scale-110"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 to-transparent" />

          {/* Floating stat */}
          <div className="absolute bottom-10 right-10 text-right">
            <p className="font-serif text-[clamp(3rem,8vw,6rem)] text-white/10 font-light leading-none">4.9</p>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em]">Star Rating</p>
          </div>
        </div>
      </div>

      {/* Story slides */}
      <div className="container mx-auto px-6 md:px-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              ref={(el) => { slidesRef.current[i] = el; }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="story-number font-serif text-[#C9A84C]/50 text-3xl italic">{story.label}</span>
                <span className="story-line inline-block w-12 h-px bg-[#C9A84C]/30" />
              </div>
              <h3
                className="story-heading font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-white leading-[1.15] font-light"
                style={{ whiteSpace: "pre-line" }}
              >
                {story.title}
              </h3>
              <p className="story-desc text-white/40 text-sm font-light leading-relaxed">
                {story.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

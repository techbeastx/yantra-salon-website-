"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, Sparkles, Heart, Flower2, Star, Brush } from "lucide-react";

const services = [
  {
    icon: Scissors,
    number: "01",
    title: "Hair Artistry",
    subtitle: "Cut · Color · Treatment",
    desc: "From precision cuts to transformative balayage — every strand shaped for your individuality.",
    accent: "Colour · Keratin · Spa",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Skin Therapy",
    subtitle: "Facial · Glow · Rejuvenation",
    desc: "Science-backed skin rituals using premium formulations for radiant, lasting luminosity.",
    accent: "HydraFacial · Cleanup · Bleach",
  },
  {
    icon: Heart,
    number: "03",
    title: "Bridal Luxury",
    subtitle: "Makeup · Draping · Package",
    desc: "Your most important day, elevated. Complete bridal transformation with bespoke artistry.",
    accent: "Airbrush · Draping · HD",
  },
  {
    icon: Flower2,
    number: "04",
    title: "Body & Spa",
    subtitle: "Massage · Waxing · Wrap",
    desc: "Head-to-toe indulgence with therapeutic touch and aromatic treatments for total renewal.",
    accent: "Deep Tissue · Aromatherapy",
  },
  {
    icon: Star,
    number: "05",
    title: "Nail Studio",
    subtitle: "Manicure · Gel · Art",
    desc: "Precision nail care and artistry — from classic elegance to avant-garde nail expression.",
    accent: "Shellac · Extensions · Nail Art",
  },
  {
    icon: Brush,
    number: "06",
    title: "Party Makeup",
    subtitle: "Occasion · Festive · Look",
    desc: "Flawless looks for every celebration. From subtle glow to full glam — your vision, perfected.",
    accent: "Airbrush · Eyes · Contouring",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
        }
      );

      // Cards stagger
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out",
            delay: (i % 3) * 0.12,
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-[#0a0a0a] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">

        {/* Section header */}
        <div ref={headingRef} className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold">
              Our Services
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-light leading-[1.1]">
              Every ritual,<br />
              <em className="text-[#C9A84C] italic">perfected.</em>
            </h2>
          </div>
          <a
            href="tel:02912433521"
            className="group flex items-center gap-3 text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-300 font-light tracking-wide animated-underline"
          >
            View all services
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="service-card group relative bg-[#0a0a0a] p-10 flex flex-col gap-6 cursor-pointer hover:bg-[#111] transition-colors duration-500"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[#C9A84C]/30 text-4xl italic font-light">
                    {service.number}
                  </span>
                  <Icon
                    size={22}
                    className="text-white/20 group-hover:text-[#C9A84C] transition-colors duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-serif text-2xl text-white font-light group-hover:text-[#C9A84C] transition-colors duration-400">
                    {service.title}
                  </h3>
                  <p className="text-[#C9A84C]/60 text-[10px] uppercase tracking-[0.25em] font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-white/40 text-sm font-light leading-relaxed mt-1">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="pt-6 border-t border-white/5">
                  <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
                    {service.accent}
                  </p>
                </div>

                {/* Hover gold line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#C9A84C] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 p-10 border border-white/5 rounded-2xl">
          <div>
            <h3 className="font-serif text-3xl text-white font-light mb-2">
              Ready to be pampered?
            </h3>
            <p className="text-white/40 text-sm font-light">Book your session today — exclusive slots for our members.</p>
          </div>
          <a
            href="tel:02912433521"
            id="services-cta-book"
            className="shrink-0 px-10 py-4 bg-[#C9A84C] text-[#050505] rounded-full text-[11px] tracking-[0.2em] font-semibold uppercase transition-all duration-500 hover:bg-white hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.03]"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

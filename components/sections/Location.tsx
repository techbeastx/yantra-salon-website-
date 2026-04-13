"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
];

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as unknown as string } },
  };

  return (
    <section id="location" ref={sectionRef} className="bg-[#050505] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold">
            Find Us
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-light leading-[1.1]">
            Visit our<br />
            <em className="italic text-[#C9A84C]">sanctuary.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Info column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-10"
          >
            {/* Address */}
            <motion.div variants={itemVariants} className="flex gap-5">
              <div className="w-11 h-11 rounded-full border border-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-1">
                <MapPin size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 font-medium">Address</p>
                <p className="text-white font-light text-base leading-relaxed">
                  Yantra Salon<br />
                  Jodhpur, Rajasthan<br />
                  India
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="flex gap-5">
              <div className="w-11 h-11 rounded-full border border-[#C9A84C]/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 font-medium">Phone</p>
                <a
                  href="tel:02912433521"
                  id="location-phone-link"
                  className="text-white font-light text-base hover:text-[#C9A84C] transition-colors duration-300"
                >
                  0291 243 3521
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={itemVariants} className="flex gap-5">
              <div className="w-11 h-11 rounded-full border border-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-1">
                <Clock size={18} className="text-[#C9A84C]" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-medium">Hours</p>
                <div className="space-y-3">
                  {hours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between gap-4">
                      <span className="text-white/50 text-sm font-light">{h.day}</span>
                      <span className="text-white/80 text-sm font-light">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div variants={itemVariants} className="flex gap-5">
              <div className="w-11 h-11 rounded-full border border-[#C9A84C]/20 flex items-center justify-center shrink-0">
              <InstagramIcon size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 font-medium">Instagram</p>
                <a
                  href="https://www.instagram.com/yantrasalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-instagram-link"
                  className="text-white font-light text-base hover:text-[#C9A84C] transition-colors duration-300"
                >
                  @yantrasalon
                </a>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="tel:02912433521"
                id="location-cta-book"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-[#050505] rounded-full text-[11px] tracking-[0.2em] font-semibold uppercase transition-all duration-500 hover:bg-white hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.03]"
              >
                Book Appointment
              </a>
            </motion.div>
          </motion.div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13879.0!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394901e636e7a1fb%3A0xf33a8c00a1b0c1c!2sJodhpur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000"
              className="w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yantra Salon Location"
              aria-label="Map showing Yantra Salon location in Jodhpur"
            />
            {/* Map overlay */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl" />
            <div className="absolute bottom-4 right-4 px-4 py-2 bg-[#050505]/80 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-white/60 text-[10px] uppercase tracking-widest">Jodhpur, Rajasthan</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

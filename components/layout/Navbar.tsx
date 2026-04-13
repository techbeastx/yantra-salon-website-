"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHasScrolled(latest > 60);
    setHidden(latest > previous && latest > 200 && !mobileOpen);
  });

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-110%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          hasScrolled
            ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Yantra Salon — scroll to top"
            className="flex flex-col leading-none group"
          >
            <span className="font-serif text-xl tracking-[0.15em] text-white uppercase group-hover:text-[#C9A84C] transition-colors duration-300">
              Yantra
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 group-hover:text-[#C9A84C]/50 transition-colors duration-300">
              Salon
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8 text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#C9A84C] transition-colors duration-300 animated-underline"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.instagram.com/yantrasalon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yantra Salon Instagram"
              className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="tel:02912433521"
              id="navbar-call-btn"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#C9A84C] text-[#050505] rounded-full text-[10px] tracking-[0.2em] font-semibold uppercase hover:bg-white transition-colors duration-300"
            >
              <Phone size={12} />
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="navbar-mobile-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden text-white/70 hover:text-white transition-colors p-1"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={() => handleNavClick(link.href)}
                className="font-serif text-4xl text-white/80 hover:text-[#C9A84C] transition-colors duration-300 font-light"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1 }}
              href="tel:02912433521"
              className="mt-4 px-10 py-4 bg-[#C9A84C] text-[#050505] rounded-full text-[11px] tracking-[0.2em] font-semibold uppercase"
            >
              Book Appointment
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

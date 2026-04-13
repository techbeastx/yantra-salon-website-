import { Phone, MapPin } from "lucide-react";

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
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/[0.04]">
      <div className="container mx-auto px-6 md:px-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand col */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <p className="font-serif text-3xl text-white tracking-wide mb-1">Yantra Salon</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A84C]/60 font-medium">Exclusively for Women</p>
            </div>
            <p className="text-white/35 text-sm font-light leading-[1.8] max-w-sm mb-8">
              Jodhpur's most trusted luxury beauty destination for women. Rated 4.9 stars by over 966 clients.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/yantrasalon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="tel:02912433521"
                aria-label="Call Yantra Salon"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Nav col */}
          <div className="lg:col-span-2">
            <h3 className="text-[9px] uppercase tracking-[0.4em] text-white/25 mb-6 font-semibold">Navigate</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 font-light hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="lg:col-span-3">
            <h3 className="text-[9px] uppercase tracking-[0.4em] text-white/25 mb-6 font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#C9A84C]/60 mt-0.5 shrink-0" />
                <a href="tel:02912433521" className="text-sm text-white/50 font-light hover:text-white transition-colors duration-300">
                  0291 243 3521
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A84C]/60 mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 font-light leading-relaxed">
                  Jodhpur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <InstagramIcon size={14} className="text-[#C9A84C]/60 mt-0.5 shrink-0" />
                <a
                  href="https://www.instagram.com/yantrasalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 font-light hover:text-[#C9A84C] transition-colors duration-300"
                >
                  @yantrasalon
                </a>
              </li>
            </ul>
          </div>

          {/* Book col */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-[9px] uppercase tracking-[0.4em] text-white/25 mb-6 font-semibold">Hours</h3>
              <ul className="space-y-2 text-sm font-light text-white/40">
                <li>Mon–Fri: 9AM – 8PM</li>
                <li>Saturday: 8AM – 9PM</li>
                <li>Sunday: 10AM – 6PM</li>
              </ul>
            </div>
            <a
              href="tel:02912433521"
              className="mt-8 inline-block px-6 py-3 border border-[#C9A84C]/30 text-[#C9A84C] rounded-full text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#C9A84C] hover:text-[#050505] transition-all duration-400 text-center"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent mb-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/20 font-light">
          <p>© {new Date().getFullYear()} Yantra Salon. All rights reserved.</p>
          <p className="tracking-wide opacity-60">Designed & Developed by <span className="text-[#C9A84C]/50">Al Hasnen</span></p>
        </div>
      </div>
    </footer>
  );
}

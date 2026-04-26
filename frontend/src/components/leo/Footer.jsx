import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { BUSINESS } from "../../data/leoContent";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#2A1810] text-[#FAF3E7] pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-[#4A2E20]">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#C75024] text-[#FAF3E7] flex items-center justify-center font-display font-bold text-2xl shadow-md">
                L
              </div>
              <div>
                <div className="font-display text-2xl font-bold">Cafe Leo</div>
                <div className="text-xs uppercase tracking-[0.22em] text-[#D4A437] mt-1">
                  Proudly Women-Owned ♀
                </div>
              </div>
            </div>
            <p className="text-[#E5D5BC] max-w-md leading-relaxed">
              A neighbourhood cafe with bold flavours and warm hearts — open
              till midnight in BTM 2nd Stage, Bengaluru.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3A2418] hover:bg-[#C75024] flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-testid="footer-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3A2418] hover:bg-[#C75024] flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-testid="footer-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#D4A437] mb-4">
              Visit
            </div>
            <ul className="space-y-2.5 text-[#E5D5BC]">
              {[
                { label: "Home", href: "#home" },
                { label: "Menu", href: "#menu" },
                { label: "About", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Find us", href: "#visit" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-[#FAF3E7] transition-colors"
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#D4A437] mb-4">
              Get in Touch
            </div>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-start gap-3 mb-3 group"
              data-testid="footer-phone"
            >
              <Phone className="w-4 h-4 mt-1 text-[#D4A437]" />
              <span className="font-display text-xl group-hover:text-[#D4A437] transition-colors">
                {BUSINESS.phone}
              </span>
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[#E5D5BC] hover:text-[#FAF3E7] transition-colors"
              data-testid="footer-address"
            >
              <MapPin className="w-4 h-4 mt-1 text-[#D4A437]" />
              <span className="leading-snug">{BUSINESS.address}</span>
            </a>
            <div className="mt-5 px-4 py-2.5 rounded-full bg-[#3A2418] inline-flex items-center gap-2 text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#D4A437]" /> Open till
              midnight today
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A78F73]">
          <div>© {new Date().getFullYear()} Cafe Leo · All rights reserved.</div>
          <div className="font-script text-base text-[#D4A437]">
            Made with love in Bengaluru.
          </div>
        </div>
      </div>
    </footer>
  );
}

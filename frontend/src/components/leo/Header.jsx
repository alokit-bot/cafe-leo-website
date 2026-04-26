import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "../../data/leoContent";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF3E7]/85 backdrop-blur-md border-b border-[#E8D9BE]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo + women-owned badge */}
        <a href="#home" className="flex items-center gap-3 group" data-testid="logo-link">
          <div className="relative">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#C75024] text-[#FAF3E7] flex items-center justify-center font-display font-bold text-xl shadow-md group-hover:rotate-[-6deg] transition-transform duration-500">
              L
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#D4A437] border-2 border-[#FAF3E7]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2A1810]">
              Cafe Leo
            </span>
            <span className="hidden sm:flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8401C] mt-1">
              <span className="text-[#D4A437]">♀</span> Women-Owned
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" data-testid="primary-nav">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#4A2E20] hover:text-[#C75024] transition-colors group"
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C75024] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Call CTA */}
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          data-testid="header-call-btn"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A1810] text-[#FAF3E7] text-sm font-medium hover:bg-[#C75024] transition-colors duration-300"
        >
          <Phone className="w-4 h-4" /> Call us
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-[#2A1810] hover:bg-[#F2E6D0]"
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF3E7] border-t border-[#E8D9BE] px-5 py-4" data-testid="mobile-menu">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#2A1810] hover:text-[#C75024] py-2"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-full bg-[#C75024] text-[#FAF3E7] text-sm font-medium w-fit"
              data-testid="mobile-call-btn"
            >
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

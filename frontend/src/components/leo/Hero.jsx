import { Star, Phone, BookOpen, Moon, MapPin } from "lucide-react";
import { BUSINESS } from "../../data/leoContent";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden grain"
    >
      {/* Decorative orange wash on the right */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 w-[45%] h-full bg-[#C75024]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 relative z-10">
          {/* Open till midnight pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A1810] text-[#FAF3E7] text-xs font-semibold uppercase tracking-[0.14em] mb-7"
            data-testid="open-till-midnight-badge"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4A437] opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#D4A437]" />
            </span>
            Open till midnight, every day
          </div>

          {/* Script accent */}
          <p className="font-script text-2xl sm:text-3xl text-[#C75024] mb-2">
            Where every cup tells a story —
          </p>

          {/* Main heading */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-bold leading-[0.95] tracking-tight text-[#2A1810]"
            data-testid="hero-headline"
          >
            Bold flavours,
            <br />
            <span className="italic text-[#C75024]">warm</span> hearts.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#4A2E20] max-w-xl leading-relaxed">
            A women-owned neighbourhood cafe in BTM Layout, pouring honest coffee,
            generous plates, and late-night comfort — until the clock strikes twelve.
          </p>

          {/* Reviews + meta row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" data-testid="hero-meta">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D4A437]"
                    fill="#D4A437"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-semibold text-[#2A1810]">{BUSINESS.rating}</span>
              <span className="text-[#4A2E20]">/ 5</span>
              <span className="text-[#4A2E20]">· {BUSINESS.reviews}+ Google reviews</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#D2BFA1]" />
            <div className="flex items-center gap-1.5 text-[#4A2E20]">
              <MapPin className="w-4 h-4" /> BTM 2nd Stage, Bengaluru
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              data-testid="hero-order-btn"
              className="btn-glow inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#C75024] text-[#FAF3E7] font-semibold tracking-wide"
            >
              <Phone className="w-5 h-5" /> Order Now
            </a>
            <a
              href="#menu"
              data-testid="hero-menu-btn"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent border-2 border-[#2A1810] text-[#2A1810] font-semibold hover:bg-[#2A1810] hover:text-[#FAF3E7] transition-colors duration-300"
            >
              <BookOpen className="w-5 h-5" /> See Our Menu
            </a>
          </div>

          {/* Hours */}
          <div className="mt-10 flex items-center gap-3 text-sm text-[#4A2E20]">
            <Moon className="w-4 h-4 text-[#C75024]" />
            <span>Open daily · 8 AM — 12 AM midnight</span>
          </div>
        </div>

        {/* RIGHT visual */}
        <div className="lg:col-span-5 relative z-10">
          <div className="relative">
            {/* Tag note */}
            <div className="hidden md:flex absolute -top-6 -left-6 z-20 items-center gap-2 px-4 py-2 rounded-full bg-[#FAF3E7] border border-[#E8D9BE] shadow-md rotate-[-4deg]">
              <span className="text-[#D4A437] text-lg leading-none">♀</span>
              <span className="font-script text-xl text-[#2A1810]">since the start</span>
            </div>

            <div className="relative rounded-[28px] overflow-hidden shadow-2xl tilt-card">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80&auto=format&fit=crop"
                alt="Cosy interior of Cafe Leo with warm lighting"
                className="w-full h-[460px] sm:h-[540px] object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Floating review card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#FAF3E7]/95 backdrop-blur-sm rounded-2xl p-4 border border-[#E8D9BE] shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C75024] text-[#FAF3E7] flex items-center justify-center font-display font-bold">
                    A
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#2A1810] text-sm">Aditi R.</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#D4A437]" fill="#D4A437" strokeWidth={0} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#4A2E20] mt-1 leading-snug">
                      "The cosiest spot in BTM. Staff actually remembers your order."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Number badge */}
            <div className="hidden md:flex absolute -bottom-6 -right-6 z-20 flex-col items-center justify-center w-28 h-28 rounded-full bg-[#D4A437] text-[#2A1810] shadow-lg rotate-[6deg]">
              <span className="font-display text-3xl font-bold leading-none">287+</span>
              <span className="text-[10px] uppercase tracking-widest mt-1">regulars</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

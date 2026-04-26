import { Heart, Moon, Star, Coffee } from "lucide-react";
import { SPECIALS } from "../../data/leoContent";
import { useReveal } from "../../hooks/useReveal";

const ICONS = { Heart, Moon, Star, Coffee };

export default function Specials() {
  const r = useReveal();
  return (
    <section
      data-testid="specials-section"
      className="py-24 lg:py-32 bg-[#2A1810] text-[#FAF3E7] relative overflow-hidden"
    >
      {/* Marquee */}
      <div className="absolute top-6 inset-x-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="marquee-track flex gap-12 whitespace-nowrap text-7xl sm:text-9xl font-display font-bold tracking-tight">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>WOMEN-OWNED · OPEN TILL MIDNIGHT · 4.8★ · </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-3xl" ref={r}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A437] mb-5">
            — What Makes Us, Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Four small things we're <span className="italic text-[#D4A437]">deeply proud</span> of.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SPECIALS.map((s, i) => {
            const Icon = ICONS[s.icon] || Coffee;
            return (
              <div
                key={i}
                data-testid={`special-card-${i}`}
                className="group relative bg-[#3A2418] hover:bg-[#C75024] border border-[#4A2E20] hover:border-[#C75024] rounded-2xl p-7 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#C75024]/20 group-hover:bg-[#FAF3E7]/10 transition-colors duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#C75024] group-hover:bg-[#FAF3E7] text-[#FAF3E7] group-hover:text-[#C75024] flex items-center justify-center mb-5 transition-colors duration-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FAF3E7] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#E5D5BC] group-hover:text-[#FAF3E7] leading-relaxed transition-colors duration-500">
                    {s.body}
                  </p>
                  <div className="mt-5 font-display text-3xl font-bold text-[#D4A437] group-hover:text-[#FAF3E7] transition-colors duration-500">
                    0{i + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

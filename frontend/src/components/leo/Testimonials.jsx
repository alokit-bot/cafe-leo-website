import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../data/leoContent";
import { useReveal } from "../../hooks/useReveal";

export default function Testimonials() {
  const r = useReveal();
  return (
    <section
      data-testid="testimonials-section"
      className="py-24 lg:py-32 bg-[#F2E6D0] relative grain"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal grid lg:grid-cols-12 gap-10 mb-14" ref={r}>
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#C75024] mb-4">
              — From The Regulars
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A1810] leading-[1.05]">
              287+ reviews. <span className="italic text-[#C75024]">Mostly five stars.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#D4A437]" fill="#D4A437" strokeWidth={0} />
                ))}
              </div>
              <span className="font-display text-3xl font-bold text-[#2A1810]">4.8</span>
              <span className="text-[#4A2E20]">/ 5 on Google</span>
            </div>
            <p className="text-[#4A2E20] text-base leading-relaxed">
              These are real words from people who walked in, sat down, and came back.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-${i}`}
              className="relative bg-[#FAF3E7] border border-[#E8D9BE] rounded-2xl p-7 lg:p-9 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-9 h-9 text-[#D4A437]/40" strokeWidth={1.5} />
              <div className="flex mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#D4A437]" fill="#D4A437" strokeWidth={0} />
                ))}
                {[...Array(5 - t.rating)].map((_, j) => (
                  <Star key={`e-${j}`} className="w-4 h-4 text-[#D4C0A0]" strokeWidth={1.5} />
                ))}
              </div>
              <p className="font-display text-lg sm:text-xl text-[#2A1810] leading-relaxed mb-6">
                "{t.body}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8D9BE]">
                <div className="w-10 h-10 rounded-full bg-[#C75024] text-[#FAF3E7] flex items-center justify-center font-display font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#2A1810] text-sm">{t.name}</div>
                  <div className="text-xs text-[#4A2E20]">{t.when} · Google review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

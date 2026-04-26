import { useReveal } from "../../hooks/useReveal";

export default function About() {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 lg:py-32 bg-[#FAF3E7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="lg:col-span-5 reveal" ref={r1}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#C75024]" />
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80&auto=format&fit=crop"
              alt="People enjoying coffee together at Cafe Leo"
              className="relative w-full h-[440px] lg:h-[520px] object-cover rounded-3xl shadow-xl"
              data-testid="about-image"
            />
            <div className="absolute -bottom-5 left-6 bg-[#2A1810] text-[#FAF3E7] px-5 py-3 rounded-full font-script text-2xl rotate-[-3deg]">
              there's always a seat for you
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 reveal" ref={r2}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#C75024] mb-5">
            — About Cafe Leo
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A1810] leading-[1.05]">
            A neighbourhood cafe with a <span className="handline">heart of fire.</span>
          </h2>

          <div className="mt-8 space-y-5 text-lg text-[#4A2E20] leading-relaxed">
            <p>
              Cafe Leo is a <strong className="text-[#2A1810]">women-owned</strong> cafe tucked into BTM 2nd Stage —
              open until midnight for those who keep odd hours, late nights, and even later
              dinners.
            </p>
            <p>
              Rated <strong className="text-[#2A1810]">4.8★ by 287+ regulars</strong>, this is the place where your
              morning filter coffee, lazy Sunday brunch, and 11:45 PM Maggi all live under
              one warm, lamp-lit roof.
            </p>
            <p className="font-script text-2xl text-[#C75024] leading-snug">
              We believe food should be honest, generous, and made with love.
            </p>
          </div>

          {/* Stat row */}
          <div className="mt-10 grid grid-cols-3 gap-6 sm:gap-10 border-t border-[#E8D9BE] pt-8">
            {[
              { v: "8AM", l: "Doors open" },
              { v: "12AM", l: "Doors close" },
              { v: "287+", l: "Regulars" },
            ].map((s, i) => (
              <div key={i} data-testid={`about-stat-${i}`}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#C75024]">
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-widest text-[#4A2E20] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

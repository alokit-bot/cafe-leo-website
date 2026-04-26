import { useState } from "react";
import { MENU } from "../../data/leoContent";
import { useReveal } from "../../hooks/useReveal";

export default function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const r1 = useReveal();
  const current = MENU.find((c) => c.id === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="py-24 lg:py-32 bg-[#F2E6D0] relative grain"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal flex items-end justify-between gap-6 flex-wrap mb-10" ref={r1}>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#C75024] mb-4">
                — On The Menu
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A1810] leading-[1.05] max-w-2xl">
                Brewed bold. <span className="italic text-[#C75024]">Plated</span> with love.
              </h2>
            </div>
            <p className="text-[#4A2E20] max-w-sm text-base">
              Prices in INR (₹). Menu rotates with the seasons — and with whatever the market
              had that morning.
            </p>
          </div>

          {/* Tabs */}
          <div
            className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 mb-10 -mx-2 px-2"
            data-testid="menu-tabs"
          >
            {MENU.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActive(cat.id)}
                data-testid={`menu-tab-${cat.id}`}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === cat.id
                    ? "bg-[#2A1810] text-[#FAF3E7] shadow-md"
                    : "bg-[#FAF3E7] text-[#4A2E20] border border-[#E8D9BE] hover:border-[#C75024] hover:text-[#C75024]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Category content */}
          <div className="bg-[#FAF3E7] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8D9BE] shadow-sm">
            <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#2A1810]">
                {current.title}
              </h3>
              <p className="font-script text-xl text-[#C75024]">{current.blurb}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {current.items.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-baseline gap-4 pb-5 border-b border-dashed border-[#E0CFB1]"
                  data-testid={`menu-item-${current.id}-${i}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h4 className="font-display text-lg sm:text-xl font-semibold text-[#2A1810] group-hover:text-[#C75024] transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-sm text-[#4A2E20] mt-1 leading-snug">{item.desc}</p>
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#C75024] tabular-nums shrink-0">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-[#4A2E20]">
            Hungry already?{" "}
            <a
              href="tel:+917090709058"
              className="font-semibold text-[#C75024] underline underline-offset-4 hover:text-[#A8401C]"
              data-testid="menu-call-link"
            >
              Call +91 70907 09058
            </a>{" "}
            or order on Swiggy / Zomato.
          </p>
        </div>
    </section>
  );
}

import { GALLERY } from "../../data/leoContent";
import { useReveal } from "../../hooks/useReveal";

export default function Gallery() {
  const r = useReveal();
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 lg:py-32 bg-[#FAF3E7]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal flex items-end justify-between gap-6 flex-wrap mb-12" ref={r}>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#C75024] mb-4">
              — Inside the Cafe
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A1810] leading-[1.05] max-w-3xl">
              The room, the cups, the <span className="italic text-[#C75024]">people.</span>
            </h2>
          </div>
          <p className="text-[#4A2E20] max-w-sm text-base">
            A look at the warmth — captured between the rush.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {GALLERY.map((g, i) => {
            // staggered sizes for editorial feel
            const span =
              i === 0
                ? "lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto lg:h-full"
                : i === 3
                  ? "lg:col-span-2 aspect-[4/3]"
                  : "aspect-square";
            return (
              <div
                key={i}
                data-testid={`gallery-item-${i}`}
                className={`group relative overflow-hidden rounded-2xl ${span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FAF3E7]/95 text-[#2A1810] text-xs font-semibold uppercase tracking-widest">
                    {g.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

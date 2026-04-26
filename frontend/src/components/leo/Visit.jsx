import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { BUSINESS } from "../../data/leoContent";
import { useReveal } from "../../hooks/useReveal";

export default function Visit() {
  const r = useReveal();
  return (
    <section
      id="visit"
      data-testid="visit-section"
      className="py-24 lg:py-32 bg-[#FAF3E7]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch" ref={r}>
          {/* LEFT — info */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#C75024] mb-4">
              — Come Say Hi
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A1810] leading-[1.05]">
              Find us on a quiet corner of <span className="italic text-[#C75024]">BTM 2nd Stage.</span>
            </h2>
            <p className="mt-6 text-lg text-[#4A2E20] leading-relaxed">
              Walk in, dial in, or get it delivered. Either way — we'll see you soon.
            </p>

            <div className="mt-10 space-y-5">
              {/* Address */}
              <div className="flex gap-4" data-testid="visit-address">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#C75024] text-[#FAF3E7] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#4A2E20] mb-1">Address</div>
                  <div className="text-[#2A1810] font-medium leading-snug">
                    {BUSINESS.address}
                  </div>
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-[#C75024] hover:text-[#A8401C]"
                    data-testid="visit-maps-link"
                  >
                    <Navigation className="w-4 h-4" /> Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4" data-testid="visit-phone">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#C75024] text-[#FAF3E7] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#4A2E20] mb-1">Phone</div>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-[#2A1810] font-display text-2xl font-bold hover:text-[#C75024] transition-colors"
                    data-testid="visit-phone-link"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4" data-testid="visit-hours">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#C75024] text-[#FAF3E7] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#4A2E20] mb-1">Hours</div>
                  <div className="text-[#2A1810] font-medium">Open daily · 8:00 AM — 12:00 AM (midnight)</div>
                  <div className="text-sm text-[#4A2E20] mt-0.5">Late night bites available till close.</div>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="mt-10 p-6 bg-[#2A1810] rounded-2xl text-[#FAF3E7]" data-testid="visit-delivery">
              <div className="text-xs uppercase tracking-widest text-[#D4A437] mb-2">
                Prefer the couch?
              </div>
              <div className="font-display text-xl font-bold mb-4">
                Order online via your favourite app.
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BUSINESS.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF3E7] text-[#2A1810] text-sm font-semibold hover:bg-[#D4A437] transition-colors"
                  data-testid="visit-swiggy-link"
                >
                  Swiggy <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BUSINESS.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF3E7] text-[#2A1810] text-sm font-semibold hover:bg-[#D4A437] transition-colors"
                  data-testid="visit-zomato-link"
                >
                  Zomato <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8D9BE] shadow-xl h-[420px] lg:h-full min-h-[480px]">
              <iframe
                title="Cafe Leo — Google Map"
                src="https://www.google.com/maps?q=805%2FA%20Mico%20Employees%20Layout%2C%207th%20Cross%20Rd%2C%20BTM%202nd%20Stage%2C%20Bengaluru%20560076&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.85) contrast(0.95)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="visit-map-iframe"
              />
              {/* Floating CTA over map */}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                data-testid="visit-call-cta"
                className="btn-glow absolute bottom-5 left-5 right-5 sm:right-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#C75024] text-[#FAF3E7] font-semibold tracking-wide"
              >
                <Phone className="w-5 h-5" /> Call to reserve a table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

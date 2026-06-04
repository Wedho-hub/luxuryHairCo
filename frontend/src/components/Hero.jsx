import { useState, useEffect, useCallback } from "react";
import img1 from "../assets/chocolateDesireBrown22.jpeg";
import img2 from "../assets/wineVelvet30.jpeg";
import img3 from "../assets/naomiSeduction26.jpeg";

const SLIDE_MS = 6500;

const slides = [
  {
    image: img1,
    eyebrow: "Raw Vietnamese Hair · Cape Town",
    heading: ["The Art of", "Perfect Hair."],
    sub: "Twenty silhouettes of pure luxury — 5×5 Closures & Full Frontals, 10″ to 30″, in four exquisite colourways.",
    ctaLabel: "Explore the Collection",
    objectPos: "object-[50%_25%]",
  },
  {
    image: img2,
    eyebrow: "Full Frontals · 5×5 Closures · Straight",
    heading: ["Raw Vietnamese.", "Zero Compromise."],
    sub: "100% human hair — no blends, no shortcuts. Colour it, heat-style it, or wear it straight from the box.",
    ctaLabel: "Shop the Collection",
    objectPos: "object-[50%_20%]",
  },
  {
    image: img3,
    eyebrow: "10″ to 30″ · Natural · Burgundy · Brown",
    heading: ["Your Length.", "Your Moment."],
    sub: "Same-day Cape Town delivery on orders before 1 PM. Nationwide courier for all other areas.",
    ctaLabel: "Find Your Style",
    objectPos: "object-[50%_15%]",
  },
];

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [kenBurns, setKenBurns] = useState(false);

  // Kick off the Ken Burns zoom after first paint so slide 0 animates in
  useEffect(() => {
    const id = setTimeout(() => setKenBurns(true), 80);
    return () => clearTimeout(id);
  }, []);

  const advance = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(advance, SLIDE_MS);
    return () => clearInterval(id);
  }, [advance]);

  const goTo = (i) => setCurrent(i);

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#070206]"
      aria-label="Hero slideshow"
    >
      {/* ── Background images — all stacked, crossfade via opacity ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className={[
              "h-full w-full object-cover will-change-transform",
              slide.objectPos,
              // Ken Burns: active slide slowly zooms in over 9s; inactive resets quietly while invisible
              i === current && kenBurns
                ? "scale-110 transition-transform duration-[9000ms] ease-out"
                : "scale-100 transition-transform duration-[2500ms] ease-out",
            ].join(" ")}
          />
        </div>
      ))}

      {/* ── Overlays ── */}
      {/* Heavy bottom gradient — text always legible */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070206] via-black/65 to-black/20"
        aria-hidden="true"
      />
      {/* Rose bloom at bottom-left */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_0%_100%,rgba(199,59,108,0.09),transparent)]"
        aria-hidden="true"
      />
      {/* Gold haze at top-right */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_0%,rgba(212,175,55,0.07),transparent)]"
        aria-hidden="true"
      />

      {/* ── Main content — bottom-aligned ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-28 sm:px-10 sm:pb-32 lg:px-16 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl">

          {/* Text block — key forces remount → CSS animations restart on every slide change */}
          <div key={current} className="max-w-lg sm:max-w-xl lg:max-w-2xl">

            {/* Eyebrow */}
            <p
              className="animate-fade-in inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.38em] text-[#d4af37]"
              style={{ animationDelay: "60ms" }}
            >
              <span className="h-px w-6 bg-[#d4af37]/50" aria-hidden="true" />
              {slides[current].eyebrow}
            </p>

            {/* Heading */}
            <h1
              className="animate-fade-up mt-5 font-cormorant font-light italic leading-[1.05] text-white"
              style={{
                animationDelay: "160ms",
                fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              }}
            >
              {slides[current].heading.map((line, li) => (
                <span key={li} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Gold ornament */}
            <div
              className="animate-fade-up mt-5 flex items-center gap-3"
              style={{ animationDelay: "240ms" }}
              aria-hidden="true"
            >
              <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
              <span className="h-[3px] w-[3px] rounded-full bg-[#d4af37]/60" />
              <span className="h-px w-8 bg-gradient-to-l from-[#d4af37]/50 to-transparent" />
            </div>

            {/* Sub-copy */}
            <p
              className="animate-fade-up mt-5 max-w-md text-sm leading-[1.9] text-[#9e8e80] sm:text-[0.95rem]"
              style={{ animationDelay: "320ms" }}
            >
              {slides[current].sub}
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "420ms" }}
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a82e59] via-[#c73b6c] to-[#d94d7a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-xl shadow-[#c73b6c]/25 transition hover:brightness-110 active:scale-95 select-none"
              >
                {slides[current].ctaLabel}
              </a>
              <a
                href="https://wa.me/27825551234?text=Hi%21+I%27d+like+to+browse+the+Silk+Sculpture+Hair+collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 px-8 py-4 text-xs font-medium tracking-[0.12em] text-[#c9bba0] transition hover:border-[#d4af37]/35 hover:text-white active:scale-95 select-none"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]" aria-hidden="true">
                  <path d={WA_PATH} />
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Stats — not re-keyed, always present */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/8 pt-7 sm:max-w-sm">
            {[
              { value: "20",    label: "Styles" },
              { value: "30″",   label: "Max Length" },
              { value: "100%",  label: "Human Hair" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-cormorant text-3xl font-light italic text-[#d4af37] sm:text-4xl">
                  {value}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#4a3e34]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide indicators — pill + dots, bottom-right ── */}
      <div
        className="absolute bottom-9 right-6 z-20 flex items-center gap-2.5 sm:right-10 lg:right-16"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ease-out ${
              i === current
                ? "h-[3px] w-8 bg-[#d4af37]"
                : "h-[3px] w-3 bg-white/20 hover:bg-white/45"
            }`}
          />
        ))}
      </div>

      {/* ── Scroll hint — floating line ── */}
      <div
        className="pointer-events-none absolute bottom-9 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center sm:flex"
        aria-hidden="true"
      >
        <div className="h-10 w-px animate-float bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/45 to-[#d4af37]/0" />
      </div>

      {/* ── Slide counter — top-right ── */}
      <div
        className="absolute right-6 top-6 z-20 hidden sm:flex items-center gap-2 sm:right-10 lg:right-16"
        aria-hidden="true"
      >
        <span className="font-cormorant text-sm font-light italic text-[#d4af37]">
          0{current + 1}
        </span>
        <span className="h-px w-8 bg-white/15" />
        <span className="font-cormorant text-sm font-light italic text-white/25">
          0{slides.length}
        </span>
      </div>
    </section>
  );
};

export default Hero;

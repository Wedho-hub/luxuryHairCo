const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=90";

const Hero = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden bg-[#070206]">
    {/* Ambient gold radial glow */}
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-15%,rgba(212,175,55,0.10),transparent)]"
      aria-hidden="true"
    />

    <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:flex lg:items-center lg:justify-between lg:gap-20">
      {/* ── Copy ── */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="animate-fade-in inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.38em] text-[#d4af37]">
          <span className="h-px w-8 bg-[#d4af37]/40" aria-hidden="true" />
          Raw Vietnamese Hair · Cape Town
          <span className="h-px w-8 bg-[#d4af37]/40" aria-hidden="true" />
        </p>

        <h1
          className="animate-fade-up mt-8 font-cormorant text-6xl font-light italic leading-[1.07] text-white sm:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: "120ms" }}
        >
          The Art of<br />Perfect Hair.
        </h1>

        <div
          className="animate-fade-up mt-8 flex items-center justify-center gap-3 lg:justify-start"
          style={{ animationDelay: "200ms" }}
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]/40" />
          <span className="h-[3px] w-[3px] rounded-full bg-[#d4af37]/60" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4af37]/40" />
        </div>

        <p
          className="animate-fade-up mt-7 text-base leading-[1.9] text-[#9e8e80] sm:text-[1.05rem]"
          style={{ animationDelay: "240ms" }}
        >
          Twenty silhouettes of pure luxury. Raw Vietnamese hair in 5×5&nbsp;Closures
          and Full Frontals — 10&Prime; to 30&Prime; — in Natural, Burgundy, Brown and Two-Tone.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a82e59] via-[#c73b6c] to-[#d94d7a] px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-xl shadow-[#c73b6c]/20 transition hover:brightness-110 active:scale-95 select-none"
          >
            Explore the Collection
          </a>
          <a
            href="https://wa.me/27825551234?text=Hi%21+I%27d+like+to+browse+the+Silk+Sculpture+Hair+collection."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 px-9 py-4 text-xs font-medium tracking-[0.12em] text-[#c9bba0] transition hover:border-[#d4af37]/35 hover:text-white active:scale-95 select-none"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-16 grid grid-cols-3 gap-6 border-t border-white/8 pt-10 text-center lg:text-left"
          style={{ animationDelay: "440ms" }}
        >
          <div>
            <p className="font-cormorant text-4xl font-light italic text-[#d4af37] sm:text-5xl">20</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.32em] text-[#4a3e34]">Styles</p>
          </div>
          <div>
            <p className="font-cormorant text-4xl font-light italic text-[#d4af37] sm:text-5xl">
              30<span className="text-xl">&Prime;</span>
            </p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.32em] text-[#4a3e34]">Max Length</p>
          </div>
          <div>
            <p className="font-cormorant text-4xl font-light italic text-[#d4af37] sm:text-5xl">100%</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.32em] text-[#4a3e34]">Human Hair</p>
          </div>
        </div>
      </div>

      {/* ── Hero image ── */}
      <div
        className="animate-slide-in-r mt-16 shrink-0 lg:mt-0"
        style={{ animationDelay: "200ms" }}
      >
        <div className="relative mx-auto max-w-xs lg:max-w-[400px]">
          <div className="absolute -inset-6 rounded-[3rem] bg-[#d4af37]/6 blur-3xl" aria-hidden="true" />
          <img
            src={HERO_IMAGE}
            alt="Silk Sculpture Hair — Signature Collection"
            width={460}
            height={580}
            className="relative w-full rounded-[2rem] object-cover shadow-[0_50px_120px_rgba(0,0,0,0.75)]"
          />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#d4af37]/15" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

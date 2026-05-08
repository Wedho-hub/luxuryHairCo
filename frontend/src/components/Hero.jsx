const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=90";

const Hero = () => {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),transparent_12%),radial-gradient(circle_at_top_right,_rgba(255,215,145,0.08),transparent_18%),linear-gradient(180deg,#090307_0%,#17080f_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:justify-between lg:gap-16">

        {/* Copy */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7e7c2] shadow-sm shadow-black/20">
            Raw Vietnamese Hair · Cape Town Delivery
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The Signature Collection
          </h1>

          <p className="mt-4 text-lg leading-8 text-[#d7c8ae]">
            Straight raw Vietnamese hair in 5×5 Closures and Full Frontals — 10&Prime; to 30&Prime;. Natural, Burgundy, Brown and Two-Tone colourways. R6,500 to R19,600.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d88e] to-[#f8e7b5] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black shadow-xl shadow-[#d4af37]/20 transition hover:brightness-110"
            >
              Browse Collection
            </a>

            <a
              href="https://wa.me/27825551234?text=Hi%21+I%27d+like+to+browse+the+Signature+Collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-[#f7e7c2] transition hover:border-[#d4af37] hover:text-white"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center lg:text-left">
            <div>
              <p className="text-2xl font-bold text-white">19</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#c9bba0]">Style options</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10–30<span className="text-base">&Prime;</span></p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#c9bba0]">Lengths</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#c9bba0]">Human hair</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-12 lg:mt-0 lg:shrink-0">
          <img
            src={HERO_IMAGE}
            alt="Raw Vietnamese hair — Luxury Hair Co. Signature Collection"
            width={480}
            height={560}
            className="mx-auto w-full max-w-sm rounded-[2rem] object-cover shadow-[0_30px_80px_rgba(212,175,55,0.22)] lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

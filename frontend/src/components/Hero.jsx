import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),transparent_12%),radial-gradient(circle_at_top_right,_rgba(255,215,145,0.08),transparent_18%),linear-gradient(180deg,#090307_0%,#17080f_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7e7c2] shadow-sm shadow-black/20">
            Cape Town hair delivery
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Premium 100% human hair for a flawless finish
          </h1>

          <p className="mt-6 text-lg text-[#d7c8ae]">
            Long-lasting, tangle-free bundles perfect for natural volume, sleek styles, and instant confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d88e] to-[#f8e7b5] px-8 py-4 text-sm font-semibold uppercase text-black shadow-xl shadow-[#d4af37]/20 transition hover:brightness-110"
            >
              Shop Bundles
            </a>

            <a
              href="https://wa.me/27XXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-[#f7e7c2] transition hover:border-[#d4af37] hover:text-white"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-[#d7c8ae] sm:text-base">
            <div>
              <p className="font-semibold text-white">100% human hair</p>
            </div>
            <div>
              <p className="font-semibold text-white">Fast Cape Town delivery</p>
            </div>
            <div>
              <p className="font-semibold text-white">Secure payment</p>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:shrink-0">
          <img
            src={heroImage}
            alt="Luxury hair bundles"
            className="mx-auto w-full max-w-md rounded-[2rem] object-cover shadow-[0_30px_80px_rgba(212,175,55,0.18)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

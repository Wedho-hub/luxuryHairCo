import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-pink-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="inline-flex rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
            Cape Town hair delivery
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Premium 100% human hair for a flawless finish
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Long-lasting, tangle-free bundles perfect for natural volume, sleek styles, and instant confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-gray-900"
            >
              Shop Bundles
            </a>

            <a
              href="https://wa.me/27XXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-black px-8 py-4 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-600 sm:text-base">
            <div>
              <p className="font-semibold text-black">100% human hair</p>
            </div>
            <div>
              <p className="font-semibold text-black">Fast Cape Town delivery</p>
            </div>
            <div>
              <p className="font-semibold text-black">Secure payment</p>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:shrink-0">
          <img
            src={heroImage}
            alt="Luxury hair bundles"
            className="mx-auto w-full max-w-md rounded-4xl object-cover shadow-2xl shadow-black/10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Offer = () => {
  return (
    <section className="py-10 bg-[#090307] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">
            Limited time offer
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            R50 off your first order
          </h2>
          <p className="mt-2 text-sm text-[#c9bba0] md:text-base">
            Enjoy premium hair bundles delivered fast across Cape Town. Stock is limited — lock in your price now.
          </p>
        </div>

        <a
          href="#discount"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition hover:brightness-110"
        >
          Claim your discount
        </a>
      </div>
    </section>
  );
};

export default Offer;

const Offer = () => {
  return (
    <section className="py-8 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-pink-300">
            Limited time offer
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            R50 off your first order
          </h2>
          <p className="mt-2 text-sm text-gray-200 md:text-base">
            Enjoy premium hair bundles delivered fast across Cape Town. Stock is limited — lock in your price now.
          </p>
        </div>

        <a
          href="#discount"
          className="inline-flex items-center justify-center rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-pink-400"
        >
          Claim your discount
        </a>
      </div>
    </section>
  );
};

export default Offer;

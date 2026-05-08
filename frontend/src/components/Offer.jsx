import { useInView } from "../hooks/useInView";

const Offer = () => {
  const [ref, visible] = useInView(0.2);

  return (
    <section ref={ref} className="py-10 bg-[#090307] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div className={visible ? "animate-fade-up" : "opacity-0"}>
          <p className="text-sm uppercase tracking-[0.24em] text-[#c73b6c]">
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
          className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#a82e59] via-[#c73b6c] to-[#d94d7a] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c73b6c]/30 transition hover:brightness-110 active:scale-95 select-none ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "150ms" }}
        >
          Claim your discount
        </a>
      </div>
    </section>
  );
};

export default Offer;

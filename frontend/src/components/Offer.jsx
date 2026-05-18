import { useInView } from "../hooks/useInView";

const Offer = () => {
  const [ref, visible] = useInView(0.2);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/5 bg-[#070206] py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_0%_50%,rgba(199,59,108,0.05),transparent)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <div className={visible ? "animate-fade-up" : "opacity-0"}>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-8 bg-[#c73b6c]/40" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#c73b6c]">Limited time</span>
              <span className="h-px w-8 bg-[#c73b6c]/40" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-cormorant text-5xl font-light italic text-white sm:text-6xl">
              R50 off your<br />first order.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-8 text-[#5c4e43]">
              Premium hair, delivered same day across Cape Town. Stock is limited — secure your price today.
            </p>
          </div>
          <a
            href="#discount"
            className={`shrink-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a82e59] via-[#c73b6c] to-[#d94d7a] px-10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-xl shadow-[#c73b6c]/20 transition hover:brightness-110 active:scale-95 select-none ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "150ms" }}
          >
            Claim your discount
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offer;

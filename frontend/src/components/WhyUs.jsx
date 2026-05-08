import { useInView } from "../hooks/useInView";

const features = [
  {
    title: "100% Human Hair",
    description:
      "Every bundle is crafted from genuine human hair — no synthetic blends, ever. Dye it, heat-style it, or wear it straight from the box.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Same-Day Cape Town Delivery",
    description:
      "Orders placed before 1 PM ship the same day, handled with white-glove care. Nationwide courier available for all other areas.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    description:
      "Check out with confidence via PayFast or Yoco — South Africa's most trusted payment platforms — or confirm your order directly on WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25 4.5-4.5m5.25 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Style Advice",
    description:
      "Not sure which texture or length suits you? Our team is on WhatsApp to guide you to the perfect bundle for your look and lifestyle.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView(0.05);

  return (
    <section className="py-20 px-6 bg-[#090307]">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-14 text-center transition-none ${headerVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#d4af37]">Why choose us</p>
          <h2 className="mt-4 text-3xl font-bold text-white">The Luxury Hair Co. difference</h2>
          <p className="mx-auto mt-4 max-w-xl text-[#c9bba0]">
            Premium quality, fast delivery, and expert support — everything you need, nothing you don't.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-[border-color,background-color] hover:border-[#d4af37]/30 hover:bg-white/8 ${
                gridVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37] transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c9bba0]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

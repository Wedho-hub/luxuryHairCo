import { useInView } from "../hooks/useInView";

const features = [
  {
    title: "100% Human Hair",
    description:
      "Every bundle is crafted from genuine human hair — no synthetic blends, ever. Dye it, heat-style it, or wear it straight from the box.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Same-Day Delivery",
    description:
      "Orders placed before 1 PM ship the same day, handled with white-glove care. Nationwide courier available for all other areas.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    description:
      "Check out with confidence via PayFast or Yoco — South Africa's most trusted payment platforms — or confirm your order directly on WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25 4.5-4.5m5.25 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Style Advice",
    description:
      "Not sure which texture or length suits you? Our stylists are on WhatsApp to guide you to the perfect bundle for your look and lifestyle.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView(0.05);

  return (
    <section className="py-28 px-6 bg-[#070206]">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-20 text-center ${headerVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#d4af37]">Why choose us</p>
          <h2 className="mt-5 font-cormorant text-5xl font-light italic text-white sm:text-6xl">
            The Silk Sculpture<br className="hidden sm:block" /> difference
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-[#5c4e43]">
            Premium craftsmanship, swift delivery, and expert guidance — refined for the discerning client.
          </p>
        </div>

        {/* gap-px with dark background creates elegant editorial dividers between cards */}
        <div
          ref={gridRef}
          className="grid gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group bg-[#070206] p-10 transition-colors hover:bg-[#0c080f] ${
                gridVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-[#d4af37]">{feature.icon}</div>
              <div className="mt-3 h-px w-6 bg-[#d4af37]/25" aria-hidden="true" />
              <h3 className="mt-7 font-cormorant text-xl font-medium italic text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5c4e43]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

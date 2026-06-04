import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    id: 1,
    name: "Lerato M.",
    location: "Cape Town",
    rating: 5,
    feedback:
      "The hair stayed soft even after two washes and the delivery was unbelievably fast. I'm absolutely obsessed — this is the best quality I've found in Cape Town.",
    product: "Black Desire — 10″ Natural",
  },
  {
    id: 2,
    name: "Sipho D.",
    location: "Cape Town",
    rating: 5,
    feedback:
      "Perfect texture and zero tangles. My clients love the finished look every single time. I order exclusively from Silk Sculpture Hair now.",
    product: "Naomi Seduction — 26″ Natural",
  },
  {
    id: 3,
    name: "Nandi P.",
    location: "Johannesburg",
    rating: 5,
    feedback:
      "Incredible service, fast WhatsApp support, and the bundle quality is genuinely premium. Even with delivery to JHB, my order arrived in two days. Highly recommend.",
    product: "Black Diamond Straight — 30″",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        className={`h-3.5 w-3.5 ${i < count ? "text-[#d4af37]" : "text-gray-100"}`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView(0.05);

  return (
    <section className="py-28 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-20 text-center ${headerVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#c73b6c]">Client stories</p>
          <h2 className="mt-5 font-cormorant text-5xl font-light italic text-black sm:text-6xl">
            Words from our clients
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`group relative flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-2 hover:border-[#d4af37]/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-10 ${
                gridVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 110}ms` }}
            >
              {/* Ornamental gold quote mark */}
              <p
                className="pointer-events-none absolute top-4 left-6 select-none font-cormorant text-[5.5rem] leading-none text-[#d4af37]/20 transition-colors duration-500 group-hover:text-[#d4af37]/40"
                aria-hidden="true"
              >
                &ldquo;
              </p>

              <Stars count={testimonial.rating} />

              <p className="relative mt-7 flex-1 font-cormorant text-xl font-light italic leading-8 text-gray-700">
                {testimonial.feedback}
              </p>

              <div className="mt-8 border-t border-gray-100 pt-7">
                <p className="text-sm font-semibold text-black">{testimonial.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-gray-400">
                  {testimonial.location}&nbsp;&middot;&nbsp;{testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

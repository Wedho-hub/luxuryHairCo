const testimonials = [
  {
    id: 1,
    name: "Lerato M.",
    location: "Cape Town",
    rating: 5,
    feedback:
      "The hair stayed soft even after two washes and the delivery was unbelievably fast. I'm absolutely obsessed — this is the best quality I've found in Cape Town.",
    product: "Classic Bundle Set",
  },
  {
    id: 2,
    name: "Sipho D.",
    location: "Cape Town",
    rating: 5,
    feedback:
      "Perfect texture and zero tangles. My clients love the finished look every single time. I order exclusively from Luxury Hair Co. now.",
    product: "Sleek Straight Set",
  },
  {
    id: 3,
    name: "Nandi P.",
    location: "Johannesburg",
    rating: 5,
    feedback:
      "Incredible service, fast WhatsApp support, and the bundle quality is genuinely premium. Even with delivery to JHB, my order arrived in two days. Highly recommend.",
    product: "Curly Volume Set",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        className={`h-4 w-4 ${i < count ? "text-[#d4af37]" : "text-gray-200"}`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Reviews</p>
          <h2 className="mt-4 text-3xl font-bold text-black">Trusted by customers across South Africa</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Hear from shoppers who love the fit, feel, and fast delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Stars count={testimonial.rating} />
              <p className="mt-5 flex-1 text-gray-700 leading-7">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.location} &middot; {testimonial.product}
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

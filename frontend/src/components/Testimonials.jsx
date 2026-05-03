const testimonials = [
  {
    id: 1,
    name: "Lerato M.",
    feedback: "The hair stayed soft even after two washes and the delivery was unbelievably fast. I’m obsessed!",
  },
  {
    id: 2,
    name: "Sipho D.",
    feedback: "Perfect texture and zero tangles. My clients love the finished look.",
  },
  {
    id: 3,
    name: "Nandi P.",
    feedback: "Great service, quick WhatsApp support, and the bundle quality is premium. Highly recommend.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Social proof</p>
          <h2 className="mt-4 text-3xl font-bold">Trusted by customers across Cape Town</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Hear from shoppers who love the fit, feel, and fast delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-700">“{testimonial.feedback}”</p>
              <p className="mt-6 font-semibold text-black">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

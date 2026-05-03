const FAQ = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 space-y-4 max-w-xl mx-auto">
        <div>
          <h4 className="font-semibold">How long does delivery take?</h4>
          <p>1–2 days in Cape Town.</p>
        </div>

        <div>
          <h4 className="font-semibold">Is it 100% human hair?</h4>
          <p>Yes, no synthetic mix.</p>
        </div>

        <div>
          <h4 className="font-semibold">Can I order via WhatsApp?</h4>
          <p>Yes, click the WhatsApp button anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
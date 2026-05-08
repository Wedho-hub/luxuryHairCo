import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How long does delivery take?",
    answer:
      "Cape Town orders placed before 1 PM are delivered the same day. Other areas in South Africa typically receive their orders within 2–3 business days via courier.",
  },
  {
    id: 2,
    question: "Is this 100% human hair?",
    answer:
      "Yes — every bundle sold by Luxury Hair Co. is made from 100% genuine human hair. No synthetic fibers, no blends. You can colour, heat-style, and treat it just like your natural hair.",
  },
  {
    id: 3,
    question: "Can I order via WhatsApp?",
    answer:
      "Absolutely. Tap the WhatsApp button on any page to start a chat with our team. They'll guide you through choosing the right bundle, confirm pricing, and arrange your delivery.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept PayFast, Yoco, and EFT bank transfer — South Africa's most trusted payment platforms. You can also confirm payment directly on WhatsApp.",
  },
  {
    id: 5,
    question: "Can I return or exchange a bundle?",
    answer:
      "We accept exchanges within 7 days of delivery if the bundle is unused and in original packaging. Contact us on WhatsApp or by email at info@luxuryhairco.co.za to arrange.",
  },
  {
    id: 6,
    question: "How do I know which bundle is right for me?",
    answer:
      "Message us on WhatsApp with your desired look and we'll recommend the perfect length and texture for your face shape, lifestyle, and budget — completely free.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-pink-500">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold text-black">Frequently asked questions</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Everything you need to know before placing your order.
          </p>
        </div>

        <div className="divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
                type="button"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition hover:bg-gray-50"
                aria-expanded={openId === faq.id}
              >
                <span className="text-sm font-semibold text-black">{faq.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 ${
                    openId === faq.id ? "rotate-45 border-pink-200 bg-pink-50 text-pink-600" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-8 pb-6 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

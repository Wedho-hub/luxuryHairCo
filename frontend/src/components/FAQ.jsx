import { useState } from "react";
import { useInView } from "../hooks/useInView";

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
  const [headerRef, headerVisible] = useInView();
  const [listRef, listVisible] = useInView(0.05);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <div
          ref={headerRef}
          className={`mb-14 text-center ${headerVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#c73b6c]">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold text-black">Frequently asked questions</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Everything you need to know before placing your order.
          </p>
        </div>

        <div
          ref={listRef}
          className={`divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm ${
            listVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "150ms" }}
        >
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
                type="button"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-gray-50 active:bg-gray-100 select-none"
                aria-expanded={openId === faq.id}
              >
                <span className="text-sm font-semibold text-black">{faq.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 ${
                    openId === faq.id
                      ? "rotate-45 border-[#c73b6c]/30 bg-[#fdf0f4] text-[#c73b6c]"
                      : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {/* Smooth height accordion via CSS grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: openId === faq.id ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p className="px-8 pb-6 text-sm leading-7 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

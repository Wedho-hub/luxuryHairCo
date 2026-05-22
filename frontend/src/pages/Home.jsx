import { useState } from "react";
import Header from "../components/Header";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import WhatsAppButton from "../components/WhatsAppButton";
import ProductCard from "../components/productCard";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { useInView } from "../hooks/useInView";

const discountItems = [
  "Same-day Cape Town delivery on orders placed before 1 PM",
  "Complimentary colourway advice with every purchase",
  "20 styles from R6,500 to R19,600",
];

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [productHeaderRef, productHeaderVisible] = useInView();
  const [gridRef, gridVisible] = useInView(0.04);
  const [discountRef, discountVisible] = useInView(0.1);

  const featured = products.filter((p) => p.featured);
  const extended = products.filter((p) => !p.featured);

  return (
    <main className="bg-white text-gray-900">
      <Seo
        title="Silk Sculpture Hair | Premium Hair Bundles in Cape Town"
        description="Shop premium raw Vietnamese hair bundles in Cape Town. Same-day delivery, expert styling advice, and secure checkout."
        url="https://luxuryhairco.github.io/"
      />
      <Header />
      <Hero />
      <Offer />

      {/* ── Products ── */}
      <section id="products" className="py-28 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div
            ref={productHeaderRef}
            className={`mb-14 text-center ${productHeaderVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#c73b6c]">Raw Vietnamese Hair</p>
            <h2 className="mt-5 font-cormorant text-5xl font-light italic text-black sm:text-6xl">
              Signature Collection — 10&Prime; to 30&Prime;
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-400">
              Twenty exquisite styles across 5×5 Closures and Full Frontals. Natural, Burgundy, Brown, Colour 33
              and Two-Tone — all 100% raw Vietnamese, straight texture.
            </p>
          </div>

          <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map((product, i) => (
              <div
                key={product.id}
                className={gridVisible ? "animate-fade-up" : "opacity-0"}
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {showMore && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {extended.map((product, i) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setShowMore((v) => !v)}
              className="group inline-flex items-center gap-4 font-cormorant text-xl font-light italic text-gray-400 transition-colors duration-300 hover:text-gray-900"
            >
              <span className="h-px w-10 bg-current transition-all duration-500 group-hover:w-14" aria-hidden="true" />
              {showMore ? "Show fewer styles" : "See all 20 styles"}
              <span className="h-px w-10 bg-current transition-all duration-500 group-hover:w-14" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <WhyUs />

      {/* ── Discount / Lead form ── */}
      <section id="discount" className="py-28 px-6 bg-[#faf8f5]">
        <div
          ref={discountRef}
          className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div className={discountVisible ? "animate-fade-up" : "opacity-0"}>
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#c73b6c]">Exclusive offer</p>
            <h2 className="mt-5 font-cormorant text-5xl font-light italic text-black sm:text-6xl">
              Your first order,<br className="hidden sm:block" /> reimagined.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-8 text-gray-400">
              Leave your details and our styling team will reach out on WhatsApp with your personal discount,
              colourway guidance, and a payment link — all within minutes.
            </p>
            <ul className="mt-8 space-y-4">
              {discountItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-[#d4af37]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={discountVisible ? "animate-fade-up" : "opacity-0"}
            style={{ animationDelay: "150ms" }}
          >
            <LeadForm />
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Home;

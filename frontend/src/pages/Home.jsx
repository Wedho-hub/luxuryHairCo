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
import ProductModal from "../components/ProductModal";
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productHeaderRef, productHeaderVisible] = useInView();
  const [gridRef, gridVisible] = useInView(0.04);
  const [discountRef, discountVisible] = useInView(0.1);

  const featured = products.filter((p) => p.featured);
  const extended = products.filter((p) => !p.featured);

  return (
    <main className="bg-white text-gray-900">
      <Seo
        title="Silk Sculpture Hair | 100% Raw Vietnamese Hair — Luxury Grade Quality"
        description="Handcrafted using premium Raw Vietnamese Hair sourced for softness, longevity, and natural luster. Same-day Cape Town delivery, expert styling advice, and secure checkout."
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
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#c73b6c]">Raw Vietnamese Hair</p>
            <h2 className="mt-5 font-cormorant text-5xl font-light italic text-black sm:text-6xl animate-fade-up-slow" style={{ animationDelay: "80ms" }}>
              Signature Collection — 10 inch to 30 inch
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-600">
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
                <ProductCard product={product} onSelect={setSelectedProduct} />
              </div>
            ))}
          </div>

          {showMore && (
            <div className="mt-10 border-t border-gray-100 pt-10">
              <p className="text-xs uppercase tracking-[0.28em] text-gray-500">More styles · photography coming soon</p>
              <div className="mt-5 divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100">
                {extended.map((product, i) => (
                  <button
                    type="button"
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="group flex w-full animate-fade-up items-center gap-4 bg-white p-4 text-left transition-colors hover:bg-[#fdf0f4] sm:gap-5 sm:p-5"
                    style={{ animationDelay: `${i * 35}ms` }}
                  >
                    {/* Photo placeholder */}
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl bg-[#070206] sm:h-20 sm:w-20">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#d4af37]/50" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                      <span className="text-[8px] uppercase tracking-widest text-[#d4af37]/40">Soon</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-cormorant text-lg font-medium italic text-black transition-colors group-hover:text-[#b8941f] sm:text-xl">
                        {product.name}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-gray-500">
                        {product.length} inch · {product.tier} · {product.color}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-black sm:text-base">
                      R{product.price.toLocaleString("en-ZA")}
                    </p>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-gray-300 transition group-hover:text-[#c73b6c]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setShowMore((v) => !v)}
              className="group inline-flex items-center gap-4 font-cormorant text-xl font-light italic text-gray-500 transition-colors duration-300 hover:text-gray-900"
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
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#c73b6c]">Exclusive offer</p>
            <h2 className="mt-5 font-cormorant text-5xl font-light italic text-black sm:text-6xl">
              Your first order,<br className="hidden sm:block" /> reimagined.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-8 text-gray-600">
              Leave your details and our styling team will reach out on WhatsApp with your personal discount,
              colourway guidance, and a payment link — all within minutes.
            </p>
            <ul className="mt-8 space-y-4">
              {discountItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
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

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
};

export default Home;

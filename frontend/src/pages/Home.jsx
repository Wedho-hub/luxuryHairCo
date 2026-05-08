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

const Home = () => {
  return (
    <main className="bg-white text-gray-900">
      <Seo
        title="Luxury Hair Co. | Premium Hair Bundles in Cape Town"
        description="Shop premium hair bundles in Cape Town with fast delivery, secure checkout, and expert styling support."
        url="https://luxuryhairco.example.com/"
      />
      <Header />
      <Hero />
      <Offer />

      <section id="products" className="py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Raw Vietnamese Hair</p>
            <h2 className="mt-4 text-3xl font-bold">Signature Collection — 10&Prime; to 30&Prime;</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Nineteen styles across 5×5 Closures and Full Frontals. Natural, Burgundy, Brown, Colour 33 and Two-Tone colourways — all 100% raw Vietnamese, straight texture.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <WhyUs />

      <section id="discount" className="py-12 px-6 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Exclusive offer</p>
            <h2 className="mt-4 text-3xl font-bold">Get R50 off your first Signature Collection order</h2>
            <p className="mt-4 max-w-xl text-gray-600">
              Leave your name and WhatsApp number and our team will confirm your order, answer style questions, and send your payment link — fast.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ Same-day response for Cape Town customers</li>
              <li>✅ Free colourway advice with every order</li>
              <li>✅ Styles from R6,500 — R19,600</li>
            </ul>
          </div>

          <div>
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

import Header from "../components/Header";
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
      <Header />
      <Hero />
      <Offer />

      <section id="products" className="py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Hair bundle tiers</p>
            <h2 className="mt-4 text-3xl font-bold">Find the right bundle for your look</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Compare our best-selling tiers by length, texture, and price so you can feel confident before you buy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
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
            <p className="text-sm uppercase tracking-[0.28em] text-pink-500">R50 off today</p>
            <h2 className="mt-4 text-3xl font-bold">Secure your discount with just a few details</h2>
            <p className="mt-4 max-w-xl text-gray-600">
              Submit your name and phone number and our sales team will confirm your order quickly on WhatsApp.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ Fast same-day response for Cape Town customers</li>
              <li>✅ Free style advice with every order</li>
              <li>✅ Limited-time introductory pricing</li>
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

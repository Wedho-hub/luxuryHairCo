import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import API from "../services/api";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const savedProduct = location.state?.product;

  const product = useMemo(
    () => savedProduct || products.find((item) => String(item.id) === String(productId)),
    [savedProduct, productId]
  );

  const { cartItems, cartTotal, clearCart } = useCart();
  const [values, setValues] = useState({
    customerName: "",
    phone: "",
    address: "",
    paymentMethod: "PayFast",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const productsToCheckout = useMemo(() => {
    if (cartItems.length > 0) {
      return cartItems;
    }
    if (savedProduct) {
      return [{ ...savedProduct, quantity: 1 }];
    }
    const singleProduct = products.find((item) => String(item.id) === String(productId));
    return singleProduct ? [{ ...singleProduct, quantity: 1 }] : [];
  }, [cartItems, savedProduct, productId]);

  const orderTotal = cartItems.length > 0 ? cartTotal : productsToCheckout.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!productsToCheckout.length) {
      setError("Please return to the shop and select a bundle before checking out.");
      return;
    }

    if (!values.customerName || !values.phone || !values.address) {
      setError("Please complete your name, phone, and delivery address.");
      return;
    }

    try {
      setStatus("Creating your order...");
      const orderPayload = {
        items: productsToCheckout.map((item) => ({
          productId: item.id,
          productName: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: orderTotal,
        customerName: values.customerName,
        phone: values.phone,
        address: values.address,
        paymentMethod: values.paymentMethod,
        paymentStatus: "pending",
      };

      const response = await API.post("/orders", orderPayload);

      if (cartItems.length > 0) {
        clearCart();
      }

      navigate("/order-success", {
        state: {
          order: response.data,
          paymentMethod: values.paymentMethod,
        },
      });
    } catch (submissionError) {
      setStatus("");
      setError(
        submissionError.response?.data?.message ||
          "Unable to place your order right now. Please try again later."
      );
    }
  };

  return (
    <main className="bg-white text-gray-900">
      <Seo
        title="Checkout | Luxury Hair Co."
        description="Complete your Luxury Hair Co. order with secure checkout and delivery details for premium hair bundles in Cape Town."
        url="https://luxuryhairco.example.com/checkout"
      />
      <Header />
      <section className="bg-pink-50 py-14 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Secure checkout</p>
                <h1 className="mt-4 text-3xl font-bold">Checkout your selected luxury bundles</h1>
                <p className="mt-3 max-w-2xl text-gray-600">
                  Complete your order with PayFast or Yoco payment support. Your order is saved and ready to pay once
                  the gateway integration is active.
                </p>
              </div>
              <div className="rounded-3xl bg-black px-5 py-4 text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.28em] text-gray-300">Order total</p>
                <p className="mt-2 text-3xl font-semibold">R{orderTotal}</p>
              </div>
            </div>
          </div>

          {!productsToCheckout.length ? (
            <div className="rounded-3xl border border-pink-200 bg-pink-50 p-10 text-center text-gray-700">
              <p className="text-xl font-semibold">No bundle selected yet.</p>
              <p className="mt-3 text-gray-600">
                Pick one or more products from the shop before checking out.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Return to shop
              </Link>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr]">
              <div>
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-semibold">Order summary</h2>
                  <div className="mt-6 space-y-4 rounded-3xl border border-pink-100 bg-pink-50 p-6 text-gray-700">
                    {productsToCheckout.map((item) => (
                      <div key={item.id} className="rounded-3xl border border-pink-100 bg-white p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-gray-500">{item.tier}</p>
                            <p className="mt-2 text-lg font-semibold text-black">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                          </div>
                          <p className="text-right text-lg font-semibold text-black">x{item.quantity}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 sm:grid-cols-3">
                          <div>
                            <p className="font-semibold text-black">Length</p>
                            <p>{item.length} inch</p>
                          </div>
                          <div>
                            <p className="font-semibold text-black">Texture</p>
                            <p>{item.texture}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-black">Subtotal</p>
                            <p>R{item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Total</p>
                    <p className="mt-2 text-3xl font-semibold text-black">R{orderTotal}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-semibold">Delivery details</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <label className="space-y-3">
                      <span className="text-sm font-medium text-gray-700">Full name</span>
                      <input
                        type="text"
                        name="customerName"
                        value={values.customerName}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                        placeholder="Sarah Smith"
                      />
                    </label>

                    <label className="space-y-3">
                      <span className="text-sm font-medium text-gray-700">Phone number</span>
                      <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                        placeholder="+27 82 555 1234"
                      />
                    </label>
                  </div>

                  <label className="mt-6 block space-y-3">
                    <span className="text-sm font-medium text-gray-700">Delivery address</span>
                    <textarea
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      rows="4"
                      className="w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                      placeholder="123 Main Road, Cape Town"
                    />
                  </label>

                  <label className="mt-6 block space-y-3">
                    <span className="text-sm font-medium text-gray-700">Payment option</span>
                    <select
                      name="paymentMethod"
                      value={values.paymentMethod}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                    >
                      <option value="PayFast">PayFast</option>
                      <option value="Yoco">Yoco</option>
                    </select>
                  </label>

                  {error && <p className="mt-6 text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-900"
                  >
                    {status || `Place order with ${values.paymentMethod}`}
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-pink-200 bg-pink-50 p-8 text-gray-700 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-pink-600">Why we ask</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7">
                    <li>• Delivery and payment follow-up by WhatsApp.</li>
                    <li>• Local Cape Town orders shipped within 1-2 business days.</li>
                    <li>• We keep your order pending until payment is confirmed.</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Payment setup</p>
                  <p className="mt-4 text-gray-700">
                    This store is ready for PayFast and Yoco gateway integration. The order below is saved with pending payment status until the payment link is issued from the chosen provider.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-black">Selected gateway:</span> {values.paymentMethod}
                    </p>
                    <p>
                      <span className="font-semibold text-black">Next step:</span> Confirm payment via the provider link.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Checkout;

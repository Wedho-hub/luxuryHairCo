import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import API from "../services/api";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "27825551234";
const fmt = (n) => Number(n).toLocaleString("en-ZA");

// Accepts +27, 0, or bare 9-digit SA numbers
const isValidPhone = (v) => /^[+0-9\s()-]{9,20}$/.test(v.trim());

const Checkout = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const savedProduct = location.state?.product;

  const { cartItems, cartTotal, clearCart } = useCart();

  const productsToCheckout = useMemo(() => {
    if (cartItems.length > 0) return cartItems;
    if (savedProduct) return [{ ...savedProduct, quantity: 1 }];
    const single = products.find((p) => String(p.id) === String(productId));
    return single ? [{ ...single, quantity: 1 }] : [];
  }, [cartItems, savedProduct, productId]);

  const orderTotal = useMemo(
    () => productsToCheckout.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [productsToCheckout]
  );

  const [values, setValues] = useState({
    customerName: "",
    phone: "",
    address: "",
    paymentMethod: "PayFast",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  const validate = () => {
    const next = {};
    if (!values.customerName.trim()) next.customerName = "Please enter your full name.";
    if (!values.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!isValidPhone(values.phone)) {
      next.phone = "Please enter a valid South African phone number.";
    }
    if (!values.address.trim()) next.address = "Please enter your delivery address.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productsToCheckout.length) {
      setSubmitError("Please return to the shop and select a bundle before checking out.");
      return;
    }

    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const localOrderId = crypto.randomUUID
      ? crypto.randomUUID().slice(0, 8).toUpperCase().replace(/-/g, "")
      : Math.random().toString(36).slice(2, 8).toUpperCase();

    const orderItems = productsToCheckout.map((item) => ({
      productId: String(item.id),
      productName: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const localOrder = {
      _id: localOrderId,
      items: orderItems,
      total: orderTotal,
      customerName: values.customerName.trim(),
      phone: values.phone.trim(),
      address: values.address.trim(),
      paymentMethod: values.paymentMethod,
      paymentStatus: "pending",
    };

    const itemsList = productsToCheckout
      .map((item) => `• ${item.name} (x${item.quantity}) — R${fmt(item.price * item.quantity)}`)
      .join("\n");

    const waMessage = encodeURIComponent(
      [
        `Hi! I'd like to place an order with Silk Sculpture Hair:`,
        ``,
        itemsList,
        ``,
        `Order total: R${fmt(orderTotal)}`,
        ``,
        `Delivery details:`,
        `Name: ${values.customerName.trim()}`,
        `Phone: ${values.phone.trim()}`,
        `Address: ${values.address.trim()}`,
        `Preferred payment: ${values.paymentMethod}`,
        `Ref: #${localOrderId}`,
      ].join("\n")
    );

    let finalOrder = localOrder;

    try {
      const response = await API.post("/orders", {
        items: orderItems,
        total: orderTotal,
        customerName: localOrder.customerName,
        phone: localOrder.phone,
        address: localOrder.address,
        paymentMethod: values.paymentMethod,
        paymentStatus: "pending",
      });
      finalOrder = response.data;
    } catch {
      // Backend not configured — order confirmed via WhatsApp
    }

    if (cartItems.length > 0) clearCart();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank");
    // setIsSubmitting before navigate to avoid state update on unmounted component
    setIsSubmitting(false);
    navigate("/order-success", {
      state: { order: finalOrder, paymentMethod: values.paymentMethod },
    });
  };

  return (
    <main className="bg-white text-gray-900">
      <Seo
        title="Checkout | Silk Sculpture Hair"
        description="Complete your Silk Sculpture Hair order with secure checkout and delivery details for premium hair bundles in Cape Town."
        url="https://luxuryhairco.github.io/checkout"
      />
      <Header />
      <section className="bg-[#fdf0f4] py-14 px-6">
        <div className="mx-auto max-w-6xl">

          {/* ── Page header ── */}
          <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#c73b6c]">Secure checkout</p>
                <h1 className="mt-3 font-cormorant text-3xl font-light italic text-black sm:text-4xl">
                  Complete your luxury bundle order
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-gray-600">
                  Fill in your details and we'll confirm your order on WhatsApp within minutes.
                </p>
              </div>
              {orderTotal > 0 && (
                <div className="rounded-3xl bg-[#070206] px-6 py-4 text-white shadow-lg">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400">Order total</p>
                  <p className="mt-1.5 font-cormorant text-3xl font-light italic text-[#d4af37]">
                    R{fmt(orderTotal)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── No products guard ── */}
          {!productsToCheckout.length ? (
            <div className="rounded-3xl border border-[#c73b6c]/20 bg-white p-10 text-center shadow-sm text-gray-700">
              <p className="font-cormorant text-2xl font-light italic">No bundle selected yet.</p>
              <p className="mt-3 text-sm text-gray-600">
                Pick one or more products from the shop before checking out.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 active:scale-95"
              >
                Return to shop
              </Link>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">

              {/* ── Left column: summary + form ── */}
              <div className="space-y-6">

                {/* Order summary */}
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="font-cormorant text-2xl font-light italic text-black">Order summary</h2>
                  <div className="mt-5 space-y-3">
                    {productsToCheckout.map((item) => (
                      <div key={item.id} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 shrink-0 rounded-xl object-cover object-top"
                          />
                        )}
                        <div className="flex flex-1 items-start justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-gray-500">{item.tier}</p>
                            <p className="mt-0.5 font-semibold text-black">{item.name}</p>
                            <p className="mt-0.5 text-xs text-gray-500">
                              {item.length} inch · {item.texture} · {item.description}
                            </p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="font-semibold text-black">R{fmt(item.price * item.quantity)}</p>
                            <p className="mt-0.5 text-xs text-gray-400">× {item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total row */}
                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#fdf0f4] px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#c73b6c]">Order total</p>
                    <p className="font-cormorant text-2xl font-light italic text-black">R{fmt(orderTotal)}</p>
                  </div>
                </div>

                {/* Delivery form */}
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <h2 className="font-cormorant text-2xl font-light italic text-black">Delivery details</h2>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {/* Full name */}
                    <div className="space-y-2">
                      <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                        Full name
                      </label>
                      <input
                        id="customerName"
                        type="text"
                        name="customerName"
                        value={values.customerName}
                        onChange={handleChange}
                        autoComplete="name"
                        maxLength={100}
                        placeholder="Sarah Smith"
                        className={`w-full rounded-2xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:ring-2 ${
                          errors.customerName
                            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                            : "border-gray-300 focus:border-[#c73b6c] focus:ring-[#c73b6c]/10"
                        }`}
                      />
                      {errors.customerName && (
                        <p className="text-xs text-red-600">{errors.customerName}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        WhatsApp number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        maxLength={20}
                        placeholder="+27 82 555 1234"
                        className={`w-full rounded-2xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:ring-2 ${
                          errors.phone
                            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                            : "border-gray-300 focus:border-[#c73b6c] focus:ring-[#c73b6c]/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mt-5 space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Delivery address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      autoComplete="street-address"
                      maxLength={400}
                      rows={3}
                      placeholder="123 Main Road, Cape Town, 8001"
                      className={`w-full rounded-2xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:ring-2 ${
                        errors.address
                          ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                          : "border-gray-300 focus:border-[#c73b6c] focus:ring-[#c73b6c]/10"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-xs text-red-600">{errors.address}</p>
                    )}
                  </div>

                  {/* Payment method */}
                  <div className="mt-5 space-y-2">
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                      Preferred payment method
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={values.paymentMethod}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#c73b6c] focus:ring-2 focus:ring-[#c73b6c]/10"
                    >
                      <option value="PayFast">PayFast — card & EFT</option>
                      <option value="Yoco">Yoco — card & tap-to-pay</option>
                      <option value="PayPal">PayPal</option>
                      <option value="EFT">EFT / Bank transfer</option>
                      <option value="WhatsApp">Confirm on WhatsApp</option>
                    </select>
                    <p className="text-xs text-gray-500">
                      Our team will send you a secure payment link on WhatsApp once your order is confirmed.
                    </p>
                  </div>

                  {/* Global submit error */}
                  {submitError && (
                    <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
                      {submitError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-6 py-4 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 select-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                        Placing your order…
                      </>
                    ) : (
                      "Place order"
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-gray-500">
                    WhatsApp will open with your order pre-filled — just hit Send.
                  </p>
                </form>
              </div>

              {/* ── Right column: how it works + payment info ── */}
              <div className="space-y-5">

                {/* How it works */}
                <div className="rounded-3xl border border-[#d4af37]/25 bg-[#070206] p-7 text-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#d4af37]">How it works</p>
                  <ol className="mt-5 space-y-4 text-sm leading-7 text-[#c9bba0]">
                    {[
                      "Fill in your delivery details and tap \"Place order.\"",
                      "WhatsApp opens with your full order pre-filled — just hit Send.",
                      "Our team confirms your order and sends a payment link within minutes.",
                      "Cape Town orders placed before 1 PM are delivered the same day.",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-0.5 shrink-0 font-cormorant text-base italic text-[#d4af37]">
                          {["①", "②", "③", "④"][i]}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Payment options */}
                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-700">Payment options</p>
                  <div className="mt-4 space-y-2 text-sm">
                    {[
                      { name: "PayFast",  desc: "Secure card & EFT" },
                      { name: "Yoco",     desc: "Card & tap-to-pay" },
                      { name: "PayPal",   desc: "International payments" },
                      { name: "EFT",      desc: "Direct bank transfer" },
                    ].map(({ name, desc }) => (
                      <div key={name} className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                        <span className="font-semibold text-black">{name}</span>
                        <span className="text-gray-400">—</span>
                        <span className="text-gray-600">{desc}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 rounded-xl bg-[#fdf0f4] px-4 py-3 text-xs leading-5 text-gray-600">
                    Payment is processed after order confirmation. Our team will send you a secure link via WhatsApp.
                  </p>
                </div>

                {/* Trust signals */}
                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-700">Our promise</p>
                  <ul className="mt-4 space-y-3 text-sm text-gray-600">
                    {[
                      "100% raw Vietnamese human hair — no blends",
                      "Same-day Cape Town delivery before 1 PM",
                      "WhatsApp support from order to doorstep",
                      "Exchanges accepted within 7 days",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[#d4af37]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
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

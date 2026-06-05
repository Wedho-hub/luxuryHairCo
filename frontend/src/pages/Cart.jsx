import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useCart } from "../context/CartContext";

const fmt = (n) => Number(n).toLocaleString("en-ZA");

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();
  const [clearConfirm, setClearConfirm] = useState(false);

  return (
    <main className="bg-white text-gray-900">
      <Seo
        title="Your Cart | Silk Sculpture Hair"
        description="Review the bundles in your cart before checking out securely with Silk Sculpture Hair in Cape Town."
        url="https://luxuryhairco.github.io/cart"
      />
      <Header />
      <section className="bg-[#fdf0f4] py-14 px-6">
        <div className="mx-auto max-w-6xl">

          {/* ── Page header ── */}
          <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#c73b6c]">Your cart</p>
                <h1 className="mt-3 font-cormorant text-3xl font-light italic text-black sm:text-4xl">
                  Review your selected bundles
                </h1>
                {cartItems.length > 0 && (
                  <p className="mt-2 text-sm text-gray-600">
                    {cartItems.length} {cartItems.length === 1 ? "bundle" : "bundles"} selected
                  </p>
                )}
              </div>
              {cartItems.length > 0 && (
                <div className="rounded-3xl bg-[#070206] px-6 py-4 text-white shadow-lg">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400">Cart total</p>
                  <p className="mt-1.5 font-cormorant text-3xl font-light italic text-[#d4af37]">
                    R{fmt(cartTotal)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── Empty state ── */}
          {cartItems.length === 0 ? (
            <div className="rounded-3xl border border-[#c73b6c]/20 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fdf0f4]">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#c73b6c]/60" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
              </div>
              <p className="font-cormorant text-2xl font-light italic text-black">Your cart is empty.</p>
              <p className="mt-3 text-sm text-gray-600">
                Browse our collection and add your favourite bundles to get started.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition hover:brightness-110 active:scale-95 select-none"
              >
                Browse the collection
              </Link>
            </div>
          ) : (
            <div className="space-y-6">

              {/* ── Cart items ── */}
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-6">
                      {/* Thumbnail + info */}
                      <div className="flex gap-4">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top"
                          />
                        )}
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-gray-500">{item.tier}</p>
                          <h2 className="mt-1 font-cormorant text-xl font-medium italic text-black">{item.name}</h2>
                          <p className="mt-0.5 text-sm text-gray-600">{item.description}</p>
                          <p className="mt-1 text-xs text-gray-400">{item.length} inch · {item.texture}</p>
                        </div>
                      </div>

                      {/* Qty + price + remove */}
                      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-start">
                        {/* Quantity stepper */}
                        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-black shadow-sm transition hover:bg-gray-100 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30 select-none"
                          >
                            −
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-black shadow-sm transition hover:bg-gray-100 active:scale-90 select-none"
                          >
                            +
                          </button>
                        </div>

                        <div className="flex flex-col items-end gap-1.5">
                          <p className="text-lg font-semibold text-black">R{fmt(item.price * item.quantity)}</p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-gray-400">R{fmt(item.price)} each</p>
                          )}
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-[#c73b6c] underline-offset-2 transition hover:underline hover:text-[#a82e59] active:opacity-70 select-none"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Bottom actions ── */}
              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">

                {/* Continue shopping */}
                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-700">Need more bundles?</p>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Add more products or adjust quantities before you proceed to checkout.
                  </p>
                  <Link
                    to="/"
                    className="mt-5 inline-flex rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 active:scale-95 select-none"
                  >
                    Continue shopping
                  </Link>
                </div>

                {/* Order summary + CTA */}
                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-700">Order summary</p>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Items</span>
                      <span className="font-medium text-black">
                        {cartItems.reduce((s, i) => s + i.quantity, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery</span>
                      <span className="font-medium text-black">Confirmed on WhatsApp</span>
                    </div>
                    <div className="mt-3 flex justify-between border-t border-gray-100 pt-3">
                      <span className="font-semibold text-black">Total</span>
                      <span className="font-bold text-black">R{fmt(cartTotal)}</span>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-6 py-4 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition hover:brightness-110 active:scale-95 select-none"
                  >
                    Proceed to checkout
                  </Link>

                  {/* Clear cart — inline confirmation */}
                  {clearConfirm ? (
                    <div className="mt-4 rounded-2xl border border-red-100 bg-red-50 p-4">
                      <p className="text-center text-sm font-medium text-red-800">
                        Remove all items from your cart?
                      </p>
                      <div className="mt-3 flex gap-2">
                        <button
                          type="button"
                          onClick={() => { clearCart(); setClearConfirm(false); }}
                          className="flex-1 rounded-full bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95 select-none"
                        >
                          Yes, clear
                        </button>
                        <button
                          type="button"
                          onClick={() => setClearConfirm(false)}
                          className="flex-1 rounded-full border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95 select-none"
                        >
                          Keep items
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setClearConfirm(true)}
                      className="mt-3 w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-sm text-gray-500 transition hover:border-gray-300 hover:text-gray-700 active:scale-95 select-none"
                    >
                      Clear cart
                    </button>
                  )}
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

export default Cart;

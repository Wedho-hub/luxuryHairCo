import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <main className="bg-white text-gray-900">
      <section className="bg-pink-50 py-14 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Your cart</p>
                <h1 className="mt-4 text-3xl font-bold">Review your selected bundles</h1>
                <p className="mt-3 max-w-2xl text-gray-600">
                  Add more bundles or proceed to checkout once you're ready.
                </p>
              </div>
              <div className="rounded-3xl bg-black px-5 py-4 text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.28em] text-gray-300">Cart total</p>
                <p className="mt-2 text-3xl font-semibold">R{cartTotal}</p>
              </div>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="rounded-3xl border border-pink-200 bg-pink-50 p-10 text-center text-gray-700">
              <p className="text-xl font-semibold">Your cart is empty.</p>
              <p className="mt-3 text-gray-600">Select bundles from the shop to add them to your cart.</p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Back to shop
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-gray-500">{item.tier}</p>
                        <h2 className="mt-2 text-xl font-semibold text-black">{item.name}</h2>
                        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                      </div>

                      <div className="flex flex-col gap-3 sm:items-end">
                        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 rounded-full bg-white text-sm font-semibold text-black transition hover:bg-gray-100"
                          >
                            −
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 rounded-full bg-white text-sm font-semibold text-black transition hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-lg font-semibold text-black">R{item.price * item.quantity}</p>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-pink-600 transition hover:text-pink-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Need more bundles?</p>
                  <p className="mt-4 text-gray-700">
                    Add additional products to your cart and update quantities before you complete checkout.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Ready to buy</p>
                  <p className="mt-4 text-gray-700">Total includes all selected bundles.</p>
                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-black">Items:</span> {cartItems.length}
                    </p>
                    <p>
                      <span className="font-semibold text-black">Total:</span> R{cartTotal}
                    </p>
                  </div>
                  <Link
                    to="/checkout"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-900"
                  >
                    Proceed to checkout
                  </Link>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="mt-4 w-full rounded-full border border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;

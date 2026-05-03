import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderSuccess = () => {
  const location = useLocation();
  const state = location.state;
  const order = state?.order;
  const paymentMethod = state?.paymentMethod;

  return (
    <main className="bg-white text-gray-900">
      <Header />
      <section className="bg-pink-50 py-20 px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Order confirmed</p>
            <h1 className="mt-4 text-4xl font-bold">Thank you for your order.</h1>
            <p className="mt-4 text-gray-600">
              Your order has been recorded and will be finalized once payment is processed through the selected provider.
            </p>
          </div>

          {!order ? (
            <div className="mt-10 rounded-3xl border border-pink-200 bg-pink-50 p-8 text-center text-gray-700">
              <p className="text-lg font-semibold">No order details found.</p>
              <p className="mt-3">Please return to the shop and choose a bundle to submit a new order.</p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Go to shop
              </Link>
            </div>
          ) : (
            <div className="mt-10 space-y-8">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Order number</p>
                  <p className="mt-2 text-2xl font-semibold text-black">#{order._id.slice(-6).toUpperCase()}</p>
                </div>

                <div className="mt-8 space-y-6">
                  {order.items?.map((item) => (
                    <div key={item.productId} className="rounded-3xl bg-white p-6 shadow-sm">
                      <p className="text-sm uppercase tracking-[0.28em] text-gray-500">{item.productName}</p>
                      <div className="mt-3 flex items-center justify-between gap-4">
                        <p className="font-semibold text-black">Quantity: {item.quantity}</p>
                        <p className="font-semibold text-black">R{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-pink-50 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Order total</p>
                  <p className="mt-3 text-3xl font-semibold text-black">R{order.total}</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6 rounded-3xl border border-gray-200 bg-gray-50 p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Order number</p>
                    <p className="mt-2 text-2xl font-semibold text-black">#{order._id.slice(-6).toUpperCase()}</p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Items</p>
                    <p className="mt-2 text-lg font-semibold">{order.items?.length ?? 0} bundle(s)</p>
                    <p className="mt-2 text-gray-600">Thank you for your order. We are preparing your payment link.</p>
                  </div>

                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Next step</p>
                    <p className="mt-3 text-gray-700">
                      A payment link will be issued through <span className="font-semibold">{paymentMethod || "PayFast"}</span> once the gateway integration is active.
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Delivery</p>
                  <p className="mt-3 text-gray-700">{order.address}</p>
                  <p className="mt-4 text-sm text-gray-500">Phone: {order.phone}</p>
                  <p className="mt-2 text-sm text-gray-500">Name: {order.customerName}</p>

                  <div className="mt-8 rounded-3xl bg-pink-50 p-6 text-gray-700">
                    <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Payment state</p>
                    <p className="mt-3 text-lg font-semibold text-black">Pending</p>
                    <p className="mt-2 text-sm text-gray-600">
                      We'll update this status once payment is confirmed through the gateway.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Back to shop
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default OrderSuccess;

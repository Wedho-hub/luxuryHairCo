import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Seo from "../components/Seo";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "27825551234";

const OrderSuccess = () => {
  const location = useLocation();
  const state = location.state;
  const order = state?.order;
  const paymentMethod = state?.paymentMethod;

  const orderId = order?._id
    ? String(order._id).slice(-6).toUpperCase()
    : null;

  const waMessage = order
    ? encodeURIComponent(`Hi! Following up on my order #${orderId}`)
    : null;

  return (
    <main className="bg-white text-gray-900">
      <Seo
        title="Order confirmed | Luxury Hair Co."
        description="Your hair bundle order is confirmed. Luxury Hair Co. will process your delivery and payment details shortly."
        url="https://luxuryhairco.github.io/order-success"
      />
      <Header />
      <section className="bg-pink-50 py-20 px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-pink-500">Order confirmed</p>
            <h1 className="mt-4 text-4xl font-bold">Thank you for your order.</h1>
            <p className="mt-4 text-gray-600">
              Check your WhatsApp — your order details have been sent to our team for confirmation.
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
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Order reference</p>
                    <p className="mt-2 text-2xl font-semibold text-black">#{orderId}</p>
                  </div>
                  <div className="rounded-2xl bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                    Order received
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {order.items?.map((item) => (
                    <div key={item.productId} className="rounded-3xl bg-white p-6 shadow-sm">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-black">{item.productName}</p>
                          <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-black">R{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-3xl bg-pink-50 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-pink-500">Order total</p>
                  <p className="text-3xl font-semibold text-black">R{order.total}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Delivery to</p>
                  <p className="mt-3 font-semibold text-black">{order.customerName}</p>
                  <p className="mt-1 text-sm text-gray-600">{order.phone}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-6">{order.address}</p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Payment</p>
                  <p className="mt-3 font-semibold text-black">{paymentMethod || "PayFast"}</p>
                  <div className="mt-4 rounded-2xl bg-yellow-50 px-4 py-3">
                    <p className="text-sm font-semibold text-yellow-800">Pending confirmation</p>
                    <p className="mt-1 text-xs text-yellow-700">
                      Our team will send your payment link on WhatsApp shortly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#d4af37]/30 bg-[#090307] p-8 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-[#d4af37]">What happens next</p>
                <p className="mt-3 text-[#c9bba0]">
                  Our team will reach out on WhatsApp to confirm your order and send a payment link. Cape Town orders placed before 1 PM ship the same day.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat with us on WhatsApp
                </a>
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

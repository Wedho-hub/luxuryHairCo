import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import ProductGallery from "../components/ProductGallery";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { getYouTubeEmbed } from "../utils/youtube";

const COLOR_DOT = {
  Natural: "bg-gray-900",
  Burgundy: "bg-[#6b1a2a]",
  "Colour 33": "bg-[#8b4513]",
  Brown: "bg-[#6f4e37]",
  "Two Tone": "bg-gradient-to-r from-gray-900 to-[#8b4513]",
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const product = products.find((p) => String(p.id) === String(id));

  useEffect(() => {
    if (!toastVisible) return;
    const timer = window.setTimeout(() => setToastVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, [toastVisible]);

  if (!product) {
    return (
      <main className="bg-white text-gray-900">
        <Header />
        <section className="bg-[#fdf0f4] py-20 px-6">
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#c73b6c]/20 bg-white p-12 text-center shadow-sm">
            <p className="font-cormorant text-2xl font-light italic text-black">Bundle not found.</p>
            <p className="mt-3 text-sm text-gray-600">This style may have been moved or retired.</p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 active:scale-95"
            >
              Back to shop
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const isFrontal = product.tier === "Full Frontal";
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const embedUrl = getYouTubeEmbed(product.videoUrl);

  const related = products
    .filter((p) => p.id !== product.id && p.featured)
    .slice(0, 3);

  const handleAddToCart = () => {
    const existing = cartItems.find((item) => item.id === product.id);
    setToastMessage(
      existing ? `Updated ${product.name} — qty ${existing.quantity + 1}` : `${product.name} added to cart`
    );
    addToCart(product);
    setToastVisible(true);
  };

  const handleOrderNow = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <main className="bg-white text-gray-900">
      <Seo
        title={`${product.name} | Silk Sculpture Hair`}
        description={
          product.tagline
            ? `${product.tagline} ${product.length} inch ${product.tier}, ${product.color}. 100% Raw Vietnamese Hair, luxury grade quality.`
            : `${product.length} inch ${product.tier}, ${product.color}. 100% Raw Vietnamese Hair, luxury grade quality.`
        }
        url={`https://luxuryhairco.github.io/product/${product.id}`}
      />
      <Header />

      <section className="bg-[#fdf0f4] py-10 px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 transition hover:text-black"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to shop
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* ── Gallery ── */}
            <div>
              <ProductGallery images={gallery} alt={product.name} />
            </div>

            {/* ── Info ── */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                    isFrontal
                      ? "bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] text-black"
                      : "bg-black text-[#f3ddb2]"
                  }`}
                >
                  {product.tier}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black shadow-sm">
                  {product.length} inch
                </span>
              </div>

              {/* Colour */}
              <div className="mt-4 flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${COLOR_DOT[product.color] ?? "bg-gray-400"}`} aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                  {product.color}{product.part ? ` · ${product.part}` : ""}
                </span>
              </div>

              {/* Name + tagline */}
              <h1 className="mt-3 font-cormorant text-4xl font-medium italic text-black sm:text-5xl">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="mt-2 font-cormorant text-xl font-light italic text-[#c73b6c]">
                  {product.tagline}
                </p>
              )}

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-sm font-medium text-gray-600">R</span>
                <span className="text-4xl font-bold tracking-tight text-black">
                  {product.price.toLocaleString("en-ZA")}
                </span>
              </div>

              {/* Actions */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="rounded-full border border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:border-black hover:bg-gray-50 active:scale-95 select-none"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  onClick={handleOrderNow}
                  className="rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-5 py-3.5 text-sm font-semibold text-black shadow-md shadow-[#d4af37]/20 transition hover:brightness-110 active:scale-95 select-none"
                >
                  Order now
                </button>
              </div>

              {/* Long description */}
              {product.longDescription && (
                <p className="mt-7 text-sm leading-7 text-gray-700">{product.longDescription}</p>
              )}

              {/* Styling options */}
              {product.stylingOptions?.length > 0 && (
                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-700">Styling options</p>
                  <ul className="mt-3 space-y-2">
                    {product.stylingOptions.map((opt) => (
                      <li key={opt} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="mt-1.5 h-[5px] w-[5px] shrink-0 rounded-full bg-[#d4af37]" aria-hidden="true" />
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Perfect for */}
              {product.perfectFor && (
                <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c73b6c]">Perfect for</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{product.perfectFor}</p>
                </div>
              )}

              {/* Hair care */}
              {product.hairCare && (
                <div className="mt-4 rounded-2xl bg-[#070206] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Luxury hair care</p>
                  <p className="mt-2 text-sm leading-6 text-[#c9bba0]">{product.hairCare}</p>
                </div>
              )}

              {/* Spec line */}
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gray-400">
                100% Raw Vietnamese Hair · {product.texture} · Luxury Grade Quality
              </p>
            </div>
          </div>

          {/* ── Video ── */}
          {(embedUrl || product.videoUrl === "placeholder") && (
            <div className="mt-14">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-700">Watch {product.name}</p>
              {embedUrl ? (
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-3xl shadow-sm">
                  <iframe
                    src={embedUrl}
                    title={`${product.name} video`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="mt-4 flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-3xl bg-[#070206] px-6 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37]/15">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#d4af37]" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <p className="font-cormorant text-xl font-light italic text-[#d4af37]">Video coming soon</p>
                  <p className="max-w-xs text-xs leading-5 text-[#9e8e80]">
                    We're filming a styling video for {product.name} — check back soon, or ask our team on WhatsApp.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ── Related ── */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-gray-200 pt-10">
              <p className="font-cormorant text-2xl font-light italic text-black">You may also like</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-[#d4af37]/30 hover:shadow-md"
                  >
                    <img src={p.image} alt={p.name} className="h-16 w-16 shrink-0 rounded-xl object-cover object-top" />
                    <div>
                      <p className="font-cormorant text-lg font-medium italic text-black transition-colors group-hover:text-[#b8941f]">
                        {p.name}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">{p.length} inch · R{p.price.toLocaleString("en-ZA")}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Toast */}
      {toastVisible && (
        <div className="pointer-events-none fixed left-1/2 top-24 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg animate-scale-in">
          {toastMessage}
        </div>
      )}

      <Footer />
    </main>
  );
};

export default ProductDetail;

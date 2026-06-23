import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import { useCart } from "../context/CartContext";
import { getYouTubeEmbed } from "../utils/youtube";

const COLOR_DOT = {
  Natural: "bg-gray-900",
  Burgundy: "bg-[#6b1a2a]",
  "Colour 33": "bg-[#8b4513]",
  Brown: "bg-[#6f4e37]",
  "Two Tone": "bg-gradient-to-r from-gray-900 to-[#8b4513]",
};

const ProductModal = ({ product, onClose }) => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (!toastVisible) return;
    const timer = window.setTimeout(() => setToastVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, [toastVisible]);

  if (!product) return null;

  const isFrontal = product.tier === "Full Frontal";
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const embedUrl = getYouTubeEmbed(product.videoUrl);

  const handleAddToCart = () => {
    const existing = cartItems.find((item) => item.id === product.id);
    setToastMessage(
      existing ? `Updated ${product.name} — qty ${existing.quantity + 1}` : `${product.name} added to cart`
    );
    addToCart(product);
    setToastVisible(true);
  };

  const handleOrderNow = () => {
    onClose();
    navigate("/checkout", { state: { product } });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-fade-up sm:rounded-3xl"
        style={{ animationDuration: "0.4s" }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90 select-none"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid gap-8 p-6 sm:grid-cols-2 sm:gap-10 sm:p-8">
          {/* ── Gallery ── */}
          <div>
            <ProductGallery images={gallery} alt={product.name} />
          </div>

          {/* ── Info ── */}
          <div>
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
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-black">
                {product.length} inch
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${COLOR_DOT[product.color] ?? "bg-gray-400"}`} aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                {product.color}{product.part ? ` · ${product.part}` : ""}
              </span>
            </div>

            <h2 className="mt-3 font-cormorant text-3xl font-medium italic text-black sm:text-4xl">
              {product.name}
            </h2>
            {product.tagline && (
              <p className="mt-1.5 font-cormorant text-lg font-light italic text-[#c73b6c]">{product.tagline}</p>
            )}

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-sm font-medium text-gray-600">R</span>
              <span className="text-3xl font-bold tracking-tight text-black">
                {product.price.toLocaleString("en-ZA")}
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-black hover:bg-gray-50 active:scale-95 select-none"
              >
                Add to cart
              </button>
              <button
                type="button"
                onClick={handleOrderNow}
                className="rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-5 py-3 text-sm font-semibold text-black shadow-md shadow-[#d4af37]/20 transition hover:brightness-110 active:scale-95 select-none"
              >
                Order now
              </button>
            </div>

            {product.longDescription && (
              <p className="mt-6 text-sm leading-7 text-gray-700">{product.longDescription}</p>
            )}

            {product.stylingOptions?.length > 0 && (
              <div className="mt-6">
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

            {product.perfectFor && (
              <div className="mt-5 rounded-2xl bg-[#fdf0f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c73b6c]">Perfect for</p>
                <p className="mt-1.5 text-sm leading-6 text-gray-700">{product.perfectFor}</p>
              </div>
            )}

            {product.hairCare && (
              <div className="mt-3 rounded-2xl bg-[#070206] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Luxury hair care</p>
                <p className="mt-1.5 text-sm leading-6 text-[#c9bba0]">{product.hairCare}</p>
              </div>
            )}

            {/* Video */}
            {(embedUrl || product.videoUrl === "placeholder") && (
              <div className="mt-6">
                {embedUrl ? (
                  <div className="aspect-video w-full overflow-hidden rounded-2xl">
                    <iframe
                      src={embedUrl}
                      title={`${product.name} video`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl bg-[#070206] px-4 text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/15">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#d4af37]" fill="currentColor" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <p className="font-cormorant text-sm italic text-[#d4af37]">Video coming soon</p>
                  </div>
                )}
              </div>
            )}

            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 transition hover:text-black"
            >
              View full page
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toastVisible && (
        <div className="pointer-events-none fixed left-1/2 top-6 z-[110] -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg animate-scale-in">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ProductModal;

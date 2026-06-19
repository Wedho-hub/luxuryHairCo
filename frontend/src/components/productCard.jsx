import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const COLOR_DOT = {
  Natural: "bg-gray-900",
  Burgundy: "bg-[#6b1a2a]",
  "Colour 33": "bg-[#8b4513]",
  Brown: "bg-[#6f4e37]",
  "Two Tone": "bg-gradient-to-r from-gray-900 to-[#8b4513]",
};

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const isFrontal = product.tier === "Full Frontal";

  useEffect(() => {
    if (!toastVisible) return;
    const timer = window.setTimeout(() => setToastVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, [toastVisible]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const existing = cartItems.find((item) => item.id === product.id);
    setToastMessage(
      existing
        ? `Updated ${product.name} — qty ${existing.quantity + 1}`
        : `${product.name} added to cart`
    );
    addToCart(product);
    setToastVisible(true);
  };

  const handleOrderNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-[transform,box-shadow,border-color] duration-700 hover:-translate-y-2 hover:border-[#d4af37]/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
      {/* Whole-card link — sits beneath the action buttons (z-10) so it covers
          everything else (image, badges, text) without blocking the buttons */}
      <Link
        to={`/product/${product.id}`}
        aria-label={`View ${product.name} details`}
        className="absolute inset-0 z-0"
      />

      {/* Image */}
      <div className="relative h-[22rem] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — ${product.length}" ${product.color} ${product.tier}`}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        {/* Bottom scrim — fades in on hover */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Type badge — top-left */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow ${
            isFrontal
              ? "bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] text-black"
              : "bg-black/75 text-[#f3ddb2] backdrop-blur-sm"
          }`}
        >
          {product.tier}
        </span>

        {/* Length badge — top-right */}
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black shadow backdrop-blur-sm">
          {product.length} inch
        </span>

        {/* Gallery indicator — bottom-right, only if multiple photos */}
        {product.gallery?.length > 1 && (
          <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
              <path d="M4 4h16v12H4V4zm2 10h12L13.5 8 10 12.5 8 10l-2 4zM2 8v12h16v-2H4V8H2z" />
            </svg>
            {product.gallery.length}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6">
        {/* Colour chip */}
        <div className="flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full ${COLOR_DOT[product.color] ?? "bg-gray-400"}`}
            aria-hidden="true"
          />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            {product.color}{product.part ? ` · ${product.part}` : ""}
          </span>
        </div>

        {/* Name */}
        <h3 className="mt-3 font-cormorant text-2xl font-medium italic text-black transition-colors duration-500 group-hover:text-[#b8941f]">{product.name}</h3>

        {/* Tagline or spec line */}
        <p className="mt-1 text-sm text-gray-600">
          {product.tagline || `Raw Vietnamese · ${product.texture}`}
        </p>

        {/* Price */}
        <div className="mt-auto pt-5 flex items-baseline gap-1">
          <span className="text-sm font-medium text-gray-600">R</span>
          <span className="text-3xl font-bold tracking-tight text-black">
            {product.price.toLocaleString("en-ZA")}
          </span>
        </div>

        {/* Actions — relative + z-10 keeps these clickable above the card-wide link */}
        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-black transition-[border-color,background-color,transform] hover:border-black hover:bg-gray-50 active:scale-95 select-none"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={handleOrderNow}
            className="rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-4 py-3 text-sm font-semibold text-black shadow-md shadow-[#d4af37]/20 transition-[filter,transform] hover:brightness-110 active:scale-95 select-none"
          >
            Order now
          </button>
        </div>
      </div>

      {/* Toast */}
      {toastVisible && (
        <div className="pointer-events-none absolute left-1/2 top-4 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg animate-scale-in">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ProductCard;

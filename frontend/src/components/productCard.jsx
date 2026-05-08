import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleAddToCart = () => {
    const existing = cartItems.find((item) => item.id === product.id);
    setToastMessage(
      existing
        ? `Updated ${product.name} — qty ${existing.quantity + 1}`
        : `${product.name} added to cart`
    );
    addToCart(product);
    setToastVisible(true);
  };

  const handleOrderNow = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — ${product.length}" ${product.color} ${product.tier}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
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
          {product.length}&Prime;
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        {/* Colour chip */}
        <div className="flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full ${COLOR_DOT[product.color] ?? "bg-gray-400"}`}
            aria-hidden="true"
          />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            {product.color}{product.part ? ` · ${product.part}` : ""}
          </span>
        </div>

        {/* Name */}
        <h3 className="mt-3 text-xl font-bold text-black">{product.name}</h3>

        {/* Spec line */}
        <p className="mt-1 text-sm text-gray-500">
          Raw Vietnamese · {product.texture}
        </p>

        {/* Price */}
        <div className="mt-auto pt-5 flex items-baseline gap-1">
          <span className="text-sm font-medium text-gray-500">R</span>
          <span className="text-3xl font-bold tracking-tight text-black">
            {product.price.toLocaleString("en-ZA")}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:border-black hover:bg-gray-50"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={handleOrderNow}
            className="rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-4 py-3 text-sm font-semibold text-black shadow-md shadow-[#d4af37]/20 transition hover:brightness-110"
          >
            Order now
          </button>
        </div>
      </div>

      {/* Toast */}
      {toastVisible && (
        <div className="pointer-events-none absolute left-1/2 top-4 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ProductCard;

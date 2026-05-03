import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("Added to cart");

  useEffect(() => {
    if (!toastVisible) return;
    const timer = window.setTimeout(() => setToastVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, [toastVisible]);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setToastMessage(
        `Updated ${product.name} quantity to ${existingItem.quantity + 1}`
      );
    } else {
      setToastMessage(`Added ${product.name} to cart`);
    }
    addToCart(product);
    setToastVisible(true);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />

      <div className="p-6">
        <span className="inline-flex rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
          {product.tier}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-black">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{product.description}</p>

        <p className="mt-4 text-sm text-gray-600">
          {product.length} inch • {product.texture}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <p className="text-3xl font-bold text-black">R{product.price}</p>
          <span className="text-sm text-gray-500">per bundle</span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr]">
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full border border-black bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-gray-50"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            Order now
          </button>
        </div>
        {toastVisible && (
          <div className="pointer-events-none absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg opacity-95">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
            Luxury Hair Co.
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Premium hair bundles delivered across Cape Town.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link to="/" className="text-sm font-semibold text-gray-700 transition hover:text-black">
            Shop
          </Link>
          <Link to="/cart" className="group relative inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-black">
            Cart
            {cartCount > 0 && (
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-2 text-sm font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/checkout" className="text-sm font-semibold text-pink-500 transition hover:text-pink-600">
            Checkout
          </Link>
        </div>

        <nav aria-label="Social media" className="flex flex-wrap items-center gap-3">
          <a
            href="https://facebook.com/luxuryhairco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/luxuryhairco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
          </a>

          <a
            href="https://pinterest.com/luxuryhairco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#BD081C] text-white transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 4.988 3.066 9.254 7.434 11.09-.103-.94-.196-2.383.041-3.409.214-.924 1.376-5.877 1.376-5.877s-.353-.706-.353-1.748c0-1.64.95-2.865 2.134-2.865 1.005 0 1.49.754 1.49 1.658 0 1.01-.644 2.516-.977 3.918-.279 1.168.591 2.117 1.75 2.117 2.1 0 3.72-2.215 3.72-5.412 0-2.828-2.034-4.81-4.937-4.81-3.362 0-5.336 2.524-5.336 5.133 0 1.023.394 2.123.888 2.721a.357.357 0 0 1 .082.341c-.09.375-.292 1.168-.331 1.33-.05.218-.163.265-.377.16-1.402-.652-2.28-2.7-2.28-4.348 0-3.545 2.576-6.8 7.43-6.8 3.902 0 6.938 2.782 6.938 6.493 0 3.873-2.444 6.992-5.835 6.992-1.14 0-2.212-.594-2.579-1.297l-.702 2.666c-.253.96-.94 2.165-1.4 2.9C9.175 23.862 10.57 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </a>

          <a
            href="https://youtube.com/luxuryhairco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a2.964 2.964 0 0 0-2.087-2.098C19.683 3.5 12 3.5 12 3.5s-7.683 0-9.411.588A2.964 2.964 0 0 0 .502 6.186 30.01 30.01 0 0 0 0 12a30.01 30.01 0 0 0 .502 5.814 2.964 2.964 0 0 0 2.087 2.098C4.317 20.5 12 20.5 12 20.5s7.683 0 9.411-.588a2.964 2.964 0 0 0 2.087-2.098A30.01 30.01 0 0 0 24 12a30.01 30.01 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </a>

          <a
            href="https://tiktok.com/@luxuryhairco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#000000] text-white transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 2.04c-2.031 0-3.676.903-4.833 2.42-.071.09-.116.202-.116.317 0 .023.004.046.007.07.238.064.492.104.758.104 1.51 0 2.879-.92 3.47-2.281.071.014.143.021.216.021 1.404 0 2.544-1.14 2.544-2.544V2.04h-.01zm2.251 5.245c-.51-.06-1.022-.08-1.537-.04v4.758c0 1.282.218 2.486.607 3.616.165.47.27.96.31 1.46.03.4.02.804-.03 1.197-.05.4-.15.79-.3 1.16-.15.37-.36.72-.62 1.04-.27.33-.59.6-.97.82-.38.23-.8.39-1.25.48-.45.09-.92.13-1.39.12-.47-.01-.94-.08-1.39-.21-.45-.13-.87-.33-1.25-.58a4.924 4.924 0 0 1-1.46-1.65c-.36-.65-.61-1.37-.73-2.11a6.14 6.14 0 0 1-.09-1.55c0-.39.02-.78.07-1.16.05-.37.14-.73.27-1.07.13-.35.31-.69.53-1.01.22-.32.49-.62.79-.88.29-.26.62-.49.96-.68.35-.19.72-.34 1.11-.44.39-.1.79-.15 1.2-.16.41-.01.82.02 1.22.08.4.06.79.15 1.16.27.38.12.73.28 1.07.48.33.2.64.45.91.73.28.28.52.6.72.96.2.36.36.75.46 1.15.1.4.14.81.13 1.23v.26c0 .56-.17 1.1-.46 1.56-.29.46-.71.83-1.21 1.07-.5.24-1.06.33-1.61.25-.55-.08-1.07-.34-1.51-.72-.44-.38-.78-.89-1-1.44-.22-.55-.3-1.13-.22-1.71.08-.58.31-1.14.66-1.64.35-.51.81-.93 1.35-1.23.54-.3 1.13-.45 1.72-.43.59.02 1.17.15 1.7.38.53.23 1.01.56 1.41.96.4.39.72.86.94 1.38.22.52.34 1.07.34 1.62v.02c0 1.31-.64 2.55-1.71 3.28A4.256 4.256 0 0 1 12 17.5c-.3 0-.6-.02-.9-.08-.4-.09-.78-.24-1.13-.45a4.295 4.295 0 0 1-1.3-1.21c-.34-.48-.59-1.02-.75-1.59-.16-.57-.22-1.16-.18-1.74.04-.57.14-1.14.31-1.68.17-.55.4-1.08.7-1.58.3-.5.66-.96 1.09-1.37.43-.41.92-.77 1.44-1.05.52-.28 1.08-.49 1.66-.6.58-.12 1.18-.17 1.77-.14.59.03 1.18.12 1.74.28.56.16 1.09.39 1.57.68.48.29.92.64 1.3 1.04.38.4.69.86.93 1.36.24.5.4 1.03.47 1.57.07.54.06 1.09-.02 1.63-.08.54-.24 1.07-.47 1.56-.23.49-.53.95-.9 1.34-.37.39-.8.72-1.28.96-.48.24-.99.4-1.52.44-.53.04-1.06.02-1.58-.07-.52-.09-1.03-.24-1.51-.44-.48-.2-.93-.45-1.33-.75-.4-.3-.76-.65-1.05-1.04-.29-.39-.52-.82-.69-1.28-.17-.46-.25-.95-.25-1.43v-.03c0-.54.09-1.08.28-1.6.19-.52.46-1.02.81-1.46.35-.44.77-.82 1.25-1.14.48-.33 1.01-.58 1.56-.74.55-.16 1.11-.24 1.68-.23v-.09z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

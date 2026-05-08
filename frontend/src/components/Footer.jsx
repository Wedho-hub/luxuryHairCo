import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer id="site-footer" className="border-t border-white/10 bg-[#070307] text-[#f6e8d3]">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <Link to="/" aria-label="Luxury Hair Co. — home">
          <Logo />
        </Link>
        <div className="mt-1 h-px bg-white/10 mb-10" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37] font-serif">
            Contact
          </p>
          <p className="mt-4 text-sm text-[#e6d9c2]">
            <a href="mailto:info@luxuryhairco.co.za" className="transition hover:text-white">
              info@luxuryhairco.co.za
            </a>
          </p>
          <p className="mt-2 text-sm text-[#e6d9c2]">
            <a href="tel:+27825551234" className="transition hover:text-white">
              +27 82 555 1234
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37] font-serif">
            Follow us
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <div className="group relative inline-flex">
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
              <span className="pointer-events-none absolute -bottom-9 left-1/2 w-max -translate-x-1/2 rounded-full bg-[#111010] px-3 py-1 text-xs text-[#f1e4cd] opacity-0 transition group-hover:opacity-100">
                Facebook
              </span>
            </div>
            <div className="group relative inline-flex">
              <a
                href="https://instagram.com/luxuryhairco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white transition hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm4.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              </a>
              <span className="pointer-events-none absolute -bottom-9 left-1/2 w-max -translate-x-1/2 rounded-full bg-[#111010] px-3 py-1 text-xs text-[#f1e4cd] opacity-0 transition group-hover:opacity-100">
                Instagram
              </span>
            </div>
            <div className="group relative inline-flex">
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
              <span className="pointer-events-none absolute -bottom-9 left-1/2 w-max -translate-x-1/2 rounded-full bg-[#111010] px-3 py-1 text-xs text-[#f1e4cd] opacity-0 transition group-hover:opacity-100">
                Pinterest
              </span>
            </div>
            <div className="group relative inline-flex">
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
              <span className="pointer-events-none absolute -bottom-9 left-1/2 w-max -translate-x-1/2 rounded-full bg-[#111010] px-3 py-1 text-xs text-[#f1e4cd] opacity-0 transition group-hover:opacity-100">
                YouTube
              </span>
            </div>
            <div className="group relative inline-flex">
              <a
                href="https://tiktok.com/@luxuryhairco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <span className="pointer-events-none absolute -bottom-9 left-1/2 w-max -translate-x-1/2 rounded-full bg-[#111010] px-3 py-1 text-xs text-[#f1e4cd] opacity-0 transition group-hover:opacity-100">
                TikTok
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37] font-serif">
            Quick links
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[#e1d3b7]">
            <li>
              <a href="#products" className="transition hover:text-white">
                Shop Bundles
              </a>
            </li>
            <li>
              <a href="#discount" className="transition hover:text-white">
                Get Discount
              </a>
            </li>
            <li>
              <Link to="/checkout" className="transition hover:text-white">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";

const ProductGallery = ({ images, alt }) => {
  const [active, setActive] = useState(0);
  const gallery = images?.length ? images : [];

  if (!gallery.length) return null;

  const single = gallery.length === 1;

  return (
    <div>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-3xl bg-[#fdf0f4] shadow-sm">
        <div className="relative aspect-[4/5]">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${alt} — view ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ease-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {!single && (
          <>
            <button
              type="button"
              onClick={() => setActive((a) => (a - 1 + gallery.length) % gallery.length)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-black shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90 select-none"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setActive((a) => (a + 1) % gallery.length)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-black shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90 select-none"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots — mobile */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:hidden">
              {gallery.map((src, i) => (
                <span
                  key={src}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    i === active ? "w-4 bg-white" : "bg-white/50"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail rail — desktop/tablet */}
      {!single && (
        <div className="mt-4 hidden gap-3 sm:flex">
          {gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View photo ${i + 1}`}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 transition ${
                i === active ? "border-[#d4af37]" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;

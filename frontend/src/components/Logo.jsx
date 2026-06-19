const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 64"
      className="h-16 w-auto shrink-0"
      aria-label="Silk Sculpture Hair"
      role="img"
    >
      {/* Mark — thin gold ring with a single flowing silk-strand "S" */}
      <circle cx="32" cy="32" r="29" fill="none" stroke="#d4af37" strokeWidth="1.25" opacity="0.5" />
      <path
        d="M 43 17 C 31 17, 20 22, 20 29 C 20 37, 31 35, 39 35 C 47 35, 47 43, 39 47 C 31 51, 20 49, 17 43"
        fill="none"
        stroke="#d4af37"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Wordmark */}
      <text
        x="74" y="31"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="19" fontStyle="italic" fontWeight="500"
        fill="#d4af37" letterSpacing="0.5"
      >
        Silk Sculpture
      </text>
      <text
        x="74" y="48"
        fontFamily="Georgia, serif"
        fontSize="10" fontWeight="300"
        fill="#f3ddb2" letterSpacing="6"
      >
        HAIR
      </text>
    </svg>
  </div>
);

export default Logo;

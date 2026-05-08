const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 265"
      className="h-16 w-auto shrink-0"
      aria-label="Luxury Hair Co."
      role="img"
    >
      {/* ── Gold circle background ── */}
      <circle cx="100" cy="98" r="90" fill="#c9a227" />

      {/* ── Hair: dark mass covering top-right, face opening left-center ── */}
      <path
        fill="#1a1008"
        d="
          M 82 36
          C 88 18, 108 8, 128 14
          C 148 20, 162 40, 168 66
          C 172 88, 168 116, 156 136
          C 146 152, 130 162, 114 165
          C 104 168, 95 163, 93 153
          C 91 143, 94 128, 96 112
          C 98 96, 100 80, 96 66
          C 92 54, 86 44, 82 38
          Z
        "
      />

      {/* ── Hair texture lines for depth ── */}
      <path d="M 108 10 C 126 18, 144 36, 150 58" stroke="#0d0800" strokeWidth="1.2" fill="none" opacity="0.45" />
      <path d="M 116 14 C 132 24, 148 44, 152 66" stroke="#0d0800" strokeWidth="0.9" fill="none" opacity="0.32" />
      <path d="M 124 20 C 138 32, 152 54, 154 76" stroke="#0d0800" strokeWidth="0.7" fill="none" opacity="0.22" />

      {/* ── Flowing hair strand curling down ── */}
      <path
        fill="#1a1008"
        d="
          M 114 165
          C 118 176, 114 188, 106 192
          C 100 195, 94 190, 95 185
          C 98 188, 103 187, 107 183
          C 113 177, 115 168, 112 160
          Z
        "
      />

      {/* ── Sunglasses ── */}
      {/* Left (outer) lens */}
      <ellipse cx="75" cy="83" rx="13" ry="10" fill="#0a0800" opacity="0.93" />
      {/* Right (inner) lens */}
      <ellipse cx="91" cy="78" rx="13" ry="10" fill="#0a0800" opacity="0.93" />
      {/* Lens inner highlight ring */}
      <ellipse cx="75" cy="83" rx="9" ry="7" fill="none" stroke="#3a2800" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="91" cy="78" rx="9" ry="7" fill="none" stroke="#3a2800" strokeWidth="0.8" opacity="0.5" />
      {/* Bridge between lenses */}
      <path d="M 88 82 Q 89.5 80 90 79" stroke="#0a0800" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Left temple arm */}
      <path d="M 62 83 Q 57 83 53 81" stroke="#0a0800" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ── Subtle nose/chin profile lines ── */}
      <path d="M 55 96 Q 51 102 54 107" stroke="#8a6010" strokeWidth="1.2" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M 56 112 Q 60 116 64 114" stroke="#8a6010" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />

      {/* ── Neck suggestion ── */}
      <path
        fill="#c9a227"
        d="
          M 66 122
          C 62 130, 62 140, 66 146
          C 70 150, 76 150, 79 146
          C 74 145, 69 141, 68 133
          C 66 126, 66 124, 66 122
          Z
        "
        opacity="0.6"
      />

      {/* ── Face profile dark shading (left edge definition) ── */}
      <path
        d="M 68 54 C 63 66, 60 80, 61 94 C 62 106, 65 116, 68 122"
        stroke="#7a5010"
        strokeWidth="1.5"
        fill="none"
        opacity="0.28"
        strokeLinecap="round"
      />

      {/* ── LUXURY wordmark ── */}
      <text
        x="100"
        y="210"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="bold"
        fill="#c9a227"
        textAnchor="middle"
        letterSpacing="6"
      >
        LUXURY
      </text>

      {/* ── HAIR CO submark ── */}
      <text
        x="100"
        y="234"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="12.5"
        fontWeight="400"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="7"
      >
        HAIR CO
      </text>
    </svg>
  </div>
);

export default Logo;

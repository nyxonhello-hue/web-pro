export default function Avatar() {
  return (
    <svg
      className="avatar"
      viewBox="0 0 360 400"
      role="img"
      aria-label="Stylized illustration of a developer in a hoodie and headphones, drawn as a faceless silhouette"
    >
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a2142" />
          <stop offset="1" stopColor="#0b0f1d" />
        </linearGradient>
        <linearGradient id="av-hood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3d4296" />
          <stop offset="1" stopColor="#1a1d4b" />
        </linearGradient>
        <linearGradient id="av-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5ee6ff" />
          <stop offset="1" stopColor="#8c7bff" />
        </linearGradient>
        <clipPath id="av-clip">
          <rect width="360" height="400" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#av-clip)">
        <rect width="360" height="400" fill="url(#av-bg)" />
        <g stroke="#ffffff" strokeOpacity="0.05">
          {[60, 120, 180, 240, 300].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400" />
          ))}
          {[80, 160, 240, 320].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="360" y2={y} />
          ))}
        </g>
        <circle cx="180" cy="175" r="128" fill="none" stroke="url(#av-glow)" strokeOpacity="0.35" />
        <circle cx="180" cy="175" r="104" fill="none" stroke="#ffffff" strokeOpacity="0.06" />

        {/* shoulders */}
        <path d="M30 400C30 322 98 286 180 286s150 36 150 114Z" fill="url(#av-hood)" />
        <path d="M128 292c20 40 84 40 104 0-22-14-82-14-104 0Z" fill="#11143a" />
        <path d="M156 318v38M204 318v38" stroke="#c9d1ff" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />

        {/* hood */}
        <path
          d="M92 205C92 112 138 68 180 68s88 44 88 137c0 48-26 84-88 90-62-6-88-42-88-90Z"
          fill="url(#av-hood)"
        />
        {/* face opening: intentionally featureless */}
        <ellipse cx="180" cy="198" rx="58" ry="66" fill="#070914" />
        <path d="M142 192h76" stroke="url(#av-glow)" strokeWidth="5" strokeLinecap="round" />
        <path d="M150 226c18 10 42 10 60 0" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="3" strokeLinecap="round" />

        {/* headphones */}
        <path
          d="M104 190c0-62 36-92 76-92s76 30 76 92"
          fill="none"
          stroke="#c9d1ff"
          strokeOpacity="0.85"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <rect x="90" y="172" width="18" height="46" rx="8" fill="#5ee6ff" fillOpacity="0.9" />
        <rect x="252" y="172" width="18" height="46" rx="8" fill="#8c7bff" fillOpacity="0.9" />

        {/* floating glyphs */}
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="20" fill="#5ee6ff" fillOpacity="0.65">
          <text x="34" y="64">{"</>"}</text>
          <text x="286" y="120">{"{ }"}</text>
          <text x="40" y="270" fill="#8c7bff">{"=>"}</text>
        </g>
      </g>
      <rect x="0.5" y="0.5" width="359" height="399" rx="27.5" fill="none" stroke="#ffffff" strokeOpacity="0.14" />
    </svg>
  );
}

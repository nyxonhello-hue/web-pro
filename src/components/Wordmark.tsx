export default function Wordmark({ size = 28 }: { size?: number }) {
  return (
    <span className="wordmark">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="wm-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5ee6ff" />
            <stop offset="1" stopColor="#8c7bff" />
          </linearGradient>
        </defs>
        <path
          d="M16 2.5 28 9.25v13.5L16 29.5 4 22.75V9.25Z"
          fill="none"
          stroke="url(#wm-g)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M11 22V10l10 12V10"
          fill="none"
          stroke="url(#wm-g)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="wordmark-text">NYXON</span>
    </span>
  );
}

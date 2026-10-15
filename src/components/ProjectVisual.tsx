import Image from "next/image";
import type { VisualKind } from "@/data/content";

const labels: Record<VisualKind, string> = {
  wca: "Windows Compatibility Analyzer",
  shira: "Shira Import",
  launcher: "Nyxon Launcher",
  guard: "Incognito Guard",
  study: "StudyNyx",
  shield: "Nyxon Shield",
  game: "Daily Detective",
};

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <rect x="1" y="1" width="318" height="198" rx="12" fill="#0e1220" stroke="#ffffff" strokeOpacity="0.14" />
      <path d="M1 13a12 12 0 0 1 12-12h294a12 12 0 0 1 12 12v18H1Z" fill="#141a2d" />
      <circle cx="18" cy="16" r="3" fill="#ffffff" fillOpacity="0.25" />
      <circle cx="30" cy="16" r="3" fill="#ffffff" fillOpacity="0.25" />
      <circle cx="42" cy="16" r="3" fill="#ffffff" fillOpacity="0.25" />
      <text x="160" y="20" textAnchor="middle" fontSize="9" fill="#a0a8ba" fontFamily="ui-monospace, monospace">
        {title}
      </text>
      {children}
    </>
  );
}

export default function ProjectVisual({
  kind,
  screenshot,
  image,
}: {
  kind: VisualKind;
  screenshot?: { src: string; alt: string; width: number; height: number; caption?: string };
  /** A real app screenshot of unknown size from the project's gallery folder. Takes priority. */
  image?: { src: string; alt: string };
}) {
  if (image) {
    return (
      <figure className="visual visual-shot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        <figcaption>Screenshot · app</figcaption>
      </figure>
    );
  }
  if (screenshot) {
    return (
      <figure className="visual">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          sizes="(min-width: 900px) 540px, 100vw"
        />
        <figcaption>{screenshot.caption ?? "Screenshot"}</figcaption>
      </figure>
    );
  }
  return (
    <figure className="visual">
      <svg
        viewBox="0 0 320 200"
        role="img"
        aria-label={`Illustrative, not real, interface sketch for ${labels[kind]}`}
      >
        <defs>
          <linearGradient id={`pv-${kind}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5ee6ff" />
            <stop offset="1" stopColor="#8c7bff" />
          </linearGradient>
        </defs>
        <Frame title={labels[kind]}>
          {kind === "wca" && (
            <g>
              <circle cx="85" cy="115" r="42" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="10" />
              <path d="M43 115a42 42 0 0 1 72-30" fill="none" stroke={`url(#pv-${kind})`} strokeWidth="10" strokeLinecap="round" />
              <text x="85" y="119" textAnchor="middle" fontSize="9" fill="#a0a8ba" fontFamily="ui-monospace, monospace">SCORE</text>
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={i}>
                  <rect x="160" y={58 + i * 25} width="70" height="8" rx="4" fill="#ffffff" fillOpacity="0.16" />
                  <rect x="238" y={58 + i * 25} width={[56, 40, 62, 30, 48][i]} height="8" rx="4" fill={`url(#pv-${kind})`} fillOpacity="0.8" />
                </g>
              ))}
            </g>
          )}
          {kind === "shira" && (
            <g>
              <rect x="16" y="42" width="288" height="42" rx="8" fill={`url(#pv-${kind})`} fillOpacity="0.28" />
              <rect x="30" y="54" width="130" height="8" rx="4" fill="#ffffff" fillOpacity="0.7" />
              <rect x="30" y="68" width="90" height="6" rx="3" fill="#ffffff" fillOpacity="0.35" />
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <rect x={16 + i * 73} y="96" width="64" height="62" rx="8" fill="#ffffff" fillOpacity="0.07" />
                  <rect x={22 + i * 73} y="102" width="52" height="30" rx="6" fill="#ffffff" fillOpacity="0.12" />
                  <rect x={22 + i * 73} y="140" width="36" height="6" rx="3" fill="#ffffff" fillOpacity="0.4" />
                </g>
              ))}
              <rect x="16" y="168" width="96" height="18" rx="9" fill="#5ee6ff" fillOpacity="0.7" />
            </g>
          )}
          {kind === "launcher" && (
            <g>
              {Array.from({ length: 8 }).map((_, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                return (
                  <g key={i}>
                    <rect x={20 + col * 72} y={48 + row * 70} width="62" height="58" rx="10" fill="#ffffff" fillOpacity="0.07" stroke="#ffffff" strokeOpacity="0.1" />
                    <circle cx={51 + col * 72} cy={70 + row * 70} r="10" fill={`url(#pv-${kind})`} fillOpacity={i % 3 === 0 ? 0.95 : 0.5} />
                    <rect x={32 + col * 72} y={90 + row * 70} width="38" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.35" />
                  </g>
                );
              })}
            </g>
          )}
          {kind === "guard" && (
            <g>
              <rect x="20" y="44" width="170" height="130" rx="10" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.12" />
              <rect x="30" y="54" width="60" height="14" rx="7" fill="#ffffff" fillOpacity="0.14" />
              <rect x="96" y="54" width="60" height="14" rx="7" fill="#ff6b81" fillOpacity="0.5" />
              <path d="M104 61h44" stroke="#0e1220" strokeWidth="2" strokeLinecap="round" />
              <path d="M255 60l40 14v34c0 28-18 44-40 54-22-10-40-26-40-54V74Z" fill="none" stroke={`url(#pv-${kind})`} strokeWidth="3" strokeLinejoin="round" />
              <path d="M238 112l12 12 22-24" fill="none" stroke="#5ee6ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              {[0, 1, 2].map((i) => (
                <rect key={i} x="32" y={90 + i * 24} width={[110, 90, 70][i]} height="7" rx="3.5" fill="#ffffff" fillOpacity="0.18" />
              ))}
            </g>
          )}
          {kind === "study" && (
            <g>
              <rect x="30" y="64" width="118" height="84" rx="10" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.1" transform="rotate(-6 89 106)" />
              <rect x="40" y="52" width="118" height="84" rx="10" fill="#141a2d" stroke="#ffffff" strokeOpacity="0.2" />
              <rect x="54" y="68" width="70" height="8" rx="4" fill={`url(#pv-${kind})`} />
              <rect x="54" y="86" width="90" height="6" rx="3" fill="#ffffff" fillOpacity="0.3" />
              <rect x="54" y="98" width="72" height="6" rx="3" fill="#ffffff" fillOpacity="0.3" />
              <rect x="178" y="52" width="124" height="26" rx="10" fill="#ffffff" fillOpacity="0.1" />
              <rect x="190" y="88" width="112" height="26" rx="10" fill={`url(#pv-${kind})`} fillOpacity="0.55" />
              <rect x="178" y="124" width="100" height="26" rx="10" fill="#ffffff" fillOpacity="0.1" />
              <rect x="40" y="158" width="262" height="14" rx="7" fill="#ffffff" fillOpacity="0.08" />
            </g>
          )}
          {kind === "shield" && (
            <g>
              <path d="M160 48l52 18v40c0 32-22 52-52 64-30-12-52-32-52-64V66Z" fill="none" stroke={`url(#pv-${kind})`} strokeWidth="3.5" strokeLinejoin="round" />
              <path d="M140 108l14 14 28-30" fill="none" stroke="#5ee6ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect x="20" y={62 + i * 34} width="64" height="8" rx="4" fill="#ffffff" fillOpacity="0.16" />
                  <rect x="236" y={62 + i * 34} width="64" height="8" rx="4" fill="#ff6b81" fillOpacity="0.45" />
                </g>
              ))}
            </g>
          )}
          {kind === "game" && (
            <g>
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={20 + i * 74} y="44" width="66" height="16" rx="8" fill="#ffffff" fillOpacity={i === 0 ? 0.22 : 0.08} />
              ))}
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect x={20 + i * 98} y="72" width="90" height="70" rx="10" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.12" />
                  <circle cx={65 + i * 98} cy="96" r="12" fill={`url(#pv-${kind})`} fillOpacity={i === 1 ? 0.95 : 0.5} />
                  <rect x={34 + i * 98} y="118" width="62" height="6" rx="3" fill="#ffffff" fillOpacity="0.35" />
                </g>
              ))}
              <rect x="20" y="154" width="280" height="24" rx="12" fill={`url(#pv-${kind})`} fillOpacity="0.55" />
            </g>
          )}
        </Frame>
      </svg>
      <figcaption>Illustrative sketch · not a screenshot</figcaption>
    </figure>
  );
}

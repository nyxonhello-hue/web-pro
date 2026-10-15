import type { Status } from "@/data/content";

export default function StatusBadge({ status }: { status: Status }) {
  const tone =
    status === "Concept"
      ? "tone-concept"
      : status === "In Development" || status === "Prototype" || status === "Working MVP"
        ? "tone-dev"
        : "tone-done";
  return (
    <span className={`badge ${tone}`}>
      <span className="dot" aria-hidden="true" />
      {status}
    </span>
  );
}

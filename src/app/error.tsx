"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="container not-found">
      <p className="eyebrow">Something went wrong</p>
      <h1>This page couldn't load.</h1>
      <p className="lead">Please try again. If it keeps happening, email me and I'll fix it.</p>
      <button type="button" className="btn btn-primary" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow">404</p>
      <h1>That page doesn't exist.</h1>
      <p className="lead">The link may be old or mistyped.</p>
      <Link className="btn btn-primary" href="/">
        Back to the portfolio
      </Link>
    </div>
  );
}

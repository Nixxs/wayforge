import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      {/* The host returns 200 for unknown paths, so keep them out of search indexes */}
      <meta name="robots" content="noindex" />
      <h1>404 — Page not found</h1>
      <Link to="/">Back to Wayforge home</Link>
    </>
  )
}

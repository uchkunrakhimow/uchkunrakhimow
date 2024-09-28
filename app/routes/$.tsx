import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white font-mono px-4">
      <div className="bg-alpha-200 p-[1.5rem] rounded-xl">
        <img
          src="/avatar.png"
          className="mb-2 transition hover:rotate-45"
          alt="Avatar indicating an error occurred"
          width="150"
          height="150"
        />
        <h1 className="text-2xl font-bold mb-2">404 Not Found</h1>
        <p className="mb-6">
          The link was a dream,
          <br />A shadow of what once was- Now, nothing remains.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-cyan-900 hover:bg-cyan-800 text-white rounded-lg transition"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

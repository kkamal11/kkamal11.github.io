import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  error?: Error;
};

const FallbackUI: React.FC<Props> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">

      <h1 className="text-3xl font-bold text-red-400 mb-2">
        Something went wrong
      </h1>

      <p className="text-gray-400 mb-6 text-center">
        An unexpected error occurred. You can go back home or reload the page.
      </p>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >
          Go Home
        </button>

        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition"
        >
          Reload Page
        </button>
      </div>

    {import.meta.env.VITE_APP_ENV == 'DEV' && <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-xl p-4 font-mono text-sm overflow-auto">
              <p className="text-green-400 mb-2">$ error-log</p>
              <pre className="text-red-400 whitespace-pre-wrap">
                  {error?.stack || "No error details available"}
              </pre>
          </div>}
    </div>
  );
};

export default FallbackUI;
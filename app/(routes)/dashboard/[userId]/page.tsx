"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screenbg-[#052426]/70 text-teal-100 p-6">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-teal-200 mb-8 text-center max-w-md">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <button
        onClick={() => router.push("/dashboard")}
        className="bg-[#052426]/70 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;

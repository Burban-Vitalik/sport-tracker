"use client";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-800">
      <div
        className={`text-center p-6 transform transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <HiOutlineExclamationCircle className="mx-auto text-6xl text-gray-600 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-500 mb-6">
          Sorry, the page youre looking for doesnt exist.
        </p>
        <Link
          href="/"
          passHref
          className="text-blue-500 hover:underline text-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

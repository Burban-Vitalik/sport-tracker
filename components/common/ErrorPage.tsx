"use client";
import React from "react";

type ErrorPageProps = {
  errorCode?: string;
  message?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = "404",
  message = "Page not found",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-100 text-center">
      <div className="text-6xl font-bold text-red-600">{errorCode}</div>
      <div className="text-xl text-gray-700 mt-4">{message}</div>
      <div className="mt-6">
        {/* <a href="/" className="text-blue-500 hover:underline">
          Go to Home
        </a> */}
        1234567890-
      </div>
    </div>
  );
};

export default ErrorPage;

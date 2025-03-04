import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <img
        src="/3747371.jpg"
        alt="Error Illustration"
        className="w-80 md:w-96 bg-white"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-lg mt-2">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>

      <Link to="/" className="mt-6">
        <button className="px-6 py-3 text-white bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default Error;

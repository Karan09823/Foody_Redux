import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
function Success() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>

          <button
            onClick={() => navigate("/")}
            className="m-auto px-3 py-2 w-[90vw] sm:w-[50vw] md:w-[30vw] lg:w-[21vw] bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition-all"
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
}

export default Success;

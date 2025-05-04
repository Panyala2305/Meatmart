import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MobileCartBar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-t border-t border-gray-200 p-4 flex justify-between items-center z-50 sm:hidden">
      <div className="text-sm font-semibold text-gray-700">
        {totalItems} item{totalItems > 1 ? "s" : ""} in cart
      </div>
      <button
        onClick={() => navigate("/cart")}
        className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg transition duration-300"
      >
        Order now
      </button>
    </div>
  );
};

export default MobileCartBar;

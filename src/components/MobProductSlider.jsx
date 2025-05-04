import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/reducers/cartReducer";
import { isAuthenticated } from "../utils/auth";
import { useNavigate } from 'react-router-dom';

const MobProductSlider = ({ products = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="w-full  py-6 container m-auto">
      <h2 className="text-2xl font-semibold mb-4 px-4">Chicken items</h2>

      {/* Grid layout for responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {products.map((product, index) => {
          const quantity = getItemQuantity(product.id);

          return (
            <div
              key={index}
              className="flex bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mt-1 text-base">
                    ₹{product.price}
                  </p>
                </div>

                {quantity === 0 ? (
                  <button
                    className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-transform transform hover:scale-105"
                    onClick={() => {
                                            if (!isAuthenticated()) {
                                              navigate("/login");
                                            } else {
                                              dispatch(addToCart(product));
                                            }
                                          }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="mt-3 flex items-center justify-between bg-gray-100 p-2 rounded-lg shadow-inner">
                    <button
                      title="Decrease or Remove"
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition duration-200 transform hover:scale-105"
                    >
                      −
                    </button>
                    <span className="px-3 font-semibold text-gray-700">
                      {quantity} Kg
                    </span>
                    <button
                      title="Increase Quantity"
                      onClick={() => dispatch(increaseQuantity(product.id))}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition duration-200 transform hover:scale-105"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobProductSlider;

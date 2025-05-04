import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/reducers/cartReducer";
import { isAuthenticated } from "../utils/auth";
import { useNavigate } from 'react-router-dom';
 

const ProductSlider = ({ products = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="w-full py-6 container m-auto">
      <h2 className="text-2xl font-semibold mb-4 px-4">Newly Added</h2>
      <div className="overflow-x-auto whitespace-nowrap px-4 scroll-smooth no-scrollbar">
        <div className="flex gap-4">
          {products.map((product, index) => {
            const quantity = getItemQuantity(product.id);

            return (
              <div
                key={index}
                className="w-60 flex-shrink-0 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 truncate">
                    {product.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mt-1 text-base">
                    ₹{product.price}
                  </p>

                  {/* Conditional Rendering */}
                  {quantity === 0 ? (
                    <button
                      className="mt-3 w-full bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-transform transform hover:scale-105"
                      onClick={() =>  {
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
                      <span className="px-3 font-semibold text-gray-700">{quantity} Kg</span>
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
    </div>
  );
};

export default ProductSlider;

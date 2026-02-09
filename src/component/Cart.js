import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/CartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-4 rounded-lg"
            >
              <div>
                <h3 className="font-semibold">{item.info.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.info.cuisines.join(", ")}
                </p>
              </div>

              <p className="font-medium">{item.info.costForTwo}</p>
            </div>
          ))}
        </div>
      )}

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => dispatch(removeItem())}
          className="px-4 py-2 text-red-600 border border-red-400 rounded-lg hover:bg-red-50"
        >
          Remove Last Item
        </button>

        <button
          onClick={() => dispatch(clearItem())}
          className="px-4 py-2 bg-amber-300 rounded-lg hover:bg-amber-400"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;

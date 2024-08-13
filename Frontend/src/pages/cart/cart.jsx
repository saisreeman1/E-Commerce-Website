import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./../../components/navbar";
import "./cart.css";

export const Cart = ({data}) => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(data);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <Navbar/>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

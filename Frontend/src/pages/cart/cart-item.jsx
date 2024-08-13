import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Images } from "../../Products";
export const CartItem = (props) => {
  const { id, productName, price} = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={Images[id-1].productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
const {Images}=require("../../Products")
export const Product = ({data}) => {
  const { id, productName, price} = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product" key={Images[id+11]}> 
      <img src={Images[id-1].productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

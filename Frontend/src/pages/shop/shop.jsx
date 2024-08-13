import React from "react";

import { Product } from "./product";

import "./shop.css";
import { Navbar } from "./../../components/navbar";
export const Shop = (props) => {
  var a=0;
  return (
    <div className="shop">
      <Navbar />
      <div className="shopTitle">
        <h1>SreemanTech shop</h1>
      </div>

      <div className="products" >
        {props.data.map((product) => (
          <Product data={product} key={a++}/>
        ))}
      </div>
    </div>
  );
};

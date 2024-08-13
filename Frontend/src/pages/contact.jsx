import React from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const nav=useNavigate();
  return <div onClick={()=>{nav("/shop")}}>contact</div>;
};

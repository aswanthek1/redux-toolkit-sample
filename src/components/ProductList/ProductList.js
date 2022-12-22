import React, { useEffect, useState } from "react";
import products from "../../api/products.json";
import AfterCart from "./CartButtons/AfterCart";
import BeforeCart from "./CartButtons/BeforeCart";
import "./ProductList.css";
import { useSelector } from "react-redux";
import CartButtons from "./CartButtons";

const ProductList = () => {

  const {cartCount, cartList} = useSelector(state => state.cart)


  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <section className="container">
      {products.map((product, key) => {
        return (
          <div className="product-container" key={key}>
            <img src={product?.image} alt="" />
            <h4>{product?.title}</h4>
            <CartButtons product={product}/>
          </div>
        );
      })}
    </section>
  );
};

export default ProductList;

import React from "react";
import products from "../../api/products.json";
import "./ProductList.css";
import CartButtons from "./CartButtons";

const ProductList = () => {

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

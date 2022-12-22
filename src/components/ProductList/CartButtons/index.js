import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";

const CartButtons = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);

  const cartCount = useMemo(() => {
      return cartList?.find((item) => item?.id === product?.id)?.count;
    },[])
    console.log(cartCount, "======");

  return (
    <div>
      {cartCount > 0 ? (
        <AfterCart product={product} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </div>
  );
};

export default CartButtons;

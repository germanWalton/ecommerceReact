import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContextUse } from "../context/CartContext";

const CartWidget = () => {
  const { cartProducts } = CartContextUse();
  return (
    <div className="cartContainer">
      <FaShoppingCart style={{ width:20 }} className=" me-1" />
      {cartProducts > 0 ? (
        <span className="badge bg-secondary">{cartProducts}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartWidget;

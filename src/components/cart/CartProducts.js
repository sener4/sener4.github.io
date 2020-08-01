import React from "react";
import CartItem from "./CartItem";

const CartProducts = ({ value }) => {
  return (
    <div>
      <div>
        {value.cart.map((product) => {
          return <CartItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default CartProducts;

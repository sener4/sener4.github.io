import React, { Component } from "react";

const CartTotals = ({ value }) => {
  return (
    <div className="row col-10">
      <h2>Cart total: {value.cartTotal} $</h2>
    </div>
  );
};

export default CartTotals;

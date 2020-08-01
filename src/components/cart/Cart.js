import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartProducts from "./CartProducts";
import CartTotals from "./CartTotals";

export class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            if (value.cart.length > 0) {
              return (
                <React.Fragment>
                  <CartProducts value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <h1 className="row">Cart is empty</h1>;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;

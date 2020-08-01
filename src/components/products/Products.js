import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [],
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;

import React, { Component } from "react";
import { ProductConsumer } from "../../context";

class Product extends Component {
  render() {
    const { title, img, price, id } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div class="card col-10 col-md-6 col-lg-3 mx-5 my-4">
              <img class="card-img-top" src={img} alt="Card image cap" />
              <div class="card-body">
                <div className="card-details">
                  <h5 class="card-title col-8">{title}</h5>
                  <p class="card-price col-4">{price} $</p>
                </div>
                <a
                  onClick={() => value.addProductToCart(id)}
                  class="btn btn-primary"
                >
                  Add to cart
                </a>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Product;

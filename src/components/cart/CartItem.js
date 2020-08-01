import React, { Component } from "react";
import { ProductConsumer } from "../../context";

export class CartItem extends Component {
  render() {
    const { title, img, price, count, total, id } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div class="row col-10 py-4">
              <img
                class="card-img-top col-10 col-lg-2"
                src={img}
                alt="Card image cap"
              />
              <h5 class="card-title col-10 col-lg-2">{title}</h5>
              <p class="card-price col-10 col-lg-2 ">Price: {price} $</p>
              <div className="d-flex flex-row col-10 col-lg-2 pb-3">
                <button onClick={() => value.decrement(id)}>-</button>
                <p className="mb-0 mx-2">{count}</p>
                <button onClick={() => value.increment(id)}>+</button>
              </div>
              <button onClick={() => value.removeItem(id)}>
                <i class="fas fa-trash col-10 col-lg-2 pb-3"></i>
              </button>
              <p className="col-10 col-lg-2">Product total: {total} $</p>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartItem;

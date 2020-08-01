import React, { Component } from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    productTotalPrice: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  filterProducts = (category, subcategory) => {
    let products = [];
    storeProducts.forEach((item) => {
      if (item.category === category && item.subcategory === subcategory) {
        const singleItem = { ...item };
        products = [...products, singleItem];
      }
    });
    this.setState(() => {
      return { products };
    });
  };

  getProductId = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  addProductToCart = (id) => {
    var cartProducts = [];
    const product = this.getProductId(id);
    product.count = 1;
    cartProducts = [...this.state.cart, product];
    product.total = product.price;

    this.setState(
      () => {
        return {
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getProductId(id));

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let total = 0;
    this.state.cart.map((item) => (total += item.total));
    this.setState(() => {
      return { cartTotal: total };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          filterProducts: this.filterProducts,
          addProductToCart: this.addProductToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

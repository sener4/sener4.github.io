import React from "react";
import "./styles/style.scss";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

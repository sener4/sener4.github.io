import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse text-uppercase"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    men
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      to="/"
                      onClick={() => value.filterProducts("men", "shoes")}
                      className="dropdown-item"
                    >
                      shoes
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/"
                      onClick={() => value.filterProducts("men", "shirts")}
                      className="dropdown-item"
                    >
                      shirts
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/"
                      onClick={() => value.filterProducts("men", "shorts")}
                      className="dropdown-item"
                    >
                      shorts
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    women
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={() => value.filterProducts("women", "shoes")}
                    >
                      shoes
                    </Link>{" "}
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={() => value.filterProducts("women", "shirts")}
                    >
                      shirts
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={() => value.filterProducts("women", "shorts")}
                    >
                      shorts
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    kids
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={() => value.filterProducts("kid", "shoes")}
                    >
                      shoes
                    </Link>{" "}
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={() => value.filterProducts("kid", "shirts")}
                    >
                      shirts
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={() => value.filterProducts("kid", "shorts")}
                    >
                      shorts
                    </Link>
                  </div>
                </li>{" "}
                <li class="nav-item">
                  <Link to="/cart" class="nav-link" href="#">
                    cart
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </nav>
        )}
      </ProductConsumer>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import Cart from "./components/Cart/Cart.js";
import Details from "./components/Details.js";
import ProductList from "./components/ProductList";
import Default from "./components/Default.js";
import Modal from "./components/Modal.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={ProductList} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;

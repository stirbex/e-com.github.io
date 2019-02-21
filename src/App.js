import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Cart from './components/Cart.js';
import Default from './components/Default.js';
import Details from './components/Details.js';
import ProductList from './components/ProductList.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

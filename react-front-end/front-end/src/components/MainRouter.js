import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { AddProduct } from './AddProduct';

export class MainRouter extends Component {

  render() {
    const isLogged = this.props.isLogged;
    if (isLogged) {
      return (
        <Router>
          <Switch>
            <nav>
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/ProductList">List of Products</Link>
                </li>
                <li>
                  <Link to="/AddProduct">Add a Product</Link>
                </li>
              </ul>
            </nav>
            <Route path='/Home'>
              <Home/>
            </Route>
            <Route path='/ProductList'>
              <ProductList/>
            </Route>
            <Route>
              <AddProduct/>
            </Route>
          </Switch>
        </Router>

      );
    }
  }
}

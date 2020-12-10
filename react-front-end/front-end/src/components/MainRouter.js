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
    const products = this.props.products;
    const isAdmin = this.props.isAdmin;
    if (isLogged) {
      return (
        LoggedNav(products, isAdmin, isLogged)
      );
    }
    else {
      return NotLoggedNav(products)
    }
  }
}

function LoggedNav(products, isAdmin, isLogged) {
  if (isAdmin) {
    return (
      <Router>
        <div>
          <header>
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
          </header>

          {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Home">
              <Home products={products} isLogged={isLogged} isAdmin={isAdmin} />
            </Route>
            <Route path="/ProductList">
              <ProductList products={products} isLogged={isLogged} isAdmin={isAdmin} />
            </Route>
            <Route path="/AddProduct">
              <AddProduct />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  else {
    loggedAdminNav(products, isLogged, isAdmin)
  }
}

function loggedAdminNav(products, isLogged, isAdmin) {
  return (
    <Router>
      <div>
        <header>
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
        </header>

        {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home products={products} isLogged={isLogged} isAdmin={isAdmin} />
          </Route>
          <Route path="/ProductList">
            <ProductList products={products} isLogged={isLogged} isAdmin={isAdmin} />
          </Route>
          <Route path="/AddProduct">
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function NotLoggedNav(products) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/ProductList">Products</Link>
            </li>
            <li>
              <Link to="/LoginForm">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home products={products} />
          </Route>
          <Route path="/ProductList">
            <ProductList products={products} />
          </Route>
          <Route path="/LoginForm">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
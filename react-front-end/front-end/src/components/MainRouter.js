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

export class MainRouter extends Component {

    render() {
        const isLogged = this.props.isLogged;
        const products = this.props.products;
        console.log(isLogged);
        console.log(products);
        if(!isLogged){
            return (
                NotLoggedNav(products)
            );
        }
        else{
            return(
                LoggedNav()
            );
        }
        
    }
}

function LoggedNav(){
    return(
    <Router>
            <div>
              <header>
                <ul>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to="/ProductList">Products</Link>
                  </li>
                  <li>
                    <Link to="/LogoutForm">Logout</Link>
                  </li>
                </ul>
              </header>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/Home">
                  <Home />
                </Route>
                <Route path="/ProductList">
                  <ProductList />
                </Route>
                {/* <Route path="/LogoutForm">
                  <LogoutForm />
                </Route> */}
              </Switch>
            </div>
          </Router>
    );
}

function NotLoggedNav(products){
    return(
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
                  <Home products={products}/>
                </Route>
                <Route path="/ProductList">
                  <ProductList products={products}/>
                </Route>
                <Route path="/LoginForm">
                  <LoginForm />
                </Route>
              </Switch>
            </div>
          </Router>
    );
}
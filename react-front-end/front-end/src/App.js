import './App.css';
import React, { Component } from 'react';
import { MainRouter } from './components/MainRouter';
import { ProductDetail } from './components/ProductDetail';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { AddProduct } from './components/AddProduct';
import { ProductList } from './components/ProductList'


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
      isAdmin: true,
      products: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/products').then(res => (
      this.setState({
        products: res.data
      })
    ))
  }

  render() {
    localStorage.setItem('cart', this.state.cart);
    return (
      <Router>
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
        <Switch>
          <Route path='/' exact>
            <Home isLogged={this.state.isLogged} isAdmin={this.state.isAdmin} products={this.state.products} />
          </Route>
          <Route path='/Home' exact>
            <Home isLogged={this.state.isLogged} isAdmin={this.state.isAdmin} products={this.state.products} />
          </Route>
          <Route path='/AddProduct' exact>
            <AddProduct />
          </Route>
          <Route path='/ProductList' exact>
            <ProductList products={this.state.products} isLogged={this.state.isLogged} isAdmin={this.state.isAdmin} />
          </Route>
          {this.state.products.map(p => (
            <Route path={'/ProductDetail/' + p.id} exact>
              {console.log(p)}
              <ProductDetail product={p} />
            </Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

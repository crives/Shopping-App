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


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
      isAdmin: true,
      products: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:4000/products').then(res=>(
      this.setState({
        products:res.data
      })
    ))
  }

  render() {
    localStorage.setItem('cart', this.state.cart);
    this.state.products.map(p => (
      p.Link = (
        <ProductDetail product={p} />
      )
    ));
    return (
      <div>
        <Router>
          <Switch>
            <div>
            {/* <MainRouter isLogged={this.state.isLogged} isAdmin={this.state.isAdmin} /> */}
              <Home products={this.state.products} isLogged={this.state.isLogged} isAdmin={this.state.isAdmin}/>
            </div>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

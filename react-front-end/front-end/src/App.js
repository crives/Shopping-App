import './App.css';
import React, { Component } from 'react';
import { MainRouter } from './components/MainRouter';
import { ProductDetail } from './components/ProductDetail';
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
        {/* add in <Home with props /> as separate component, change MainRouter(?) */}
        <MainRouter isLogged={this.state.isLogged} products={this.state.products} isAdmin={this.state.isAdmin}/>
      </div>
    );
  }
}

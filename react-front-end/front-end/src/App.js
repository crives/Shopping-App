import './App.css';
import React, { Component } from 'react';
import { MainRouter } from './components/MainRouter';
import Test from "./pictures/Test.jpg";
import Test2 from "./pictures/Test2.png";
import Test3 from "./pictures/Test3.jpg";

var product1 = { image: Test, name: 'sofa', price: 10.20, Link: '/#' }
var product2 = { image: Test2, name: 'chair', price: 30.20 , Link: '/#' }
var product3 = { image: Test3, name: 'recliner', price: 50.20, Link: '/ProductDetail' }

export class App extends Component {

  constructor(props){
    super(props);
    this.state={
      isLogged:false,
      products: [product1, product2, product3]
    };
  }

  render() {
    return (
      <div>
        <MainRouter isLogged={this.state.isLogged} products={this.state.products} />
      </div>
    );
  }
}

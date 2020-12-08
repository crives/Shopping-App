import './App.css';
import React, { Component } from 'react';
import { MainRouter } from './components/MainRouter';
import Test from "./pictures/Test.jpg";
import Test2 from "./pictures/Test2.png";
import Test3 from "./pictures/Test3.jpg";
import { ProductDetail } from './components/ProductDetail';

var product1 = { id: 1, image: Test, name: 'sofa', price: 10.20 }
var product2 = { id: 2, image: Test2, name: 'chair', price: 30.20 }
var product3 = { id: 3, image: Test3, name: 'recliner', price: 50.20 }

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
      isAdmin:true,
      products: [product1, product2, product3]
    };
  }
  render() {
    this.state.products.map(p => (
      p.Link = (
        <ProductDetail product={p} />
      )
    ));
    console.log(this.state.products);
    return (
      <div>
        <MainRouter isLogged={this.state.isLogged} products={this.state.products} isAdmin={this.state.isAdmin}/>
      </div>
    );
  }
}

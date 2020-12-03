import React, { Component } from 'react';
import "./common.css";
import Test from "../pictures/Test.jpg";
import Test2 from "../pictures/Test2.png";
import Test3 from "../pictures/Test3.jpg";
import { Img } from "react-image";
import { ProductDetail } from './ProductDetail';

var product1 = { image: Test, name: 'sofa', price: 10.20, Link: '/ProductDetail' }
var product2 = { image: Test2, name: 'chair', price: 30.20 , Link: '/ProductDetail' }
var product3 = { image: Test3, name: 'recliner', price: 50.20, Link: '/ProductDetail' }

export class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            products: [product1, product2, product3]
        }
    }
    render() {
        return (
            <div>
                <div className="welcome">
                    <h1>Welcome!</h1>
                </div>
                <div>
                    {this.state.products.map(product => (
                        <a>
                            <div>
                                <div><Img src={product.image} /></div>
                                <div><h2>{product.name}</h2></div>
                                <div><p>{product.price}</p></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
}
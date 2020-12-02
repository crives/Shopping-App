import React, { Component } from 'react';
import "./common.css";
import Test from "../pictures/Test.jpg";
import Test2 from "../pictures/Test2.png";
import Test3 from "../pictures/Test3.jpg";
import { Img } from "react-image";

var product1 = { image: Test, name: 'sofa', price: 10.20, Link: '/#' }
var product2 = { image: Test2, name: 'chair', price: 30.20 , Link: '/#' }
var product3 = { image: Test3, name: 'recliner', price: 50.20, Link: '/#' }

export class Home extends Component {
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
                        <a href={product.Link}>
                            <div className="card">
                                <div className="thumbnail"><Img src={product.image} /></div>
                                <div className="item-title"><h2>{product.name}</h2></div>
                                <div className="price"><p>{product.price}</p></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";

export class ProductDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            product: this.props.product
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Product Detail</h3>
                    <p>Get to know a little about your product:</p>
                </div>
                <div>
                    <div>
                        <Img src={this.state.product.picture} />
                        <h2>{this.state.product.name}</h2>
                        <p>Price: {this.state.product.price}</p>
                        <p>In Stock: {this.state.product.stock}</p>
                    </div>
                    <button onSubmit={this.submitHandler}>Add to Cart</button>
                </div>
            </div>
        );
    }

    //fix the routing and/or issue with product detail/productlist components
    submitHandler = e=>{
        e.preventDefault();
        let cart = [localStorage.getItem('cart')];
        cart.push(this.state.product);
        localStorage.setItem('cart', cart);
        for(let i = 0; i <cart; i++){
            console.log(cart[i]);
        }
        
    }
}


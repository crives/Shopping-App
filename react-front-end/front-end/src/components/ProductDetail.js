import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";

export class ProductDetail extends Component {

    render() {
        var product = this.props.product;
        return (
            <div>
                <div>
                    <h3>Product Detail</h3>
                    <p>Get to know a little about your product:</p>
                </div>
                <div>
                    <div>
                        <Img src={product.image} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
        );
    }
}

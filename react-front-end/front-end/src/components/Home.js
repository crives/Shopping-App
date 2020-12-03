import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";


export class Home extends Component {
    render() {
        const products = this.props.products;
        return (
            <div>
                <div className="welcome">
                    <h1>Welcome!</h1>
                </div>
                <div>
                    {products.map(product => (
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
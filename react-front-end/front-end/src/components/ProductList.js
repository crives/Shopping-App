import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";

export class ProductList extends Component {

    render() {
        const products = this.props.products;
        return (
            <div>
                <div className="producttitle">
                    <h1>Product List</h1>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Product Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {products.map(product => (
                            <tbody>
                                <tr>
                                    <td><Img src={product.image} className="productlist thumbnail" /></td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td></tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        )
    }
}
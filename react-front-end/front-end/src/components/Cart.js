import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    render() {
        if (this.state.cart === null) {
            return CartEmpty();
        }
        else {
            return CartPopulated();
        }
    }
    changeHandler = e => {
        this.setState({
            cart:this.state.cart.filter(function (c){
                return c !== e.target.value
            })
        });
    }
}

function CartPopulated() {
    var totalPrice = 0;
    var c = [];
    c.push(this.state.cart);
    return (
        <div>
            <div>
                <h1>Cart</h1>
            </div>
            <div>
                <p>All items added to the cart will appear here</p>
            </div>
            <div>
                <div><button type='button'>Clear Cart</button></div>
                <div><button type='button'>Check out</button></div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    {c.map(product => (
                        <tbody>
                            <tr>
                                <td><Img src={product.image} className="productlist thumbnail" /></td>
                                <td><Link to={'/ProductDetail/' + product.id}>{product.name}</Link></td>
                                <td>{product.price}<span>{totalPrice += product.price}</span></td>
                                <td>{product.stock}</td>
                                <td><button type='button'>Remove from Cart</button></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <p>Grand Total: {totalPrice}</p>
            </div>
        </div>
    )
}

function CartEmpty() {
    return (
        <div>
            <div>
                <h1>Cart</h1>
            </div>
            <div>
                <p>Your shopping cart is currently empty</p>
                <p>Add some items to your cart!</p>
            </div>
        </div>
    )
}


import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";

export class EditProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A product was revised: ' + this.state.product.name);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ product: event.target.product });
    }

    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <div>
                    <h3>Current Product</h3>
                    <p>Time to mix some specs up</p>
                </div>
                <div>
                    <div>
                        <label for='productPrice'>Product Image: </label>
                        <Img src={this.state.product.image} name='productImage' />
                    </div>
                    <div>
                        <label for='productName'>Product Name:</label>
                        <input type='text' value={this.state.product.name} name='productName' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for='productPrice'>Product Price:</label>
                        <input type='text' value={this.state.product.price} name='productPrice' onChange={this.handleChange}/>
                    </div>
                    <button type='submit'>Confirm Changes</button>
                </div>
            </div>
        );
    }
}


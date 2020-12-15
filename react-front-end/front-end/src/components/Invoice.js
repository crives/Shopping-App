import React, { Component } from 'react';
import "./common.css";

export class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    render() {
        const items = this.state.items;
        return (
            <div>
                <div>
                    <h1>Invoice</h1>
                    <p>Thank you for shopping with Project 4</p>
                </div>
                <table>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {items.map(item => (
                            <tbody>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </table>
            </div>
        )
    }
}




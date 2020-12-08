import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { AddProduct } from './AddProduct';

export class ProductList extends Component {

    render() {
        const products = this.props.products;
        const isLogged = this.props.isLogged;
        const isAdmin = this.props.isAdmin;
        if (isAdmin && isLogged) {
            return AdminView(products);
        }
        else {
            return RegUserView(products);
        }
    }
}

function RegUserView(products) {
    /* View for those logged in but not admin OR for those not logged in */
    /* Default View */
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
                            <Router>
                                <tr>
                                    <td><Img src={product.image} className="productlist thumbnail" /></td>
                                    <td><Link to="/ProductDetail">{product.name}</Link></td>
                                    <td>{product.price}</td></tr>
                                <Switch>
                                    <Route path="/ProductDetail">
                                        <ProductDetail product={product} />
                                    </Route>
                                </Switch>
                            </Router>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
}

function AdminView(products) {
    /* View for logged in admins  */
    return (
        <Router>
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
                                    <td><Link to={'/ProductDetail/' + product.id}>{product.name}</Link></td>
                                    <td>{product.price}</td>
                                </tr>
                                <Switch>
                                    <Route path={'/ProductDetail/' + product.id}>
                                        <ProductDetail product={product} />
                                    </Route>
                                </Switch>

                            </tbody>
                        ))}
                    </table>
                    <Link to='/AddProduct'><button>Add Product</button></Link>
                    <Switch>
                        <Route path='/AddProduct'>
                            <AddProduct/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
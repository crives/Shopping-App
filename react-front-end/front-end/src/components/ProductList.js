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
import { EditProduct } from './EditProduct';
import axios from 'axios';

export class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            isLogged: this.props.isLogged,
            isAdmin: this.props.isAdmin
        }
    }
    

    render() {
        if (this.state.isAdmin && this.state.isLogged) {
            return AdminView(this.state.products);
        }
        else {
            return RegUserView(this.state.products);
        }
    }
}

//delete doesnt work
/* deleteProduct = (id) => {
    axios.delete('http://localhost:4000/product/:' + id, id).then(res => {
        console.log(res)
    })
} */

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
                                <th>Stock</th>
                            </tr>
                        </thead>
                        {products.map(product => (
                            <tbody>
                                <tr>
                                    <td><Img src={product.image} className="productlist thumbnail" /></td>
                                    <td><Link to={'/ProductDetail/' + product.id}>{product.name}</Link></td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td><button><Link to={'/EditProduct/' + product.id}>Edit Product</Link></button></td>
                                    <td><button /* onClick={this.deleteProduct} */>Delete Product</button></td> {/* doesnt work yet */}
                                </tr>
                                <Switch>
                                    <Route path={'/EditProduct/' + product.id}>
                                        <EditProduct product={product} />
                                    </Route>
                                </Switch>

                            </tbody>
                        ))}
                    </table>
                    <Link to='/AddProduct'><button>Add Product</button></Link>
                    <Switch>
                        <Route path='/AddProduct'>
                            <AddProduct />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ProductDetail } from './ProductDetail';
import { MainRouter } from './MainRouter';
import { ProductList } from './ProductList';

export class Home extends Component {

    assignProduct = e => ({
        p: e
    });

    render() {
        const isLogged = this.props.isLogged;
        const products = this.props.products;
        const isAdmin = this.props.isAdmin;
        var p = "";
        return (
            <Router>

                <div className="welcome">
                    <h1>Welcome!</h1>
                </div>
                <body>
                    <div>
                        {products.map(product => (
                            <div>
                                <div className="card">
                                    <Link to={'/ProductDetail/' + product.id} onClick={this.assignProduct}>
                                        <div className="thumbnail"><Img src={product.image} /></div>
                                        <div className="item-title"><h2>{product.name}</h2></div>
                                        <div className="price"><p>{product.price}</p></div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <Switch>
                            {products.map(p => (
                                <Route path={'/ProductDetail/' + p.id} exact>
                                    <ProductDetail product={p} />
                                </Route>
                            ))}
                        </Switch>
                    </div>
                </body>

            </Router>
        )
    }
}
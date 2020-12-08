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

export class Home extends Component {
    render() {
        const products = this.props.products;
        return (
            <Router>
                <div>
                    <div className="welcome">
                        <h1>Welcome!</h1>
                    </div>
                    <body>
                        {products.map(product => (
                            <div>
                                <div className="card">
                                    <Link to={'/ProductDetail/' + product.id}>
                                        <div className="thumbnail"><Img src={product.image} /></div>
                                        <div className="item-title"><h2>{product.name}</h2></div>
                                        <div className="price"><p>{product.price}</p></div>
                                    </Link>
                                </div>
                                <Switch>
                                    <Route path={'/ProductDetail/' + product.id}>
                                        <ProductDetail product={product} />
                                    </Route>
                                </Switch>
                            </div>
                        ))}

                    </body>
                </div>
            </Router>
        )
    }
}
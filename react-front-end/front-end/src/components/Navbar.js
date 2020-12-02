import React, { Component } from 'react';
import "./common.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginForm } from './LoginForm';
import { Home } from './Home';

export class Navbar extends Component {
    render() {
        const isLogged = this.props.isLogged;
        console.log(isLogged);
        if (isLogged) {
            return LoggedHeader();
        }
        else {
            return NotLoggedHeader();
        }
    }
}

function LoggedHeader() {
    return (
        <Router>
            <header>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Products">Products</a></li>
                    <li><a href="#MyAccount">Account</a></li>
                    <li><a href="#Logout">Logout</a></li>
                </ul>
                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    {/* <Route path="/Products">
                        <Products />
                    </Route> */}
                    {/* <Route path="/Account">
                        <Account />
                    </Route>
                    <Route path="/Logout">
                        <Logout/>
                    </Route> */}
                </Switch>
            </header>
        </Router>
    )
}

function NotLoggedHeader() {
    return (

        <header>

            <Router>
                <ul><div id="company">
                Project Four JUMPlus - Ecommerce Series
                </div>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/LoginForm">Login</Link></li>
                </ul>
                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    {/* <Route path="/Products">
                        <Products />
                    </Route> */}
                    <Route path="/LoginForm">
                        <LoginForm />
                    </Route>
                </Switch>
            </Router>
        </header>

    );
}

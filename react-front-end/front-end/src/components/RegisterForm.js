import React, { Component } from 'react';
import "./common.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginForm } from "./LoginForm";

export class RegisterForm extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <form>
                        <div>
                            <label for="userNameText">Please enter a User Name: </label>
                            <input type="text" id="userNameText" name="userNameText" />

                            <label for="userPassText">Please enter a Password: </label>
                            <input type="text" id="userPassText" name="userPassText" />
                        </div>
                        <div>
                            <button type="submit" id="submitButton">Register</button>
                        </div>
                        <div>
                            <p>Already have an account? Login <Link to="/LoginForm">here</Link></p>
                        </div>
                        {/* this route repeats the form. work on placement */}
                        <Route path='/LoginForm'>
                            <LoginForm />
                        </Route>
                    </form>
                </Switch>
            </Router>
        );
    }
}


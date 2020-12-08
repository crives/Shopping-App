import React, { Component } from 'react';
import "./common.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { RegisterForm } from './RegisterForm';

export class LoginForm extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <form>
                        <div>
                            <label for="userNameText">User Name: </label>
                            <input type="text" id="userNameText" name="userNameText" /><br></br>

                            <label for="userPassText">Password: </label>
                            <input type="text" id="userPassText" name="userPassText" /><br></br>
                        </div>
                        <div>
                            <button type="submit" id="submitButton">Login</button>
                        </div>
                        <div>
                            <p>Don't have an account? Register <Link to="/RegisterForm">here</Link></p>
                        </div>
                        {/* this route repeats the form. work on placement */}
                        <Route path='/RegisterForm'>
                            <RegisterForm />
                        </Route>
                    </form>
                    
                </Switch>
            </Router>
        );
    }
}


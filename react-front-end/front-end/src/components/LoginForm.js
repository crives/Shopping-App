import React, { Component } from 'react';
import "./common.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { RegisterForm } from './RegisterForm';
import axios from 'axios';

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    submitHandler = e => {
        e.preventDefault();
        const postUrl = 'http://localhost:4000/users/authenticate'
        console.log(this.state);
        axios.post(postUrl, this.state).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label for="userName">User Name: </label>
                    <input type="text" id="userName" name="userName" onChange={this.changeHandler} />

                    <label for="password">Password: </label>
                    <input type="text" id="password" name="password" onChange={this.changeHandler} />
                </div>
                <div>
                    <button type="submit" id="submitButton">Login</button>
                </div>
                <div>
                    <p>Don't have an account? Register <Link to="/RegisterForm">here</Link></p>
                </div>
                {/* this route repeats the form. work on placement */}
                <Router>
                    <Switch>
                        <Route path='/RegisterForm'>
                            <RegisterForm />
                        </Route>
                    </Switch>
                </Router>
            </form>
        );
    }
}


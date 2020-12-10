import React, { Component } from 'react';
import "./common.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginForm } from "./LoginForm";
import axios from 'axios';

export class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    render() {
        return (
            /* This form is not submitting, but placing the control responses in url instead */
            <Router ><Switch>
                <form onSubmit={this.submitHandler}>
                
                    <div>
                        <label for="userName">Please enter a User Name: </label>
                        <input type="text" name="userName" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label for="password">Please enter a Password: </label>
                        <input type="text" name="password" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label for="firstName">Please enter your First Name: </label>
                        <input type="text" name="firstName" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label for="lastName">Please enter your Last Name: </label>
                        <input type="text" name="lastName" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label for="email">Please enter a valid email address: </label>
                        <input type="text" name="email" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                    <div>
                        <p>Already have an account? Login <Link to="/LoginForm">here</Link></p>
                    </div>
                    {/* this route repeats the form. work on placement */}
                    
                        <Route path='/LoginForm'>
                            <LoginForm />
                        </Route>
                    
                
            </form></Switch></Router>
        );
    }

    submitHandler = e => {
        e.preventDefault();
        const postUrl = 'http://localhost:4000/users/register'
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
}


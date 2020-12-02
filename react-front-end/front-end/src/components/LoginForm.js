import React, { Component } from 'react';
import "./common.css";

export class LoginForm extends Component {
    render() {
        return (
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
                    <p>Don't have an account? Register <a href="#">here</a></p>
                </div>
            </form>
        );
    }
}


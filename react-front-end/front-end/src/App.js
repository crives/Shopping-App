import './App.css';
import { Navbar } from "./components/Navbar";
import React, { Component } from 'react';

export class App extends Component {

  constructor(props){
    super(props);
    this.state={
      isLogged:false
    };
  }

  render() {
    return (
      <div>
        <Navbar isLogged={this.state.isLogged} />
      </div>
    );
  }
}

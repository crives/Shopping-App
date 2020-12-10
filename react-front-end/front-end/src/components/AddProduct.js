import React, { Component } from 'react';
import "./common.css";
import  axios from "axios";

export class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: Number,
            picture: File,
            stock: Number
        }
    }

    fileSelectedHandler = event => {
        this.setState({
            picture: event.target.files[0]
        })
    }

    /* fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.picture, this.state.picture.name);
        //axios.post('url post link here',fd, onUpLoadProgress: progressEvent=>{console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total* 100) + '%')}).then(res => {console.log(res);});
    } */

    //doesnt work with images, need to update on the backend?
    submitHandler = e => {
        e.preventDefault();
        const postUrl = 'http://localhost:4000/products/add'
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
        })
    }

    render() {
        const {name, description, price, stock} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label for="name">Product Name: </label>
                    <input type="text" name="name" value={name} onChange={this.changeHandler} />
                </div>
                <div>
                    <label for="description">Project Description</label>
                    <textarea name="description" value={description} onChange={this.changeHandler}></textarea>
                </div>
                <div>
                    <label for="price">Item Price: </label>
                    <input type="text" name="price" value={price} onChange={this.changeHandler} />
                </div>
                <div>
                    <label for="stock">Units in Stock: </label>
                    <input type="text" name="stock" value={stock} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type='file' onChange={this.fileSelectedHandler} />
                    <button /* onClick={this.fileUploadHandler} */>Upload</button> {/* to be used for post requests */}
                </div>
                <div>
                    <button type="submit" id="submitButton">Add Product</button>
                    <button id="cancelButton">Cancel</button>
                </div>
            </form>
        );
    }
}


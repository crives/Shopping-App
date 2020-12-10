import React, { Component } from 'react';
import "./common.css";
import { Img } from "react-image";
import axios from 'axios';

export class EditProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
            pictures: []
        }
    }

    fileSelectedHandler = event => {
        this.setState({
            pictures: event.target.files[0]
        })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler() {
        let id = this.state.product.id;
        const putUrl = 'http://localhost:4000/products/:' + id;
        console.log(putUrl);
        axios.put(putUrl, this.state).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error);
        });
    }

    //to be usued with upload button
    /* fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.pictures, this.state.pictures.name);
        //look into PUT request, not POST (post ex below)
        //axios.post('url post link here',fd, onUpLoadProgress: progressEvent=>{console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total* 100) + '%')}).then(res => {console.log(res);});
    } */

    render() {
        return (
            <div onSubmit={this.submitHandler}>
                <div>
                    <h3>Current Product</h3>
                    <p>Time to mix some specs up</p>
                </div>
                <div>
                    <div>
                        <label for='productImage'>Product Image: </label>
                        <Img src={this.state.product.image} name='productImage' />
                        <input type='file' onChange={this.fileSelectedHandler} />
                        <button /* onClick={this.fileUploadHandler} */>Upload</button> {/* to be used for update requests - empty right now */}
                    </div>
                    <div>
                        <p>Previous Product Name: {this.state.product.name}</p>
                        <label for='name'>Product Name: </label>
                        <input type='text' name='name' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <p>Previous Description: {this.state.product.description}</p>
                        <label for="description">Project Description</label>
                        <textarea name="description" onChange={this.changeHandler}></textarea>
                    </div>
                    <div>
                        <p>Previous Product Price: {this.state.product.price}</p>
                        <label for='price'>Product Price: </label>
                        <input type='text' name='price' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <p>Previous Stock: {this.state.product.stock}</p>
                        <label for='stock'>Stock: </label>
                        <input type='text' name='stock' onChange={this.changeHandler} />
                    </div>
                    <button type='submit'>Confirm Changes</button>
                </div>
            </div>
        );
    }
}


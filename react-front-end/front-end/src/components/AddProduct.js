import React, { Component } from 'react';
import "./common.css";
import { ImageUploader } from "react-images-upload";

export class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [], products: this.props.products }
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        });
    }

    render() {
        return (
            <form>
                <div>
                    <label for="productNameText">Product Name: </label>
                    <input type="text" id="productNameText" name="productNameText" />
                </div>

                <div>
                    <label for="categoryText">Item Category: </label>
                    <input type="text" id="categoryText" name="categoryText" />
                </div>
                <div>
                    <label for="productDescripArea">Project Description</label>
                    <textarea id="productDescripArea" name="productDescripArea"></textarea>
                </div>
                <div>
                    <label for="priceText">Item Price: </label>
                    <input type="text" id="priceText" name="priceText" />
                </div>
                <div>
                    <label for="stockText">Units in Stock: </label>
                    <input type="text" id="stockText" name="stockText" />
                </div>
                {/* <div>
                    <ImageUploader withIcon={true} buttonText='Choose Image' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png']} maxFileSize={5242880} />
                </div> */}
                <div>
                    <button type="submit" id="submitButton">Add Product</button>
                    <button id="cancelButton">Cancel</button>
                </div>
            </form>
        );
    }
}


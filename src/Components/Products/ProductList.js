import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class ProductList extends Component {
    constructor(){
        super();
        this.state = {
            productz: []
        }
    }

    componentDidMount(){
        axios.get('/api/allproductz').then(res => {
            console.log(res.data);
            this.setState({
                productz: res.data
            })
        })
    }

    render(){
        const displayProducts = this.state.productz.map(product => {
            return <Product product={product}/>
        })
        return (
            <div>{displayProducts}</div>
        )
    }
}

export default ProductList;
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Product(props){
    const { product } = props;
    const addToCart = (product) => {
        console.log(product)
        axios.post('/api/cart', {img: product.name, name: product.img, price: product.price, id: product.id}).then(res => {
            console.log(res.data)
        })
    }
    return (
        <div style={{
            border: '5px solid black',
            margin: 10
        }}>
            <h3>{product.img}</h3>
            <img src={product.name} style={{
                maxHeight: 200,
                maxWidth: 200,
            }}/>
            <br />
            ${product.price}
            <Link to={`/product/${product.id}`}><button>View Details</button></Link>
            <button onClick={() => addToCart(product)}>Add To Cart!</button>
        </div>
    )
}

export default Product;
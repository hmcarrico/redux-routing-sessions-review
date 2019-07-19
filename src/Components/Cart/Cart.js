import React, { Component } from 'react';
import axios from 'axios';
import store from '../../ducks/store';

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        axios.get('/api/cart').then(res => {
            store.dispatch({
                type: 'UPDATE_CART',
                payload: res.data
            })
            const reduxCart = store.getState()
            this.setState({
                cart: reduxCart.cart
            })
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.cart.map(product => {
                        return <div>    
                            <h1>{product.name}</h1>
                            <img src={product.img} style={{
                                maxHeight: 200,
                                maxWidth: 200,
                            }}/>
                            <br />
                            ${product.price}
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Cart;
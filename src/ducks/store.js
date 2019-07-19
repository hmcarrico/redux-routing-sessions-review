import {createStore} from 'redux';

const initialState = {
    cart: ['hello']
};

export const UPDATE_CART = 'UPDATE_CART';

function cartTracker(state = initialState, action){
    switch(action.type){
        case UPDATE_CART:
            return { cart: action.payload }
        default: return state
    }
}



export default createStore(cartTracker);
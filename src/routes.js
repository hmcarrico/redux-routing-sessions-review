import React from 'react'
import {Switch, Route} from 'react-router-dom';
// Components
import ProductList from './Components/Products/ProductList';
import DetailedProduct from './Components/Products/DetailedProduct'
import Cart from './Components/Cart/Cart';

export default <Switch>
    <Route exact path='/' component={ProductList}/>
    <Route path='/product/:id' component={DetailedProduct} />
    <Route path='/cart' component={Cart}/>
</Switch>
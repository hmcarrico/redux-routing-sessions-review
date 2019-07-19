import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <div>
            <Link to='/cart'><button>Cart</button></Link>
            <Link to='/'><button>Browse</button></Link>
        </div>
    )
}

export default Header;
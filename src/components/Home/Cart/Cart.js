import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart-container'>
           <h3>Course Summary</h3>
           <h4>select items: {cart.length}</h4>
        </div>
    );
};

export default Cart;
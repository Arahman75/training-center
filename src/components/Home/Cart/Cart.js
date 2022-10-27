import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const {cart} = props;
   let total = 0;
   

   for(const course of cart){
total  = total + course.price;

   }
   const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + tax;
    return (
        <div className='cart-container'>
           <h3>Course Summary</h3>
           <h4>Select Course = {cart.length}</h4>
           <h5>Total Price = ${total}</h5>
           <h5>Tax = ${tax}</h5>
           <h5>Grand Total = ${grandTotal}</h5>
{props.children}
        </div>
    );
};

export default Cart;
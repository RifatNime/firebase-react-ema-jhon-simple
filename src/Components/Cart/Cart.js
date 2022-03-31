import React, { useState } from 'react';

import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    // const [cart, setCart] = useState([]);
    
    // console.log('clicked'.cart)
    // console.log(props.children);
    let quantity = 0;
    let total = 0;
    let shipping =0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    // const tax = (total * 0.1).toFixed(2); string so
    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Items Total Quantity: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            {props.children}
            {/* <div className='btn'>
                <button onClick={() => props.clearCart()}  id='btn1'>Clear Cart <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                <button  onClick={props.confirmOrder}  id='btn2'>Review Order <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></button>
            </div> */}
        </div>
    );
};
 
export default Cart;
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import {deleteShoppingCart } from '../../utilities/fakedb';

const Orders = (props) => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    //state jekhane event handller sekhane add korte hobe
    const navigate = useNavigate();

    const handleRemoveProduct = product => {

        //oita bade baki gula ke seletec kore delete korbo
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }

    const clearCart = (id) => {
        setCart([]);
        deleteShoppingCart(id);
    }

    return (
        <div className='shop-container'>

            <div className="review-items-container">
                <h1 >Shopping Cart</h1>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    // key={cart.id}
                    cart={cart}>
                    <div className='btn'>
                        <button onClick={() => clearCart()} id='btn1'>Clear Cart <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                        <button onClick={() => navigate("/inventory")} id='btn2'>Proceed Checkout <FontAwesomeIcon className='icon' icon={faIdCard}></FontAwesomeIcon></button>
                    </div>

                    {/* <Link to='/inventory' >
                        <button id='btn2' >Proceed Checkout <FontAwesomeIcon className='icon' icon={faIdCard}></FontAwesomeIcon></button>
                    </Link> */}
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
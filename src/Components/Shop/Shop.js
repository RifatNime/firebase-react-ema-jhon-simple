import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //data load from array and state jekhane event handaler sekhane
    const [products, setProducts] = useState([]);
    //cart state declare and change will occur here
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    //event handler add to cart
    const handleAddToCart = (product) =>{
        // console.log('clicked',product)
        // cart.push(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
                                //perameter products use korte hobe nahole loop a asbe na

    const [cart, setCart] = useState([]);

    useEffect( () => {

        const storedCart = getStoredCart();
        const savedCart = [];

        for(const id in storedCart){

            const addedProduct = products.find(product => product.id === id);

            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);           //[] te push
            }

            setCart(savedCart);
        }
    }, [products]);
                                //dependancy dite products dite hobe

    return [cart, setCart]
                                //age jekhan theke call korbo mill rakhte
}

export default useCart;
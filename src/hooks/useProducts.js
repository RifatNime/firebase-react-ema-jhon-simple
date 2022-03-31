import { useEffect, useState } from "react"

const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            });

    }, []);
    // } , [products]);


    return [products, setProducts];
    //by default js the 1 ta jinis return korte pari amra tai array
}
export default useProducts;


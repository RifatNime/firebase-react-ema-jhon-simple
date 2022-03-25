// use local storage to manage cart data
const addToDb = id =>{

    let shoppingCart = {};
    // let shoppingCart; //*store theke id niye string theke value kortese
    //*get the shopping cart from local
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppingCart = JSON.parse(storeCart);

    }
  /*   else{
        shoppingCart = {};
    } */

    // const quantity = localStorage.getItem(id);
    const quantity = shoppingCart[id]; //*id k store korte hobe ,value theke string kortese
    if(quantity){
        console.log('yes')
        const newQuantity =parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else{
        shoppingCart[id] = 1;
        // console.log('yesnew')
        // localStorage.setItem(id,1);
    }
    //*after add
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
    
}

// new
const getStoredCart = () =>{
    let shoppingCart = {};
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppingCart = JSON.parse(storeCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    // console.log('remove inside', id);
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart); //*sting tai parse korlam
        //*jodi thake
        if(id in shoppingCart){
            delete shoppingCart[id];
            //d*elete er por abar set
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        

    }
}
//full delete
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}
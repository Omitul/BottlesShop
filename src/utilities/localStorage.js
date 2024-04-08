const getStoredCart = () => {
    const ItemOfCart = localStorage.getItem('Cart'); // cart naam er item ase kina bhai!
if(ItemOfCart) {
    return JSON.parse(ItemOfCart);
 }

  return [];
}

const saveCart = cart => {
    
    // console.log(cart);
    // console.log('khali na')
    const GetItem = JSON.stringify(cart);
   // console.log(GetItem);
    localStorage.setItem('Cart',GetItem);
}


const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCart(cart);
}

export {addToLS,getStoredCart};
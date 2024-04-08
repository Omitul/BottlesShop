import React, { useEffect, useState } from 'react';
import { Bottle } from "./bottle";
import '../../components/components.css';
import { addToLS,getStoredCart} from '../../utilities/localStorage';

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data)) 
  }, []);

  useEffect(() =>{
    if(bottles.length > 0) {
    const storedCart = getStoredCart();
     
    const savedCart = [];
    for(const id of storedCart) {
      console.log(id);
      const botol = bottles.find(btl => btl.id === id);
      if(botol) {
           savedCart.push(botol);
      }
     }
     setCart(savedCart);
    }
    
  },[bottles]); /// bottles er state change holei eta call hbe. dependency added. 

   

  const handleAddToCart = bottles => {
    console.log(bottles);

    const newCart = [...cart,bottles];
    setCart(newCart);

    addToLS(bottles);
  }

  return (
    <div>
      <h3 style={{border:'3px solid yellow',borderWidth:'50px',width:'400px'}}>Bottles: {bottles.length}</h3>
      <h3 style={{border:'3px solid yellow',borderWidth:'50px',width:'400px'}}>Cart: {cart.length}</h3>
      <div className='components_container'>
      {
      bottles.map(b => (
        <Bottle key={b.id} bottle = {b} 
        handleAddToCart = {handleAddToCart}
        />
      ))
      }
      </div>
     
    </div>
  );
}

import './cartImage.css'

export const Cart = ({cart,handleRmvFromCart}) => {
    console.log(cart);
  return (
    <div>
      <h3 style={{border:'3px solid yellow',borderWidth:'50px',width:'400px'}}>Cart: {cart.length}</h3>
     
      <div className='cartImage'>
        {cart.map(bottle =>  <div className='nicheJaw' key={bottle.id}>
             <img src = {bottle.img}></img>
             <button  className='removeButton' onClick={() => handleRmvFromCart(bottle.id)}>Remove</button>
             </div>
        )}      
      </div>
        
    </div>
  )

  
}

import './bottle.css';
export const Bottle = (props) => {
  const {name, img, price} = props.bottle;
  
  return (
    <div className='nice_bottle'>
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
      <button onClick={()=> props.handleAddToCart(props.bottle.id)}  style={{backgroundColor:'skyblue'}}>Purchase</button>
    </div>
  )
};

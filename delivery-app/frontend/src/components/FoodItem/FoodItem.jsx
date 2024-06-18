import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id , name,price,description,image}) => {
  const {cartItems,setCartItems,addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className="food-item">
        <div className="image">
            <img src={image} alt="" />
            {!cartItems[id]?<img 
            onClick={()=>addToCart(id)}
            className='miniimage' src={assets.add_icon_white}/>:
            <div className="counter">
            <img 
            onClick={()=>removeFromCart(id)}
            className='miniimage' src={assets.remove_icon_red}/>  
            {cartItems[id]}
            <img 
            onClick={()=>addToCart(id)}
            className='miniimage' src={assets.add_icon_green}/>
            </div>
          }
        </div>
        <div className="info">
           <div className="rating">
            <h3>{name}</h3> 
            <img src={assets.rating_starts} alt="" />
            </div>
            <div className="description">{description}</div>
            <div className="price">${price}</div> 
        </div>
    </div>
  )
}

export default FoodItem
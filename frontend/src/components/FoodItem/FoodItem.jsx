<<<<<<< HEAD
import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'




const FoodItem = ({id,name,description,price,image}) => {


console.log(id)

 const{cartItems ,addCart,removeFromCart,url} = useContext(StoreContext)
 

 if (!cartItems) {
  return null; // or some default UI
}
 
    return (
    <div className='food-item'>

        <div className='food-item-img-container'>
            <img className='food-item-image' src={url+"/images/"+image}/>
            {!cartItems[id]
            ?<img className='add' onClick={()=>addCart(id)} src={assets.add_icon_white} alt=''/>
        : <div className='food-item-counter'>
        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/> 
        <p>{cartItems[id]}</p>
        <img onClick={()=>addCart(id)} src={assets.add_icon_green } alt=''/> 
        
        </div>
          }
        </div>

        <div className='food-item-info'>
            <div className='food-item-name-rating'>
        <p>{name}</p>
     <img src={assets.rating_starts} alt=""/>

            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
    </div>



    </div>
  )
}

=======
import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'




const FoodItem = ({id,name,description,price,image}) => {


console.log(id)

 const{cartItems ,addCart,removeFromCart} = useContext(StoreContext)
 

 if (!cartItems) {
  return null; // or some default UI
}
 
    return (
    <div className='food-item'>

        <div className='food-item-img-container'>
            <img className='food-item-img' src={image}/>
            {!cartItems[id]
            ?<img className='add' onClick={()=>addCart(id)} src={assets.add_icon_white} alt=''/>
        : <div className='food-item-counter'>
        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/> 
        <p>{cartItems[id]}</p>
        <img onClick={()=>addCart(id)} src={assets.add_icon_green } alt=''/> 
        
        </div>
          }
        </div>

        <div className='food-item-info'>
            <div className='food-item-name-rating'>
        <p>{name}</p>
     <img src={assets.rating_starts} alt=""/>

            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
    </div>



    </div>
  )
}

>>>>>>> 89eb54fea312c348b5e26080165db9e67e099ad9
export default FoodItem;
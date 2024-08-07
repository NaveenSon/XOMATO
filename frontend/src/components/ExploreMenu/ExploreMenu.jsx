<<<<<<< HEAD
import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

    
 
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore our menu </h1>
   <p className='explore-menu-text'>
   Indulge in a diverse menu of irresistible dishes, crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. Savor the flavor of excellence!
   </p>
   <div className='explore-menu-list'>
  {menu_list.map((item,index)=>{
    return(
      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index} className='explore-menu-list-item'>
        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
        <p>{item.menu_name}</p>
      </div>
    )
  })}
   </div>
   <hr/>
    </div>
  )
}

=======
import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

    
 
  return (
    <div className='explore-menu' id='explore menu'>
    <h1>Explore our menu </h1>
   <p className='explore-menu-text'>
   Indulge in a diverse menu of irresistible dishes, crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. Savor the flavor of excellence!
   </p>
   <div className='explore-menu-list'>
  {menu_list.map((item,index)=>{
    return(
      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index} className='explore-menu-list-item'>
        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
        <p>{item.menu_name}</p>
      </div>
    )
  })}
   </div>
   <hr/>
    </div>
  )
}

>>>>>>> 89eb54fea312c348b5e26080165db9e67e099ad9
export default ExploreMenu
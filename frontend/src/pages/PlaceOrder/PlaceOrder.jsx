
import React, {useEffect, useContext, useState } from "react";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom"; 
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
const PlaceOrder = () => {
  const { cartTotal, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName:"",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
   zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value }))
  }

  useEffect(()=>{
    console.log(data);
  },[data])


const placeOrder = async(event)=>{
  event.preventDefault();

  const orderItems = [];

  food_list.map((item)=>{
  
    if(cartItems[item._id]>0){
      let itemInfo = item;
      itemInfo["quantity"] = cartItems[item._id];
      orderItems.push(itemInfo);
    }


     
  } )
  let orderData ={
    address:data,
    items:orderItems,
    amount:(cartTotal + 2) * 100,
  }
  try {
    const response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error placing order");
    }
  } catch (error) {
    console.log("Error placing order:", error);
    
  }
};

const navigate = useNavigate();

useEffect(()=>{
  if(!token){
navigate('/cart')
alert("Please add items")
  }
  else if(cartTotal===0){
    navigate('/cart')
    alert("Please add atleast one Item")
  }
},[token])


 
  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input  required  name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="first name" />
          <input  required  name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="last name" />
        </div>
        <input required  name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="email address" />
        <input  required  name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required   name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input  required  name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input  required name="zipCode" onChange={onChangeHandler} value={data.zipCode} type="text" placeholder="Zip code" />
          <input required   name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>

        <input  required  name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${cartTotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p> {/* Assuming a fixed delivery fee */}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total : </b>
              <b>${cartTotal + 2}</b><br/><br/>
              {/* Adding the delivery fee to the total */}
              <b>NOTE</b> : COD(Cash on delivery is not available)
<br/><br/>
             <b> Only Debit & Credit cards are accepted</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;


import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error("Error updating order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Error updating order status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Orders : </h3>
      <div className="order-list">
        {orders.map((order, index) => {
          const address = JSON.parse(order.address);
          return (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <div>
                <p className="order-item-food">
                  {order.items.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item.name} x {item.quantity}
                      {itemIndex < order.items.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p className="order-item-name">Name :  {address.firstName} {address.lastName}
                </p>
                <div className="order-item-address"><b>Address : </b> 
                  <p>{address.street},</p>
                  <p>
                    {address.city}, {address.state}, {address.country}, {address.zipCode}
                  </p>
                </div>
                <p className="order-item-phone">{address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p><b>Total amount</b> : ${order.amount}</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;

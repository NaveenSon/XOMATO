import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order from frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const { userId, items, amount, address } = req.body;
    const calculatedAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const newOrder = new orderModel({
      userId,
      items,
      amount :calculatedAmount+2,
      address: JSON.stringify(address), // Ensure address is stored as a string
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount:200,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log("Error placing order:", error);
    res.json({ success: false, message: "Error placing order" });
  }
};

//for verifiy order payment temporary itherwise we should use webtokens---
const verifyOrder = async (req, res) => {
  const { orderaId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//user Orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//listing order for admin pannel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//api for updating order status
const updateStatus = async (req,res)=>{
try{

        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
res.json({success:true,message:"Status Updated"})
}catch(error){
    console.log(error);
    res.json({success:false,message:"error"})
}
}

export { placeOrder, verifyOrder, userOrders, listOrders,updateStatus };

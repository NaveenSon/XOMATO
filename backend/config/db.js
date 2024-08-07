import mongoose from "mongoose";


export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://Naveensoni:Naveen123@cluster0.igo0g0q.mongodb.net/food-del').then(()=>
        console.log("connected to db")
    )
}
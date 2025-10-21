import appconfig from "../dotenv.js";
import mongoose from "mongoose";



const MONGODB_URI = appconfig.MONGODB_URI;
const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log('mongoose database connected');
    });
    await mongoose.connect(MONGODB_URI)
}

export default connectDB
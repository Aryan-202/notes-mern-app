import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://noters_user:sWt0emmTAFM1CkwU@cluster0.gtjit4v.mongodb.net/notes'
const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log('mongoose database connected');
    });
    await mongoose.connect(MONGODB_URI)
}

export default connectDB
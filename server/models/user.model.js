import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps:true})

const userModel = mongoose.model.user || mongoose.model("User", userSchema);

export default userModel;
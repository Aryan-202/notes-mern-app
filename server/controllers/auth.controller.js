import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';


export const register = async (req, res)=>{
    const {name, email, password} = req.body

    if(!name ||!email || !password){
        return res.status(400).json({
            success: false,
            message: 'give all credentials'
        });
    }

    try {
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: 'user already exist'
            });
        };

        const hashPassword = await bcrypt.hash(password,10);

        const user = new userModel({
            name,
            email,
            password: hashPassword
        });
        await user.save()

        



    } catch (error) {
        
    }

}
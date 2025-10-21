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

        
        res.status(201).json({
            success: true,
            message: 'user created'
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async  (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'provide credentials'
        });
    }

    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: 'user not present'
            });
        };

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({
                success: false,
                message: 'wrong password'
            });
        }

        res.status(200).json({
            success: true,
            message: 'logged in successfully'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



export const login = async (req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'give all credentials'
        });
    }

    

}
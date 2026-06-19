import User from "../models/User.js";

export const register = async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        const exitingUser = await User.findOne({email});

        if(exitingUser){
            return res.status(401).json({message:"User is already exits.!"})
        }

        await User.create({name,email,password});
        res.status(200).json({message:"User register successfully.!"})
    }
    catch(err){
        res.status(500).json({message:"Internal server error!",err})
    }
}
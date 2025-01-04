import userModel from "../model/userModel.js"


export const create = async(req,res)=>{
    try {
        let userdata = new userModel(req.body);
        const {email} = userdata;

        const userExist = await userModel.findOne({email});

        if(userExist){
            return res.status(400).json({message : "User already exist"})
        }

        const saveduser = await userdata.save();
        res.status(200).json({saveduser})
        res.send("controller")
    } 
    catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
}
export const fetch = async(req,res)=>{
    try{
        res.send('Guhan Aahil')
    }catch(err){
        res.status(500)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }

}
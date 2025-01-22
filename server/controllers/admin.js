import {ApiResponse} from '../utils/response.js'
import {ADMIN} from '../constant.js'


export async function handleAdminUpdatePassword(req,res) {
    const {old_password,password} = req.body;
    if(!old_password && !password){
        return res.status(400).json(new ApiResponse(400,{message:'password Fields are missing'},false));
    }
    if(ADMIN.password === old_password){
        ADMIN.password === password;
        return res.status(200).json(new ApiResponse(200,{message:'successful'},true));
    }
    return res.status(200).json(new ApiResponse(200,{message:'successful'},false));
}
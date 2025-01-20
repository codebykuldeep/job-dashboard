import { generateToken, verifyToken } from "../auth/auth.js";
import { ADMIN } from "../constant.js";
import { getEmployerByEmail, registerEmployer } from "../lib/employers.js";
import { findUser, getUserByEmail, registerUser } from "../lib/users.js";
import { ApiResponse, UserResponse } from "../utils/response.js";
import bcrypt from 'bcrypt';

export async function handleRegistration(req,res) {
    const body = req.body;
    const {role} = body;
    console.log(body);
    
    try {
        const hashedPassword = await bcrypt.hash(body.password,3); 
        body.password = hashedPassword;
        if(role === 'user'){
            const result = await registerUser(body);
            return res.status(200).json(new ApiResponse(200,result,true)) 
        }
        else if(role === 'employer'){
            const result = await registerEmployer(body);
            return res.status(200).json(new ApiResponse(401,result,true))
        }
        else{
            return res.json(new ApiResponse(401,{message:'Unknown role registration failed'},false))
        }
    } catch (error) {
        return res.json(new ApiResponse(500,error,false))
    }
}


export async function handleLogin(req,res) {
    const body = req.body;
    const {email,password} = body;

    if(!email && !password){
        return res.json(new ApiResponse(401,{message:'Required Field are missing'},false));
    }

    try {
        if(email.toLowerCase() === ADMIN.email && password === ADMIN.password){
            const user = ADMIN;
            delete user.password;
            const token = generateToken(user);
            return res.json(new UserResponse(200,user,true,token));
        }
    
        const user = await findUser(email);
        if(!user){
            return res.json(new UserResponse(404,user,false));
        }

        const passwordCheck = await bcrypt.compare(password, user.password);
        if(passwordCheck){
            delete user.password;
            const token = generateToken(user);
            return res.json(new UserResponse(200,user,true,token));
        }

       
        return res.json(new UserResponse(401,{message:'Crendentials are incorrect'},false));
       
    } catch (error) {
        return res.json(new UserResponse(500,error,false))
    }
}



export async function handleUserVerification(req,res) {
    const authorization = req.headers['authorization'];
    if(!authorization){
        return res.json(new UserResponse(401,{message:'No Auth Credential/token is present.Please provide Authorization header'},false))
    }

    const JWT_TOKEN = authorization.split(' ')[1]

    try {
        const data = verifyToken(JWT_TOKEN);
        const {email,role} = data;
        console.log(data);
        
        let user;
        if(email.toLowerCase() === ADMIN.email && role === "admin"){
            user = ADMIN;
            user.role = 'admin';
            delete user.password;
        }
    
        if(role === 'employer'){
            user = await getEmployerByEmail(email);
            user.role = 'employer';
            delete user.password;
        }

        if(role === 'user'){
            user = await getUserByEmail(email);
            user.role = 'user';
            delete user.password;
        }

        const token = generateToken(user);
        return res.json(new UserResponse(200,user,true,token));
       
    } catch (error) {
        return res.json(new UserResponse(500,error,false))
    }
}
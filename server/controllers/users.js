// import { generateToken } from "../auth/auth.js";
// import { ADMIN } from "../constant.js";
// import { registerEmployer } from "../lib/employers.js";
// import { findUser, registerUser } from "../lib/users.js";
// import { ApiResponse, UserResponse } from "../utils/response.js";


// export async function handleRegistration(req,res) {
//     const body = req.body;
//     const {role} = body;
//     console.log(body);
    
//     try {
//         if(role === 'user'){
//             const result = await registerUser(body);
//             return res.status(200).json(new ApiResponse(200,result,true)) 
//         }
//         else if(role === 'employer'){
//             const result = await registerEmployer(body);
//             return res.status(200).json(new ApiResponse(401,result,true))
//         }
//         else{
//             return res.json(new ApiResponse(401,{message:'Unknown role registration failed'},false))
//         }
//     } catch (error) {
//         return res.json(new ApiResponse(500,error,false))
//     }
// }


// export async function handleLogin(req,res) {
//     const body = req.body;
//     const {email,password} = body;

//     if(!email && !password){
//         return res.json(new ApiResponse(401,{message:'Required Field are missing'},false));
//     }

//     try {
//         if(email.toLowerCase() === ADMIN.email && password === ADMIN.password){
//             const user = ADMIN;
//             delete user.password;
//             const token = generateToken(user);
//             return res.json(new UserResponse(200,user,true,token));
//         }
    
//         const user = await findUser(email);
//         if(!user){
//             return res.json(new UserResponse(404,user,false));
//         }
//         //Compare password 
//         //USING Bcrypt
//         const token = generateToken(user);
//         return res.json(new UserResponse(200,user,true,token));
       
//     } catch (error) {
//         return res.json(new UserResponse(500,error,false))
//     }
// }
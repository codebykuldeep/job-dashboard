import { verifyToken } from "../auth/auth.js";
import { ADMIN } from "../constant.js";
import { findUser } from "../lib/users.js";
import { UserResponse } from "../utils/response.js";

export async function auth(req,res,next){
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return res.json(
        new UserResponse(
          401,
          {
            message:
              "No Auth Credential/token is present.Please provide Authorization header",
          },
          false
        )
      );
    }

    const JWT_TOKEN = authorization.split(" ")[1];
    let user;
    try {
        const data = verifyToken(JWT_TOKEN);
        const {email,role} = data;
       
        if(email.toLowerCase() === ADMIN.email && role === 'admin'){
            user = ADMIN;
            delete user.password;
        }
        else{
            user = await findUser(email);
            if(!user){
                return res.json(new UserResponse(401,{message:'User not authenticated'},false));
            }
        }
    
       
    } catch {
        return res.json(new UserResponse(500,{message:'User not authenticated and Internal Server Error'},false))
    }
    req.user = user;
    next();
}
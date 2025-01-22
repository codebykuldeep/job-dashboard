import db from "../db/db.js";
import { getAdmin } from "./admins.js";
import { getEmployerByEmail } from "./employers.js";

export async function registerUser(body) {
    const {name,email,password,phone} = body;
    
    const result = await db.query(`INSERT INTO users(name,email,password,phone) VALUES( $1 , $2 , $3 ,$4 ) RETURNING * ;`,[name,email,password,phone])
    return result.rows;
}


export async function getUserByEmail(email) {
    const res = await db.query(`SELECT * FROM users WHERE LOWER(email) = $1 ;`,[email.toLowerCase()]);
    
    return res.rows[0];
}


export async function findUser(email) {
    const admin = await getAdmin(email);
    if(admin){
        return {...admin,role:'admin'};
    }

    const employer = await getEmployerByEmail(email);
    
    if(employer){
        return {...employer,role:'employer'}
    }


    const user =await getUserByEmail(email);
    if(user){
        return {...user,role:'user'}
    }

    return undefined;

}
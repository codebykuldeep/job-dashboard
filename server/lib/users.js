import db from "../db/db.js";
import { getAdmin } from "./admins.js";
import { getEmployerByEmail } from "./employers.js";

export async function registerUser(body) {
    const {name,email,password,phone} = body;
    
    const result = await db.query(`INSERT INTO users(name,email,password,phone) VALUES( $1 , $2 , $3 ,$4 ) RETURNING * ;`,[name,email,password,phone])
    return result.rows;
}

export async function getUserById(id) {
    const res = await db.query(`SELECT * FROM users WHERE user_id = $1 ;`,[id]);
    
    return res.rows[0];
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


export async function updateUser(body,id) {
    const {name ,email,education,summary} = body;
  
    const res = await db.query('UPDATE users SET name = $1 ,email = $2 ,education = $3, summary =$4  WHERE user_id = $5 ;',[name,email,education,summary,id])
    return res.rows;
}

export async function updateResume(link , user_id){
    const res = await db.query('UPDATE users SET resume = $1  WHERE user_id = $2 ;',[link,user_id])
    return res.rows;
}

export async function updatePhoto(link , user_id){
    const res = await db.query('UPDATE users SET image = $1  WHERE user_id = $2 ;',[link,user_id])
    return res.rows;
}
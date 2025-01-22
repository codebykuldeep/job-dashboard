import db from "../db/db.js";


export async function getAdmin(email){
    const result = await db.query('SELECT * FROM admins WHERE LOWER(email) = $1 ;',[email.toLowerCase()]);
    return result.rows[0];
}
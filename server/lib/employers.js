import db from "../db/db.js";


export async function getAllEmployers() {
    const res = await db.query(`SELECT * FROM employers ;`);
    return res.rows;
}

export async function getEmployer(id) {
    const res = await db.query(`SELECT * FROM employers WHERE emp_id = $1 ;`,[id]);
    return res.rows;
}

export async function getEmployerByEmail(email) {
    const res = await db.query(`SELECT * FROM employers WHERE LOWER(email) = $1 ;`,[email.toLowerCase()]);
    return res.rows[0];
}

export async function registerEmployer(body){
    const {name,email,password,phone} = body;
    const result = await db.query(`INSERT INTO employers(name,email,password,phone) VALUES( $1 , $2 , $3 ,$4 ) RETURNING * ;`,[name,email,password,phone])
    return result.rows;
}
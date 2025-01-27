import db from "../db/db.js";


export async function getAllEmployers(type) {
    if(type === 'pending'){
        const res = await db.query(`SELECT * FROM employers WHERE status IS NULL ;`);
        return res.rows;
    }
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

export async function updateEmployerStatus(emp_id,status) {
    const result = await db.query(`UPDATE employers SET status = $1 WHERE emp_id = $2 ;`,[status,emp_id])
    return result.rows;
}


export async function updateEmployer(body,id) {
    const {name ,email,summary,company_name,phone} = body;
  
    const res = await db.query('UPDATE employers SET name = $1 , email = $2 ,company_name = $3, phone =$4 , summary = $5 WHERE emp_id = $6 ;',[name,email,company_name,phone,summary,id])
    return res.rows;
}
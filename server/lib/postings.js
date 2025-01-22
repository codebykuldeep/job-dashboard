import db from "../db/db.js";

export async function createPost(body) {
  const {
    emp_id,title,experience,description,location,job_type,education,date,} = body;

    const res = await db.query('INSERT INTO postings(title,experience,description,location,job_type,education,date,emp_id) VALUES( $1 , $2 ,$3 , $4 , $5 , $6 ,$7, $8) ;',[title,experience,description,location,job_type,education,date,emp_id])
    return res.rows;
}

export async function getAllPostsByEmp(emp_id) {
    const res = await db.query('SELECT * from postings WHERE emp_id = $1 ;',[emp_id])
    return res.rows;
}

import db from "../db/db.js";

export async function createPost(body) {
  const {
    emp_id,title,experience,description,location,job_type,education,date,company_name} = body;

    const res = await db.query('INSERT INTO postings(title,experience,description,location,job_type,education,date,company_name,emp_id) VALUES( $1 , $2 ,$3 , $4 , $5 , $6 ,$7, $8 , $9) ;',[title,experience,description,location,job_type,education,date,company_name,emp_id])
    return res.rows;
}

export async function updatePost(body) {
    const {
      post_id,title,experience,description,location,job_type,education,date,} = body;
  
      const res = await db.query('UPDATE postings SET title = $1 ,experience = $2 ,description = $3, location =$4 ,job_type = $5 ,education = $6 ,date =$7 WHERE post_id = $8 ;',[title,experience,description,location,job_type,education,date,post_id])
      return res.rows;
  }

export async function getAllPostsByEmp(emp_id) {
    const res = await db.query('SELECT * from postings WHERE emp_id = $1 ORDER BY created_at desc;',[emp_id])
    return res.rows;
}

export async function getPost(id) {
    const res = await db.query('SELECT * from postings WHERE post_id = $1 ;',[id])
    return res.rows[0];
}


export async function deletePost(id) {
    const res = await db.query('DELETE FROM postings WHERE post_id = $1 ;',[id])
    return res.rows[0];
}

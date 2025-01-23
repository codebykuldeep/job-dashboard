import db from "../db/db.js";


export async function getApplicantsForPost(post_id) {
    const res = await db.query('SELECT * FROM applications WHERE post_id = $1 ORDER BY created_at DESC;',[post_id]);
    return res.rows;
}
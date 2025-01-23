import db from './db.js';



async function adminsSchema() {
    await db.query(`CREATE TABLE IF NOT EXISTS admins (
        admin_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL, 
        email VARCHAR NOT NULL UNIQUE,
        password VARCHAR,
        created_at VARCHAR DEFAULT CURRENT_TIMESTAMP
      )`)
    
}


async function employersSchema() {
    await db.query(`CREATE TABLE IF NOT EXISTS employers (
        emp_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL, 
        email VARCHAR NOT NULL UNIQUE,
        summary TEXT,
        password VARCHAR,
        phone INTEGER,
        company_name VARCHAR,
        status BOOLEAN DEFAULT NULL,
        created_at VARCHAR DEFAULT CURRENT_TIMESTAMP
      )`)
    
}

async function usersSchema() {
    await db.query(`CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL, 
        email VARCHAR NOT NULL UNIQUE,
        summary TEXT,
        password VARCHAR,
        phone INTEGER,
        education VARCHAR,
        resume VARCHAR,
        status BOOLEAN DEFAULT true,
        created_at VARCHAR DEFAULT CURRENT_TIMESTAMP
      )`)
    
}

async function postingSchema() {
    await db.query(`CREATE TABLE IF NOT EXISTS postings (
        post_id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL, 
        description TEXT NOT NULL,
        location VARCHAR NOT NULL,
        experience INTEGER NOT NULL,
        job_type TEXT NOT NULL,
        education VARCHAR,
        status BOOLEAN DEFAULT true,
        emp_id INTEGER NOT NULL,
        date VARCHAR,
        created_at VARCHAR DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(emp_id) REFERENCES employers(emp_id) ON DELETE CASCADE
      )`)
    
}

async function applicationSchema() {
    await db.query(`CREATE TABLE IF NOT EXISTS applications (
        app_id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        post_id INTEGER NOT NULL, 
        user_data TEXT NOT NULL,
        status BOOLEAN DEFAULT true,
        created_at VARCHAR DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
        FOREIGN KEY(post_id) REFERENCES postings(post_id) ON DELETE CASCADE
      )`)
    
}



async function setupDb(){
    try {
        await adminsSchema();
        await employersSchema();
        await usersSchema() ;
        await postingSchema();
        await applicationSchema();
    } catch (error) {
        console.log(error);
        
        throw new Error('DB SETUP FAILED !')
    }
}

async function connectDb() {
    db.connect({
        host:'localhost',
        port:5432,
        database:'job-db',
        user:'postgres',
        password:'root'
    })
    console.log('DB CONNECTED!');
    setupDb();
}

export {connectDb};
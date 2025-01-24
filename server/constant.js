import env from 'dotenv';
import process from 'node:process'

env.config();


const constant ={
    PORT:process.env.PORT,
    JWT_SECRET:'HELLO WORLD',
};

export const ADMIN ={
    name:"ADMIN",
    email:'admin@email.com',
    password:'',
    role:'admin'
}

export const DB_CRED ={
    PGHOST:process.env.PGHOST,
    PGDATABASE:process.env.PGDATABASE,
    PGUSER:process.env.PGUSER,
    PGPASSWORD:process.env.PGPASSWORD,
}

export default constant;
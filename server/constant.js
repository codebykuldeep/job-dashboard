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
    password:'123456',
    role:'admin'
}

export default constant;
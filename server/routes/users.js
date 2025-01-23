import {Router} from 'express'
import { handleGetUser } from '../controllers/users.js';
// import { handleLogin, handleRegistration } from '../controllers/users.js';

const router = Router();

// router.post('/register',handleRegistration)

// router.post('/login',handleLogin)


router.get('/:id',handleGetUser)


export default router;
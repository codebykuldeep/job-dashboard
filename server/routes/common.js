import {Router} from 'express'
import { handleLogin, handleRegistration, handleUserVerification } from '../controllers/common.js';


const router = Router();

router.get('/verify',handleUserVerification)

router.post('/register',handleRegistration)

router.post('/login',handleLogin)


export default router;
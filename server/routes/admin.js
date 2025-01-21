import {Router} from 'express';
import { handleAdminUpdatePassword } from '../controllers/admin.js';
const router = Router();

router.post('/password',handleAdminUpdatePassword)


export default router;
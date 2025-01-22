import {Router} from 'express'
import { handleEmployerStatusUpdate, handleGetAllEmployers, handleGetEmployer } from '../controllers/employers.js';
import { adminAuth } from '../middleware/auth.js';

const router = Router();

router.get('/',adminAuth,handleGetAllEmployers)

router.post('/status',handleEmployerStatusUpdate)

router.get('/:id',handleGetEmployer)


export default router;
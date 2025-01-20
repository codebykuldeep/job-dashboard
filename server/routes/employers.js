import {Router} from 'express'
import { handleGetAllEmployers, handleGetEmployer } from '../controllers/employers.js';

const router = Router();

router.get('/',handleGetAllEmployers)

router.get('/:id',handleGetEmployer)


export default router;
import {Router} from 'express'
import { handleGetPosts, handleNewPost } from '../controllers/postings.js';


const router = Router();

router.get('/',handleGetPosts)

router.post('/add',handleNewPost)


export default router;
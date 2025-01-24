import {Router} from 'express'
import { handleDeletePost, handleGetPostApplications, handleGetPosts, handleGetSinglePost, handleNewPost, handleUpdatePost } from '../controllers/postings.js';


const router = Router();

router.get('/',handleGetPosts)

router.post('/add',handleNewPost)

router.post('/update',handleUpdatePost)

router.get('/data/:id',handleGetPostApplications)

router.get('/:id',handleGetSinglePost)

router.delete('/:id',handleDeletePost)



export default router;
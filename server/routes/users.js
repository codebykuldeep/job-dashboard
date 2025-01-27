import {Router} from 'express'
import { handleGetUser, handleGetUserApplications, handlePhotoUpdate, handleResumeUpdate, handleUserDataUpdate } from '../controllers/users.js';
import { upload } from '../services/multer.js';
// import { handleLogin, handleRegistration } from '../controllers/users.js';

const router = Router();

router.post('/update',handleUserDataUpdate)

router.post('/resume',upload.single('resume'),handleResumeUpdate);

router.post('/image',upload.single('image'),handlePhotoUpdate);

router.get('/applications',handleGetUserApplications)

router.get('/:id',handleGetUser)


export default router;
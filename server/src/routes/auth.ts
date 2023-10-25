import express from 'express'
import authenticationController from '../controllers/auth';
const router = express.Router();
   
router.get('/google', authenticationController.google.auth);
router.get('/google/redirect', authenticationController.google.redirect);

router.get('/user', authenticationController.getUser)
router.post('/logout', authenticationController.logout);

export default router;
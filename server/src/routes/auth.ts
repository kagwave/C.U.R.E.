import express from 'express'
import authenticationController from '../controllers/auth';
const router = express.Router();
   
router.get('/google', authenticationController.google.auth);
router.get('/google/redirect', authenticationController.google.redirect);

export default router;
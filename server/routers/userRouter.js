import express from 'express'
import { loginUser, registerPatient } from '../controllers/userController.js';

const router = express.Router();

router.post('/patient/register',registerPatient)
router.post('/patient/login',loginUser)

export default router;
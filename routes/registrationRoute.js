import express from 'express';
import { getLogin, getSignin } from '../controllers/registrationController.js';
const router = express.Router();

// Get login page
router.get('/login', getLogin);

// Get signin page
router.get('/signin', getSignin);

export default router;
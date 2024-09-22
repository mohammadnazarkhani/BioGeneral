import express from 'express';
import { getAbout, getHome } from '../controllers/homeController.js';
const router = express.Router();

// Get home page
router.get('/', getHome);

// Get about page
router.get('/about', getAbout)

export default router;
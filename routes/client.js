import express from 'express'
import { about, home } from '../controllers/home.controller.js';
const router = express.Router();

router.get('/', home)
router.get('/about', about)
export default router
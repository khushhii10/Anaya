import express from 'express';
import { registerAuthor, loginAuthor } from '../controllers/authorController.js';

const router = express.Router();

router.post('/register', registerAuthor);
router.post('/login', loginAuthor);

export default router;

import express from 'express';
import getStart from '../controllers/getStart.js';
import {createUser, login, signUp} from '../controllers/userController.js';
const router = express.Router();

router.get('/', getStart);  
router.get('/create', createUser);
router.post('/login', login);
router.get('/signup', signUp);
export default router;
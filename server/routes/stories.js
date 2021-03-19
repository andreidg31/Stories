import express from 'express';
import {createStory, getStories} from '../controllers/storyController.js';
import {ensureAuth} from '../middleware//auth.js';
const router = express.Router();

router.post('/createStory', createStory);
router.get('/getStories', getStories);

export default router;
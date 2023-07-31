import express from 'express'
import { feedbackCont } from '../controller/FeedbackCont.js';

const router = express.Router()

//Collecting feedback from user
router.post('/',feedbackCont)
export default router
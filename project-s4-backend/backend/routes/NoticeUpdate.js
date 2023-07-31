import express from 'express'
import {noticeUpdateCont} from '../controller/NoticeUpdateCont.js';

const router = express.Router()

//Collecting feedback from user
router.post('/',noticeUpdateCont)
export default router;
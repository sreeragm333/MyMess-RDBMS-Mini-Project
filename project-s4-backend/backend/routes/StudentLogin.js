import { isLoggedin, studLogin } from '../controller/StudLoginCont.js';
import express from 'express';
const router = express.Router()

//Checking to see if the student is logged in or not (for session)
router.get('/',isLoggedin )

//login a student
router.post('/', studLogin)

export default router;
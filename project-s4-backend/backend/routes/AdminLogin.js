import express from 'express'
import { admLogin, isLoggedin } from '../controller/AdmLoginCont.js';
const router = express.Router()

//Checking to see if the admin is logged in or not (for session)
router.get('/',isLoggedin)

//Admin login
router.post('/',admLogin)
export default router
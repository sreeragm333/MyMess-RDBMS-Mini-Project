import express from 'express'
import { studLogout } from '../controller/StudLogoutCont.js';
const router = express.Router()

// Logout a student
router.get('/',studLogout );

export default router
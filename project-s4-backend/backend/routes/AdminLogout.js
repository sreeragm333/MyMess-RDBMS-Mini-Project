import express from 'express'
import { admLogout } from '../controller/AdmLogoutCont.js';
const router = express.Router()

// Logout a admin
router.get('/', admLogout);

export default router
import express from 'express';
import { studReg } from '../controller/StudRegCont.js';

const router = express.Router()



//Registering a student
router.post('/',studReg)

export default router
import express from 'express';
import { studentProfileCont } from '../controller/StudentProfileCont.js';

const router = express.Router()

router.post('/',studentProfileCont);
export default router;
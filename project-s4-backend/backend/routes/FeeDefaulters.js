import express from 'express';
import { feeDefaultersCont } from '../controller/FeeDefaultersCont.js';

const router = express.Router()


router.get('/',feeDefaultersCont);
export default router;
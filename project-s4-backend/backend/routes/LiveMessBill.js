import express from "express";
import {livemessbillCont} from '../controller/LiveMessBillCont.js';

const router = express.Router()

router.post('/',livemessbillCont)
export default router;
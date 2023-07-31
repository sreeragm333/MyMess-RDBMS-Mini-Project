import express from "express";
import {messcutCont} from '../controller/MessCutCont.js';

const router = express.Router()

router.post('/',messcutCont)
export default router;
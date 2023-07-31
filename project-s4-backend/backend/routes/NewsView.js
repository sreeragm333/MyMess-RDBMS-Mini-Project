import express from 'express'
import {newsCont} from '../controller/NewsCont.js';

const router = express.Router()

router.get('/', newsCont)
export default router
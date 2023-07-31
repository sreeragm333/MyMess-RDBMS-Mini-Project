import express from 'express'
import { menuCont } from '../controller/MenuCont.js';

const router = express.Router()

//Fetching menu from database
router.get('/:day', menuCont);
export default router
import messBill from '../controller/MessBillCont.js'
import express from 'express'
const router = express.Router()

router.get('/',messBill)
export default router
import express from 'express'
import { admStudentlist } from '../controller/AdmStudListCont.js'
const router = express.Router()

router.get('/', admStudentlist)

export default router
import express from 'express'
import { admEditMenu } from '../controller/AdmEditMenuCont.js'
import { admEditMenu2 } from '../controller/AdmEditMenuCont2.js'
const router = express.Router()

router.get('/',admEditMenu)
export default router

router.post('/:day/:time/:item',admEditMenu2)
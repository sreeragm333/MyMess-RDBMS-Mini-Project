import { admEditMenuSer2 } from "../services/AdmEditMenuSer2.js"

export const admEditMenu2=(req,res)=>{
    const day = req.params.day
    const time = req.params.time
    const item = req.params.item
    admEditMenuSer2(day,time,item)
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
}
import { admEditMenuSer } from "../services/AdmEditMenuSer.js"

export const admEditMenu =(req,res)=>{
    admEditMenuSer().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })

}
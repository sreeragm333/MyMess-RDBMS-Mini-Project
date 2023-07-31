import { admStudListSer } from "../services/AdmStudListSer.js"

export const admStudentlist =(req,res)=>{
admStudListSer().then((result)=>{
    res.json(result)
}).catch((err)=>{
    res.json(err)
})

}
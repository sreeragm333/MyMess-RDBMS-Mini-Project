import { livemessbillSer } from "../services/LiveMessBillSer.js"

export const livemessbillCont=(req,res)=>{
    const sid = req.body.sid
    livemessbillSer(sid)
    .then((result)=>{
        if(result){
            res.json(result)
        }
    })
    .catch((error) => {
        console.log(error)
    })

}
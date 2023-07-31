 import {noticeUpdateSer} from '../services/NoticeUpdateSer.js'
 
 export const noticeUpdateCont=(req,res)=>{
    const content = req.body.notice;
    noticeUpdateSer(content)
    .then(result=>{
        res.json("Notice Updated Successfully!")
    })
    .catch(error=>{
        res.send("Internal server Error : ",error)
    })

}
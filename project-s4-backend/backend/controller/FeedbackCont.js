import { feedbackSer } from "../services/FeedbackSer.js"
export const feedbackCont = (req,res)=>{
    const feedback = req.body.feedback
    const sid = req.body.sid
    feedbackSer(sid,feedback).then((result)=>{
        if(result){
            res.json(result)
        }
    }).catch((error)=>{
        res.json({message: error})
    })
}
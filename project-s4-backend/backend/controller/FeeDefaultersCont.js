import { feeDefaultersSer } from "../services/FeeDefaultersSer.js";

export const feeDefaultersCont =(req,res)=>{
    feeDefaultersSer()
    .then(result=>{
        res.json(result);
    })
    .catch(error=>{
        res.status(500).send("Internal server Error! : ",error)
    })
}

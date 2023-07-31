import { newsSer } from "../services/NewsSer.js";

export const newsCont = (req,res)=>{
    newsSer()
    .then(result=>{
        res.json(result);
    })
    .catch(error=>{
        console.error('Failed to get news items:', error);
        res.status(500).send('Failed to get news items.');
    })
}
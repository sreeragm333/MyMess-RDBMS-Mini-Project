import db from '../models/Database.js';

export const newsSer=()=>{
    return new Promise((resolve,reject)=>{
    const q = "SELECT * from news";
    db.query(q,(error,result)=>{
        if(error)
        {
            reject(error);
        }else{
            resolve(result);
        }
    })
    })


}
import db from '../models/Database.js';

export const admStudListSer =()=>{
    return new Promise((resolve,reject)=>{
        const q = 'SELECT * FROM students'
        db.query(q,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}
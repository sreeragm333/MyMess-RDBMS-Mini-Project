import db from '../models/Database.js';

export const studentProfileSer=(sid)=>{
    return new Promise((resolve,reject)=>{
        const q = "SELECT * FROM students WHERE studentid = ?";
        db.query(q,[sid],(error,result)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(result);
            }
        })
    })
}
import db from '../models/Database.js';

export const studLoginSer=(sid)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM students WHERE studentid = ?',
        [sid],
        (err, result) => {
            if (err) {
                reject(err)               
            }else{
                resolve(result)
            }
        })
   })
}
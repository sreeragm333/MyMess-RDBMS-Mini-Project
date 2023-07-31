import db from '../models/Database.js'

export const admEditMenuSer =()=>{
    return new Promise((resolve,reject)=>{
        const q = "SELECT day, breakfast, lunch, dinner FROM menu ORDER BY FIELD(day, 'Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')"
        db.query(q,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })

}
import db from '../models/Database.js';

export const messcutSer =(sid, cut, start, end, nod)=>{
    return new Promise((resolve,reject)=>{
        const q = "INSERT INTO messcut(studentid,messcut,cut_startdate,cut_enddate,num_of_days) VALUES (?,?,?,?,?)";
        db.query(q,[sid,cut,start,end,nod],(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve("Values inserted")
            }
        })
    })
}
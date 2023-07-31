import db from '../models/Database.js';

export const menuSer =(day)=>{
    return new Promise((resolve,reject)=>{
        db.query(
            'SELECT * FROM menu WHERE day = ?',
            [day],
            (error, results) => {
                if (error) {
                    reject(error)
                  
                } else {
                    resolve(results)
                }
            }
        );
    })

}
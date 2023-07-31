import db from '../models/Database.js';

export const livemessbillSer = (sid) => {
    return new Promise((resolve, reject) => {
        const q = "SELECT * FROM bill WHERE studentid = ?";
        db.query(q,[sid], (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}
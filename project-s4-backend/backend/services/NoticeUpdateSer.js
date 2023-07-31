import db from '../models/Database.js';

export const noticeUpdateSer = (content) => {
    return new Promise((resolve, reject) => {
        const q = 'INSERT INTO news (content) VALUES (?)';
        db.query(q, [content], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

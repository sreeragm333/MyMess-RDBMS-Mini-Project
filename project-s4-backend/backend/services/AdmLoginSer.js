import db from '../models/Database.js';

//Admin Login Service
export const admLoginSer = (aid) => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM admin WHERE adminid = ?',
      [aid],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

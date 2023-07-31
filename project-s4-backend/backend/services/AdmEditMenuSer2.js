import db from '../models/Database.js'

export const admEditMenuSer2 = (day, time, item) => {
    return new Promise((resolve, reject) => {
      const q = `UPDATE menu SET ${time} = ? WHERE day = ?`;
      db.query(q, [item, day], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve("Menu updated successfully");
        }
      });
    });
  };
  
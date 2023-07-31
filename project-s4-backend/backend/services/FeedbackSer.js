import db from '../models/Database.js';

export const feedbackSer = (sid, feedback) => {
  return new Promise((resolve, reject) => {
    const q = "INSERT INTO feedback( studentid,feedback) VALUES (?,?)";
    db.query(q, [sid, feedback], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve("Values Inserted");
      }
    });
  });
};

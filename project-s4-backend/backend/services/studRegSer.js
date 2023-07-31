import db from "../models/Database.js";

export const studRegSer = (name, email, sid, hash, dob, phone, hostel, sem, dept, pref) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO students(name, email, studentid, password, dob, phone, messname, semester, department, preference)
        VALUES(?,?,?,?,?,?,?,?,?,?)`,
      [name, email, sid, hash, dob, phone, hostel, sem, dept, pref],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          // Execute the second query only after the first query is successful
          db.query(
            'INSERT INTO bill(studentid) VALUES(?)',
            [sid],
            (err, result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        }
      }
    );
  });
};

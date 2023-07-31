import db from '../models/Database.js';

export const feeDefaultersSer = () => {
    return new Promise((resolve, reject) => {
        const q = `
    SELECT students.name, students.email, students.studentid, students.dob, students.phone
    FROM students
    JOIN bill ON students.studentid = bill.studentid
    WHERE bill.payment_status = 0
  `;
        db.query(q, (error, result) => {

            if (error) {
                reject(error);
            } else {
                resolve(result);
            }

        })
    })
}

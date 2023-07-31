import db from '../models/Database.js';

async function calculateAndUpdate() {
    // Get today's date
    const today = new Date();

    // Get the first day of the current month
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Get yesterday's date
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Calculate the number of days up to yesterday in the current month
    const daysUpToYesterday = yesterday.getDate();

    // Todays date converted to correct form to store in DB
    const dateStr = today.toISOString().slice(0, 10);

    if(today==firstDayOfMonth){
        const q5 = "DELETE FROM bill";
        const q6 = "DELETE FROM messcut";
        db.query(q5,(error,result)=>{
            if(error){
                throw error;
            }else{
                console.log("Bill table cleared")
            }
        })

        db.query(q6,(error,result)=>{
            if(error){
                throw error;
            }else{
                console.log("Messcut table cleared")
            }
        })
    }else{
        const update = (noMessCuts, messCuts) => {
            messCuts.forEach((messCut) => {
                const q2 = "SELECT num_of_days FROM messcut WHERE studentid = ?";
                db.query(q2, [messCut], (error, result) => {
                    if (error) {
                        throw error;
                    } else {
                        var messCutSum = 0;
                        for (var i = 0; i < result.length; i++) {
                            messCutSum += result[i].num_of_days;
                        }
                        var excess = messCutSum * 81;
                        var currentBill1 = 81 * daysUpToYesterday - excess;
                        const q3 = "UPDATE bill SET billdate = ?, billamt = ?  WHERE studentid = ?";
                        db.query(q3, [dateStr, currentBill1, messCut], (error, result) => {
                            if (error) {
                                throw error;
                            } else {
                                console.log("Values inserted successfully!");
                            }
                        });
                    }
                });
            });
    
            const currentBill2 = 81 * daysUpToYesterday;
            noMessCuts.forEach((noMessCut) => {
                const q4 = "UPDATE bill SET billdate = ?, billamt = ?  WHERE studentid = ?";
                db.query(q4, [dateStr, currentBill2, noMessCut], (error, result) => {
                    if (error) {
                        throw error;
                    } else {
                        console.log("Values inserted successfully!");
                    }
                });
            });
        };
    
        const getStudentId = (cutStudents) => {
            //Selecting students who have no messcut
            const q = "SELECT students.studentid FROM students LEFT JOIN messcut ON students.studentid = messcut.studentid WHERE messcut.studentid IS NULL;";
            db.query(q, (error, results) => {
                if (error) {
                    throw error;
                } else {
                    update(results.map((res1) => res1.studentid), cutStudents.map((res2) => res2.studentid));
                }
            });
        };
    
        // Selecting students who have mess cut
        const q1 = "SELECT DISTINCT students.studentid FROM students INNER JOIN messcut ON students.studentid = messcut.studentid WHERE DATEDIFF(CURDATE(), messcut.cut_startdate) >= 3";
        db.query(q1, (error, results) => {
            if (error) {
                throw error;
            } else {
                getStudentId(results);
            }
        });
    }
    

    }
    
export default calculateAndUpdate;

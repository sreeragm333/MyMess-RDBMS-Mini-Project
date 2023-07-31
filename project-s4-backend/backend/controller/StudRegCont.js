import { studRegSer } from "../services/studRegSer.js";
import bcrypt from 'bcrypt'
const saltRounds = 10;

export const studReg = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const sid = req.body.sid
    const pass = req.body.pass
    const dob = req.body.dob
    const phone = req.body.phone
    const hostel = req.body.hostel
    const sem = req.body.sem
    const dept = req.body.dept
    const pref = req.body.pref
    //bcrypt used for hashing password
    bcrypt.hash(pass, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        studRegSer(name, email, sid, hash, dob, phone,hostel,sem,dept,pref).then((result) => {
            res.json("Values Inserted")
        }).catch((err) => {
            console.log(err)
        })

    })
}
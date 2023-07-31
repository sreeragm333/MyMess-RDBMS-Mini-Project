import { studLoginSer } from "../services/StudLoginSer.js"
import bcrypt from 'bcrypt';

//Checking to see if the student is logged in or not (for session)
export const isLoggedin = (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user })
    } else {
        res.json({ loggedIn: false })
    }
}

//login a student
export const studLogin = (req, res) => {
    const sid = req.body.sid
    const pass = req.body.pass
    studLoginSer(sid).then((result) => {
        if (result && result.length > 0) {
            bcrypt.compare(pass, result[0].password, (error, response) => {
                if (response) {
                    req.session.user = result
                    res.json(result)
                } else {
                    res.json({ message: "Wrong password! Check your password and try again" })
                }
            })
        } else {
            res.json({ message: "Student ID not found" })
        }

    })
    .catch((error)=>{
        res.json({ wrong: error })
        return
    })
}
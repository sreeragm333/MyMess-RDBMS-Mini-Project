import bcrypt from 'bcrypt';
import { admLoginSer } from '../services/AdmLoginSer.js';

//Checking to see if the admin is logged in or not (for session)
export const isLoggedin =(req,res)=>{
    if (req.session.admin) {
        res.json({ loggedIn: true, admin: req.session.admin })
    } else {
        res.json({ loggedIn: false })
    }
}

//Admin login
export const admLogin = (req,res)=>{
    const aid = req.body.aid
    const pass = req.body.pass
    //Passing values to Admin Login Service
     admLoginSer(aid).then((result)=>{
        if(result && result.length>0){
            bcrypt.compare(pass, result[0].password, (error, response) => {
                if (response) {
                    req.session.admin = result
                    res.json(result)
                } else {
                    res.json({ message: "Wrong password! Check your password and try again" })
                }
            })
           }else{
            res.json({ message: "Admin ID not found" })
           }
     })
}
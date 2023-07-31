//Importing required libraries
import express from 'express';
import axios from 'axios';
const app = express();

import session from 'express-session';

import cors from 'cors';
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//session middleware for students
app.use(session({
    key: 'Session',
    secret: "mymessstudent",
    resave: false,
    saveUninitialized: false,
    cookie : {
        sameSite: 'strict'
    }
}))

import studentLoginRoute from './routes/StudentLogin.js'
import studentRegisterRoute from './routes/StudentRegister.js'
import studentLogoutRoute from './routes/StudentLogout.js'
import adminLoginRoute from './routes/AdminLogin.js'
import adminLogoutRoute from './routes/AdminLogout.js'
import menuFetch from './routes/Menufetch.js'
import feedbackCollect from './routes/FeedbackCollect.js'
import admstudentlist from './routes/AdmStudentlist.js'
import admEditMenu from './routes/AdmEditMenu.js'
import messBill from './routes/MessBill.js'
import messCut from './routes/Messcut.js'
import livemessBill from './routes/LiveMessBill.js'
import newsView from './routes/NewsView.js'
import studentProfile from './routes/StudentProfile.js'
import feeDefaulters from './routes/FeeDefaulters.js'
import noticeUpdate from './routes/NoticeUpdate.js'
app.use('/login',studentLoginRoute)
app.use('/add',studentRegisterRoute) 
app.use('/logout',studentLogoutRoute)
app.use('/adminlogin',adminLoginRoute)
app.use('/adminlogout',adminLogoutRoute)
app.use('/menu',menuFetch)
app.use('/feedback',feedbackCollect)
app.use('/admstudentlist',admstudentlist)
app.use('/admeditmenu',admEditMenu)
app.use('/messbill',messBill)
app.use('/messcut',messCut)
app.use('/livemessbill',livemessBill)
app.use('/news',newsView)
app.use('/studentprofile',studentProfile)
app.use('/feedefaulters',feeDefaulters)
app.use('/noticeupdate',noticeUpdate)
//Checking if connection is live or not
app.listen(8800, () => {
    console.log("Listening on port 8800");

    //Update request for messbill
    axios.get('http://localhost:8800/messbill')
    .then(() => {
      console.log('Axios request successful');
    })
    .catch(error => {
      console.error('Axios request failed:', error);
    });
})
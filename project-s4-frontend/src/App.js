import './App.css';
import './Components/Signup.css'
import './Components/adminLogin.css'
import './Components/fonts.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Feedback from './Components/Feedback';
import AdminLogin from './Components/AdminLogin';
import AdminHome from './Components/AdminHome';
import Admstudentlist from './Components/Admstudentlist';
import Admeditmenu from './Components/Admeditmenu';
import Main from './Components/Main';
import Messcut from './Components/Messcut';
import Livemessbill from './Components/Livemessbill';
import FeeDefaulters from './Components/FeeDefaulters';
import NoticeUpdate from './Components/NoticeUpdate';
import Profile from './Components/Profile';
import Page1 from './Components/Page1';
import Notifications from './Components/Notification';
import Rule from './Components/Rules';


function App() {
  const [studAuth, setAuth] = useState(false)
  const [admAuth, setAdmAuth] = useState(false)
  const [loginData, setloginData] = useState('')

  //Checks if student is logged in 
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:8800/login').then((response) => {
      if (response.data.loggedIn === true) {
        setAuth(true);
        setloginData(response.data.user[0])
      }
    });
  }, []);

  //Checks if admin is logged in 
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:8800/adminlogin').then((response) => {
      if (response.data.loggedIn === true) {
        setAdmAuth(true);
        setloginData(response.data.admin[0])
      }
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* Routes without Nav */}
        <Routes>
          <Route path='/page1' element={<Page1 />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        {/* Routes with Nav */}
        {studAuth || admAuth ? <Nav studAuth={studAuth} setAuth={setAuth} admAuth={admAuth} setAdmAuth={setAdmAuth} loginStatus={loginData} /> : null}

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Home auth={studAuth} loginStatus={loginData} />} />
          <Route path='/qr' element={<div align='center'><h1>Scan QR</h1><h2>QR Code Scanning feature will be implemented in the near future.</h2></div>} />
          <Route path='/profile' element={<Profile loginStatus={loginData} />} />
          <Route path='/paybill' element={<div align='center'><h1>Pay Mess Bill</h1><h2>Mess Bill payment feature will be implemented in the near future.</h2></div>} />
          <Route path='/menu' element={<Menu auth={studAuth} />} />
          <Route path='/feedback' element={<Feedback auth={studAuth} loginStatus={loginData} />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/adminhome' element={<AdminHome admAuth={admAuth} />} />
          <Route path='/admstudentlist' element={<Admstudentlist admAuth={admAuth} />} />
          <Route path='/admeditmenu' element={<Admeditmenu />} />
          <Route path='/admfeedefaulters' element={<FeeDefaulters />} />
          <Route path='/admupdatenotice' element={<NoticeUpdate />} />
          <Route path='/messcut' element={<Messcut loginStatus={loginData} />} />
          <Route path='/livemessbill' element={<Livemessbill loginStatus={loginData} />} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='/rules' element={<Rule/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

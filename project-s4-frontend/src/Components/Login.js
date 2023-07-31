import React, {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import logo from '../assets/logo.png'
import './Main.css'
import './Login.css'

const Login = () => {
    const [StudentID, setStudentID] = useState('')
    const [Password, setPassword] = useState('')
  
const navigate = useNavigate()
    const CollectData = () => {
        Axios.post('http://localhost:8800/login', {
            sid: StudentID,
            pass: Password,
        }, { withCredentials: true }).then((response) => {
            
            if (response.data.message) {

                alert(`Sorry ${response.data.message}!`);
            }
            else {

                alert("Login successful");
                navigate('/home')
                window.location.reload()

            }
        })
    }
    
    return (
        <div className="container">

            <div className="loginPart">
                <div className="loginText">
                    Log in to your MyMess account:
                </div>
                <div className="loginForm">
                    <input className="textField" type="text" value={StudentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID"/>
                    <br/>
                    <br/>
                    <input id="password" className="textField" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>                     
                </div>
                    
                <div className='loginSubmitDiv'>
                    <button className="loginSubmitButton" type="button" onClick={CollectData}>Login</button>
                </div>

                <div className="register">
                    Don't have an account? Register&nbsp;
                    <Link id = "signupid" to={'/page1'}>
                        HERE
                    </Link>
                </div>

            </div>

            <div className='logoPart'>
                <div className='MyMessImgDiv'>
                    <img draggable='false' className="MyMessImg" src={logo} alt="logo" />
                </div>
                    
                <div className='MyMessTextDiv'>
                    <div className="MyMessText">
                         MyMess
                    </div>
                    <div className="MyMessTagline">
                        the #1 destination for
                        all your mess needs
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login

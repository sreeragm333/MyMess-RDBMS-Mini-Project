import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const AdminLogin = () => {
const navigate = useNavigate()
    const [adminId, setAdminId] = useState('')
    const [password, setPassword] = useState('')
    const handleAdminlogin = () => {
        axios.post('http://localhost:8800/adminlogin',{
            aid : adminId,
            pass : password
        }).then((response)=>{
            if (response.data.message) {

                alert(`Sorry ${response.data.message}!`);
            }
            else {

                alert("Login successful");
                navigate('/adminhome')
                window.location.reload()

            }
        })
    }
    return (
        <div className='container'>
            <div className="signinPart">

                <h1 className='adminloginText'>Login as an admin:</h1>
                <div className='admsigninForm'>
                    <input className="textField" type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="Enter Admin ID" /><br/><br/>
                    <input className="textField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br/>
                </div>
                
                <button id='adminLoginButton' type="button" onClick={handleAdminlogin}>Login</button>
            </div>
            <div className='logoPart3'>
            <div className='MyMessImgDiv'>
                    <img className="MyMessImg" src={logo} alt="logo" />
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

export default AdminLogin

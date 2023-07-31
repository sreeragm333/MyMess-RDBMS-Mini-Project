import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { useLocation } from 'react-router-dom';

const Signup = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [StudentID, setStudentID] = useState('')
    const [Password, setPassword] = useState('')
    const [Date, setDate] = useState('')
    const [Phone, setPhone] = useState('')

    // Access the passed props using useLocation
    const location = useLocation();
    const { Messname, Semester, Dept, Preference } = location.state || {}; // Use optional chaining

    // Function to trigger the page reload after registration is completed successfully
    const handleReload = () => {
        alert("Registration completed successfully!");
        window.location.reload();
    };

    // Function to collect data and trigger the registration process
    const CollectData = () => {
        Axios.post('http://localhost:8800/add', {
            name: Name,
            email: Email,
            sid: StudentID,
            pass: Password,
            dob: Date,
            phone: Phone,
            hostel: Messname,
            sem: Semester,
            dept: Dept,
            pref: Preference
        }).then(handleReload)
        .catch((error) => {
            // Handle error if the registration fails
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again later.");
        });
    };

    return (
        <div className='page1Container'>
        <div className="signinleft">
            <div className="signinalreadyForm">
                <input className="signuptextField" type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br />
                <input className="signuptextField" type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
                <input className="signuptextField" type="text" value={StudentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID" /><br />
                <input className="signuptextField" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a password" /><br />
                <input className="signuptextField" type="date" placeholder="Enter Date Of Birth" value={Date} onChange={(e) => setDate(e.target.value)}/><br />
                <input className="signuptextField" type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" /><br />
                <button id="page1SubmitButton" type="button" onClick={CollectData}>Next</button>
            </div>
        </div>

        <div className='signinlogopart'>
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

export default Signup;

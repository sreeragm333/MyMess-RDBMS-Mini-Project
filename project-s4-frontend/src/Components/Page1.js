//Page to get values messname,Dept,sem,pref
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import './Page1.css'
import { Link } from "react-router-dom";
const Page1 = () => {
    const [Messname, setMessname] = useState('')
    const [Semester, setSemester] = useState('')
    const [Dept, setDept] = useState('')
    const [Preference, setPreference] = useState('')
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the SignUp component and pass the values as props
        navigate('/signup', {
          state: {
            Messname,
            Semester,
            Dept,
            Preference,
          },
        });
      };
    
    return (
        <div className='page1Container'>
            <div className="page1left">
                <div className="alreadyForm">
                    <h1 id="registerId1">Register</h1>
                    <select className="page1textField" id="hostelMess" name="hostelMess" onChange={(e) => setMessname(e.target.value)}>
                        <option value="0" selected hidden>Select Hostel Mess</option>
                        <option value="Sahara">Sahara</option>
                        <option value="Sagar">Sagar</option>
                        <option value="Sanathana">Sanathana</option>
                        <option value="Sarovar">Sarovar</option>
                        <option value="Sahrudaya">Sahrudaya</option>
                        <option value="Siberia">Siberia</option>
                        <option value="Swaraj">Swaraj</option>
                    </select>
                    <select className="page1textField" id="department" name="department" onChange={(e) => setDept(e.target.value)}>
                        <option value="0" selected hidden>Select Department</option>
                        <option value="Civil">CIVIL</option>
                        <option value="CS">CS</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="IT">IT</option>
                        <option value="Mech">MECH</option>
                        <option value="Safety">SAFETY</option>
                    </select>
                    <select className="page1textField" id="sem" name="sem" onChange={(e) => setSemester(e.target.value)}>
                        <option value="0" selected hidden>Select Semester</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <select className="page1textField" id="pref" name="pref" onChange={(e) => setPreference(e.target.value)}>
                        <option value="0" selected hidden>Select Food Preference</option>
                        <option value="Non-Veg">Non-Veg</option>
                        <option value="Veg">Veg</option>
                    </select>
                    <button id="page1SubmitButton" type="button" onClick={handleClick}>Next</button>

                    <div className="page1register">
                        Already have an account? Log in&nbsp;
                        <Link to={'/login'} id="page1signupid">
                            HERE
                        </Link>
                    </div>
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

export default Page1

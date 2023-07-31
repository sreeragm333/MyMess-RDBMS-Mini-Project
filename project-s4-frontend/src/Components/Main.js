import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Main.css'
import logo from '../assets/logo.png'

const Main = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const [newsItems, setNewsItems] = useState([]);

    const navigate = useNavigate()
    const handleClick = () => {
        if (selectedOption === 'new') {
            navigate('/page1')
        }
        else if (selectedOption === 'existing') {
            navigate('/login')
        }
    }
    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    
    return (
        <div className='totalContainer'>
        <div className='container'>
            <div className='signinPart'>
                <div className="signinText">
                    Sign up for the hostel mess of your choice
                </div>
                <div className="signinForm">
                    <div className="radioTile">
                        <label for="already">
                            <div className="labelText">already a mess inmate?</div>
                            <div className="radioButtonDiv">
                                <input type="radio" id="already"  name='option' value='existing' checked={selectedOption === 'existing'} onChange={handleChange}/>
                                <span className="radioButton"></span>
                                <span className="radioButton2"></span>
                            </div>    
                        </label>     
                    </div>
                    <br/>
                    <div className="radioTile">
                        <label for="notyet">
                            <div className="labelText">not yet a mess inmate?</div>
                            <div className="radioButtonDiv">
                                <input type="radio" id="notyet" name='option' value='new' checked={selectedOption === 'new'} onChange={handleChange}/>
                                <span className="radioButton"></span>
                                <span className="radioButton2"></span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="signinSubmitDiv">
                    <button className="submitButton" onClick={handleClick}>Continue</button>
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
    </div>
      

    )
}

export default Main

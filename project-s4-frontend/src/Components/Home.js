import React, { useEffect, useState } from 'react'
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import viewProfile from '../assets/viewProfile.png';
import scanQR from '../assets/scanQR.png';
import liveBill from '../assets/liveBill.png';
import messCut from '../assets/messCut.png';
import payBill from '../assets/payBill.png';
import feedback from '../assets/feedback.png';
import messMenu from '../assets/messMenu.png';
import rules from '../assets/rules.png';

const Home = ({auth,loginStatus}) => {
  const [newsItems, setNewsItems] = useState([]);

  const navigate = useNavigate();
  const handleProfile=()=> {
    navigate('/profile')
  }
  const handleMenu =()=>{
    navigate('/menu')
  }
  const handleFeedback=()=>{
    navigate('/feedback')
  }
  const handleQRcode=()=>{
    navigate('/qr')
  }
  const handleMessCut=()=>{
    navigate('/messcut')
  }
  const handleMessbill=()=>{
    navigate('/livemessbill')
  }
  const handlePayment=()=>{
    navigate('/paybill')
  }
  const handleNotification=()=>{
    navigate('/notifications')
  }
  const handleRules=()=>{
    navigate('/rules')
  }
  //Useeffect for news 
  useEffect(() => {
    axios.get("http://localhost:8800/news")
        .then(response => {
            setNewsItems(response.data);
        })
        .catch(error => {
            console.log("Error occurred while fetching news(frontend):", error);
        });

  }, [])
  
  return (
    <div className='homeTotalContainer'>
      {auth ? (
        <>
        <div className='homeContainer'>
        <h1 className='welcomeText' id='welcomeId'>Welcome, {loginStatus.name}!</h1>

        {/* <div class="notifSlider">
          <div class="ticker">
              <div class="notifLabel">NOTIFICATIONS</div>
              <span class="notifBreaker"></span>
              <div class="notifText">Siberia Hostel Mess started on 4th July, 2023...</div>
              <span class="notifBreaker"></span>
              <div class="notifText">Sagar Hostel Mess started on 7th July, 2023...</div>
              <span class="notifBreaker"></span>
              <div class="notifText">Swaraj Hostel Mess started on 10th July, 2023...</div>
              <span class="notifBreaker"></span>
              <div class="notifText">Sahara Hostel Mess admission started on 10th July, 2023...</div>
              <span class="notifBreaker"></span>
              <div class="notifText">Home delivery available now in Sagar Hostel Mess at Rs 120/- per day...</div>
          </div>
        </div> */}
        <div className="notifSlider" onClick={handleNotification}>
              <div className="ticker">
                <div className="notifLabel">NOTIFICATIONS</div>
                {newsItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <span className="notifBreaker"></span>
                    <div className="notifText">{item.content}</div>
                  </React.Fragment>
                ))}
              </div>
        </div>

        <div className="card-container">
            <div className="card" id="viewProfile" onClick={handleProfile}>
              <img src={viewProfile} alt="View Profile"/>
              <button className="boxText">View Profile</button>
            </div>
            <div className="card" id="scanQR" onClick={handleQRcode}>
              <img src={scanQR} alt="Scan QR Code"/>
              <button className="boxText">Scan QR Code</button>
            </div>
            <div className="card" id="liveBill" onClick={handleMessbill}>
              <img src={liveBill} alt="Live Bill Tracking"/>
              <button className="boxText">Live Bill Tracking</button>
            </div>
            <div className="card" id="messCut" onClick={handleMessCut}>
              <img src={messCut} alt="Online Mess Cut"/>
              <button className="boxText">Online Mess Cut</button>
            </div>
            <div className="card" id="payBill" onClick={handlePayment}>
              <img src={payBill} alt="Pay Mess Bill"/>
              <button className="boxText">Pay Mess Bill</button>
            </div>
            <div className="card" id="feedback" onClick={handleFeedback}>
              <img src={feedback} alt="Feedback & Suggestions"/>
              <button className="boxText">Feedback & Suggestions</button>
            </div>
            <div className="card" id="messMenu" onClick={handleMenu}>
              <img src={messMenu} alt="Mess Actions"/>
              <button className="boxText">View Menu</button>
            </div>
            <div className="card" id="rules" onClick={handleRules}>
              <img src={rules} alt="Rules & Regulations"/>
              <button className="boxText">Rules & Regulations</button>
            </div>        
          </div>
        </div>
          

        </>) : null}
    </div>
  )
}

export default Home

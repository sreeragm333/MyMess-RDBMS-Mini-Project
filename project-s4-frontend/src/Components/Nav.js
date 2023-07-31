import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import myMess from '../assets/logoRed.png';
import notifications from '../assets/notifications.png';
import settings from '../assets/settings.png';
import options from '../assets/options.png';
import './Nav.css';

const Navbarx = ({ studAuth, setAuth, admAuth, setAdmAuth,loginStatus }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  
  const handleNotification=()=>{
    navigate('/notifications')
  }
  const handleLogout = () => {
    Axios.get('http://localhost:8800/logout', { withCredentials: true })
      .then(() => {
        setAuth(false);
        navigate('/login');
      })
      .catch((err) => {
        console.log("This error");
      });
  };

  const handleAdminLogout = () => {
    Axios.get('http://localhost:8800/adminlogout', { withCredentials: true })
      .then(() => {
        setAdmAuth(false);
        navigate('/adminlogin');
      })
      .catch((err) => {
        console.log("This error");
      });
  };

  // Conditionally render Nav based on the route
  const shouldRenderNav = !['/', '/signup', '/login', '/page1'].includes(pathname);

  return (
    <div className='totalNavBar'>
      {shouldRenderNav && (
        <div className='navMyMessLogo'>
          <div className="navMyMessImgDiv">
              <img className="navMyMessImg" src={myMess} alt="MyMess"/>
          </div>
          <div className="navMyMessTextDiv">
              <div className="navMyMessText">
                  MyMess
              </div>
              <div className="navMyMessTagline">
                  the #1 destination for
                  all your mess needs
              </div>
          </div>
        </div>
      )}
      <div className='userBar'>
        
          {studAuth && (
            <>
              <div className='theActualUserBar'>
                {/* <Link to="/home">Home</Link> */}
                {/* <Link to="/qr">Scan QR</Link> */}
                <Link to="/profile" className='userLabel'>Mess No. {loginStatus.studentid}</Link>
                {/* <button id ="logoutButtonId" onClick={handleLogout}>Logout</button> */}

                
                <img src={notifications} alt="Notifications" className="notifications" onClick={handleNotification}/>
                <img src={settings} alt="Settings" className="settings"/>
                
                <div className="optionsContainer">
                  <input type="checkbox" id="toggleSelect"/>
                  <label for="toggleSelect">
                      <img src={options} alt="Options" className="options"/>
                  </label>
                  <ul className="optionList" type="none">
                      <div className="listDiv">
                          <li className='navListItem'><Link to="/home" className='homeLink'>Home</Link></li>
                          <li className='outLinkList'><a href='https://github.com/Ambady1/project-s4-backend/' className='navOutLink1'>Help</a></li>
                          <li className='navListItem2' onClick={handleLogout}>Log Out</li>
                          <li className='outLinkList'><a href='https://github.com/Ambady1/project-s4-frontend/' className='navOutLink2'>About Us</a></li>
                      </div>                    
                  </ul>
                </div>

              </div>
              {/* <button id="logoutButtonId" onClick={handleLogout}>Logout</button> */}
            </>
          )}
          {admAuth && (
            <>
              <button onClick={handleAdminLogout} className='admuserLabel'>Logout</button>
            </>
          )}
          {!studAuth && !admAuth && (
            <>
              <li><Link to="/page1">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
            </>
          )}
      </div>
    </div>
  );
};

export default Navbarx;
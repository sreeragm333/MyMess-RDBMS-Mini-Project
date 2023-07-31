import './Home.css';
import './Menu.css'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Menu = ({auth}) => {
  console.log(auth)
  const [todayMenu, settodayMenu] = useState([]);
  const [tomorrowMenu, settomorrowMenu] = useState([]);

  const today = new Date();

  const handleTodaymenuClick = async () => {
    const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });

    try {
      const response = await axios.get("http://localhost:8800/menu/" + dayOfWeek);
      settodayMenu(response.data);
    } catch (error) {
      console.error('Failed to get menu:', error);
    }

  };

  const handleTomorrowmenuClick = async () => {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const nextdayOfWeek = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });

    try {
      const response = await axios.get("http://localhost:8800/menu/" + nextdayOfWeek);
      settomorrowMenu(response.data);
    } catch (error) {
      console.error('Failed to get menu:', error);
    }
  }

  return (
    <div className="containerMenu">
      {auth? (
      <>
      <div className="menucard">
        <h1 className='menuHeading' id='menuHead1'>Today's Menu</h1>
        <button onClick={handleTodaymenuClick} className='menuRefreshButton'>Refresh</button>
        {todayMenu.length > 0 ? (
          todayMenu.map((item) => {
            return (
              <div className = "foodBox" key={item.day}> {/* Adding key attribute to avoid warning */}
                <div className='foodItemBox'>
                  <h3 className='foodHead'>Breakfast</h3>
                  <p className='foodPara'>{item.breakfast}</p>
                </div>
                <div className='foodItemBox'>
                  <h3 className='foodHead'>Lunch</h3>
                  <p className='foodPara'>{item.lunch}</p>
                </div>
                <div className='foodItemBox'>
                  <h3 className='foodHead'>Dinner</h3>
                  <p className='foodPara'>{item.dinner}</p>
                </div>
              </div>
            )
          })
        ) : (
          <p className='refreshPara'>Click the button to refresh.</p>
        )}
      </div>

      <div className="menucard">
        <h1 className='menuHeading' id='menuHead2'>Tomorrow's Menu</h1>
        <button onClick={handleTomorrowmenuClick} className='menuRefreshButton'>Refresh</button>
        {tomorrowMenu.length > 0 ? (
          tomorrowMenu.map((item) => {
            return (
              <div className = "foodBox" key={item.day}> {/* Adding key attribute to avoid warning */}
                <div className='foodItemBox'>
                  <h3 className='foodHead'>Breakfast</h3>
                  <p className='foodPara'>{item.breakfast}</p>
                </div>
                <div className='foodItemBox'>
                  <h3 className='foodHead'>Lunch</h3>
                  <p className='foodPara'>{item.lunch}</p>
                </div>
                <div className='foodItemBox'>
                  <h3 className='foodHead'>Dinner</h3>
                  <p className='foodPara'>{item.dinner}</p>
                </div>
              </div>
            )
          })
        ) : (
          <p className='refreshPara'>Click the button to refresh.</p>
        )}
      </div>
      </>):null}
    </div>
  )
}

export default Menu

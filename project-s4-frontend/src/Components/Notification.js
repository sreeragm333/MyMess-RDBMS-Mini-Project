import React, { useEffect, useState } from "react";
import axios from "axios";
import './Notifications.css'

const Notification = () => {
  const [newsItems, setNewsItems] = useState([]);

  // useEffect for news
  useEffect(() => {
    axios
      .get("http://localhost:8800/news")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.log("Error occurred while fetching news(frontend):", error);
      });
  }, []);

  return (
    <div className='notifProfileContainer'>
      <h1 className='notifProfileHead'>Notification</h1>
      <div className='notifProfileDetails'>
        <ol className='notifPinkContainer'>
          {newsItems.map((item) => (
            <li className='notifPinkContent'>{item.content}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Notification;

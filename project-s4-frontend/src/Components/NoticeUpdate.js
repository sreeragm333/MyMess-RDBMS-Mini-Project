import React, { useState } from 'react';
import axios from 'axios';
import './NoticeUpdate.css'
const NoticeUpdate = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:8800/noticeupdate', {
      notice: text,
    })
    .then((response) => {
      alert(response.data);
      setText('');
    })
    .catch((error) => {
      console.error('Error updating notice:', error);
    });
  };

  return (
<div className='feedbox'>
      <h1 id='feedbackId'>UPDATE NOTIFICATION</h1>
      <textarea className="feed"
        value={text}
        onChange={handleChange}
        placeholder="Type new news/nottification here..."
        rows="4"
        cols="50"
      ></textarea>
      <br />
      <button onClick={handleSubmit} id='updateButton'>Update Notice</button>
    </div>
  );
};

export default NoticeUpdate;

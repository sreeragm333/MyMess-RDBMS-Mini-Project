import React, { useState } from 'react'
import './Feedback.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Feedback = ({ auth, loginStatus }) => {
    const [Feedback, setFeedback] = useState('')
const navigate = useNavigate()
    const CollectFeedback = () => {
        axios.post('http://localhost:8800/feedback',{
             feedback : Feedback,
             sid : loginStatus.studentid,
             
        }).then((response)=>{
            if(response.data.message){
                console.log(response.data.message)
                alert("Sorry! Failed to post your feedback")
            }else{
            alert("Your feedback has been posted successfully!")
            navigate('/home')
            }
        })
        
    }
    return (
        <div className='feedbackContainer'>
            <div className='feedbox'>
            {auth ? (
                <>
                    <h1 id='feedbackId'>Feedback</h1>
                    <input className="feed" type="textarea" value={Feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Enter your feedback here" />
                    <button  type="button" onClick={CollectFeedback}>SUBMIT</button>
                </>) : null}
            </div>
        </div>
        
    )

}


export default Feedback

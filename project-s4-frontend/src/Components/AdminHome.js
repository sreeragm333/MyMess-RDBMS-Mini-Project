import React from 'react'
import './Home.css';
import './AdminHome.css'
import { useNavigate } from 'react-router-dom';

const AdminHome = (admAuth) => {
  const navigate = useNavigate()
  
  const handleStudentlist = (e) => {
    e.preventDefault()
    navigate('/admstudentlist')
  }

  const handleEditMenu = (e) => {
    e.preventDefault()
    navigate('/admeditmenu')
  } 

  const handleDefaulters=(e)=>{
    e.preventDefault()
    navigate('/admfeedefaulters')
  }

  const handleUpdateNotice=(e)=>{
    e.preventDefault()
    navigate('/admupdatenotice')
  }
  return (
    <div className='admHomeContainer'>
      <div>
        {admAuth.admAuth ? (
          <>
            <h1 className='welcomeText' >Welcome Admin</h1>

            <div className="card-container">
              <div className="card" onClick={handleStudentlist}>
                <h2 >See student list</h2>
                <p className="admhomepara" id='clickStudents'>Click here to see the list of students </p>
            
              </div>
              <div className="card" onClick={handleDefaulters}>
                <h2 id='seeFeeDefaulters'>See fee defaulters</h2>
                <p className="admhomepara" id='clickDefaulters'>Click here to see the list of fee defaulters</p>
                
              </div>
              <div className="card" onClick={handleEditMenu}>
                <h2>Edit menu</h2>
                <p className="admhomepara">Click here to edit menu</p>
                
              </div>
              <div className="card" onClick={handleUpdateNotice}>
                <h2>Update notice</h2>
                <p className="admhomepara">Click here to update notice</p>
                
              </div>
            </div>
          </>) : null}
      </div>
    </div>
  )
}

export default AdminHome

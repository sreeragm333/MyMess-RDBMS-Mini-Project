import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'

const Profile = ({ loginStatus }) => {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    // Function to fetch student profile data from the API
    if (loginStatus && loginStatus.studentid) {
      axios.post('http://localhost:8800/studentprofile', {
        sid: loginStatus.studentid // Use loginstatus.studentid directly here
      })
        .then((response) => {
         setProfileData(response.data[0])
        })
        .catch((error) => {
          console.log("Error occurred");
        });
    }
  }, [loginStatus]); // Add loginstatus to the dependency array

  const formatDateOfBirth = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className='profileContainer'>
      <h1 className='profileHead'>Student Profile</h1>
      {profileData ? (
        <div className='profileDetails'>
          <div className='greyContainer'>
            <p className='greyContent'>Student ID:</p>
            <p className='greyContent'>Name:</p>
            <p className='greyContent'>Email:</p>
            <p className='greyContent'>Date of Birth:</p>
            <p className='greyContent'>Mess-Name:</p>
            <p className='greyContent'>Semester:</p>
            <p className='greyContent'>Department:</p>
            <p className='greyContent'>Preference:</p>
          </div>
          <div className='pinkContainer'>
            <p className='pinkContent'>{profileData.studentid}</p>
            <p className='pinkContent'>{profileData.name}</p>
            <p className='pinkContent'>{profileData.email}</p>
            <p className='pinkContent'>{formatDateOfBirth( profileData.dob)}</p>
            <p className='pinkContent'>{profileData.messname}</p>
            <p className='pinkContent'>{profileData.semester}</p>
            <p className='pinkContent'>{profileData.department}</p>
            <p className='pinkContent'>{profileData.preference}</p>
          </div>
            
        </div>
      ) : (
        <p>Loading student profile...</p>
      )}
    </div>
  );
};

export default Profile;

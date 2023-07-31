import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FeeDefaulters.css'

const FeeDefaulters = () => {
  const [defaultersData, setDefaultersData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/feedefaulters');
        setDefaultersData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // Function to format the date of birth
  const formatDateOfBirth = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='feeDefaulterContainer'>
      <h1 className='feeDefaulterHeading'>Fee Defaulters</h1>
      <table className='feeDefaulterTable'>
        <thead className='feeDefaulterTableHead'>
          <tr className='feeDefaulterTableRow'>
            <th className='feeDefaulterTableHeadData'>Name</th>
            <th className='feeDefaulterTableHeadData'>Email</th>
            <th className='feeDefaulterTableHeadData'>Student ID</th>
            <th className='feeDefaulterTableHeadData'>Date of Birth</th>
            <th className='feeDefaulterTableHeadData'>Phone</th>
          </tr>
        </thead>
        <tbody className='feeDefaulterTableBody'>
          {/* Map through defaultersData to render the table rows */}
          {defaultersData.map((defaulter) => (
            <tr className='feeDefaulterTableRow' key={defaulter.studentid}>
              <td className='feeDefaulterTableData'>{defaulter.name}</td>
              <td className='feeDefaulterTableData'>{defaulter.email}</td>
              <td className='feeDefaulterTableData'>{defaulter.studentid}</td>
              <td className='feeDefaulterTableData'>{formatDateOfBirth(defaulter.dob)}</td>
              <td className='feeDefaulterTableData'>{defaulter.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeDefaulters;

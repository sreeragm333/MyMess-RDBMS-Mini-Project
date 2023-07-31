import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admstudentlist.css';

const Admstudentlist = (admAuth) => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStud, setFilteredStud] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8800/admstudentlist')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      });
  }, []);

  // Function to format date of birth
  const formatDateOfBirth = (dateOfBirth) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateOfBirth).toLocaleDateString(undefined, options);
  };

  // Function to handle search bar
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    const filtered = students.filter(
      student => student.studentid === parseInt(searchQuery)
    );
    setFilteredStud(filtered);
    setFlag(true);
  };
  

  return (
    <div>
      {admAuth.admAuth && (<>
      <div className='searchInput'>
        <input
        id='searchBar'
        className='admstdtextField'
        type="text"
        placeholder="Search by Student ID"
        value={searchQuery}
        onChange={handleSearchChange}
        />
        <button id="searchButtonList" onClick={handleClick}>Search</button>
      </div>
        

      <div className='feeDefaulterContainer'>
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
            {flag ? (
              filteredStud.map(student => (
                <tr className='feeDefaulterTableRow' key={student.studentid}>
                  <td className='admstdListTableData'>{student.name}</td>
                  <td className='admstdListTableData'>{student.email}</td>
                  <td className='admstdListTableData'>{student.studentid}</td>
                  <td className='admstdListTableData'>{formatDateOfBirth(student.dob)}</td>
                  <td className='admstdListTableData'>{student.phone}</td>
                </tr>
              ))
            ) : (
              students.map(student => (
                <tr key={student.studentid}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.studentid}</td>
                  <td>{formatDateOfBirth(student.dob)}</td>
                  <td>{student.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      </>)}

    </div>
  );
};

export default Admstudentlist;

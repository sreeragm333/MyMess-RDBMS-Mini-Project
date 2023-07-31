import React, { useState } from 'react';
import './Messcut.css';
import Axios from 'axios';
import { format, differenceInDays } from 'date-fns';

const Messcut = ({ loginStatus }) => {
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);

  const handleFirstDateChange = (event) => {
    // Update the first picked date
    setFirst(new Date(event.target.value));
  };

  const handleLastDateChange = (event) => {
    // Update the second picked date
    setLast(new Date(event.target.value));
  };

  const handleSubmit = async () => {
    if (first && last) {
      // Calculate the number of days between the selected dates
      const daysInBetween = differenceInDays(last, first) + 1;

      // Format the selected dates for logging
      const formattedFirstDate = format(first, 'yyyy-MM-dd');
      const formattedLastDate = format(last, 'yyyy-MM-dd');

      Axios.post('http://localhost:8800/messcut',{
        sid: loginStatus.studentid,
        start:formattedFirstDate,
        end:formattedLastDate,
        nod:daysInBetween
      }).then((response)=>{
        if(response)
        {
          alert("Messcut Successfull!");
        }
      })

      // Clear the selected dates after successful submission
      clearSelection();
    }
  };

  const clearSelection = () => {
    setFirst(null);
    setLast(null);
  };

  return (
    <div className='messCutContainer'>


      <div className='messCutHeading'>
        Mess cuts can be taken for a minimum of three days.
      </div>


      <div className='messCutInputDiv'>

        <div className='messCutStart'>
          <div className='messCutGreyContainer'>
            <div className='messCutGreyContent'>
              Mess Cut Start Date:
            </div>
          </div>
          <div className='messCutPinkContainer'>
            <div className='messCutPinkContent'>
              <input className='messCutDateField' type='date' value={first ? format(first, 'yyyy-MM-dd') : ''} onChange={handleFirstDateChange} />
            </div>
          </div>
        </div>

        <div className='messCutEnd'>
          <div className='messCutGreyContainer'>
            <div className='messCutGreyContent'>
              Mess Cut End Date:
            </div>
          </div>
          <div className='messCutPinkContainer'>
            <div className='messCutPinkContent'>
              <input className='messCutDateField' type='date' value={last ? format(last, 'yyyy-MM-dd') : ''} onChange={handleLastDateChange} />
            </div>
          </div>
        </div>

      </div>


      <div className='messCutSubmitDiv'>
        <button className="messCutSubmitButton" id='calenderSubmitButton' onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
};

export default Messcut;

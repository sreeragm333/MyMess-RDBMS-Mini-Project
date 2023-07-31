import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Livemessbill.css'

const Livemessbill = ({ loginStatus }) => {
    const [billData, setBillData] = useState([]);
    useEffect(() => {
        // Check if loginStatus is truthy before making the API call
        if (loginStatus && loginStatus.studentid) {
            axios.post('http://localhost:8800/livemessbill', {
                sid: loginStatus.studentid // Use loginStatus.studentid directly here
            })
                .then((response) => {
                    setBillData(response.data[0]);
                })
                .catch((error) => {
                    console.log("Error occurred");
                });
        }
    }, [loginStatus]); // Include loginStatus in the dependency array
    // Function to format date of bill
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };


    return (
        <div className='liveBillContainer'>
            <h1 className='liveBillHeading'>Live Mess Bill Tracking</h1>
            <table className='liveBillTable'>
                <thead className='liveBillTableHead'>
                    <tr className='liveBillTableRow'>
                        <th className='liveBillTableHeadData'>Student ID</th>
                        <th className='liveBillTableHeadData'>Name</th>
                        <th className='liveBillTableHeadData'>Bill Date</th>
                        <th className='liveBillTableHeadData'>Bill Amount</th>
                    </tr>
                </thead>
                <tbody className='liveBillTableBody'>
                    <tr className='liveBillTableRow'>
                        <td className='liveBillTableData'>{billData?.studentid}</td>
                        <td className='liveBillTableData'>{loginStatus.name}</td>
                        <td className='liveBillTableData'>{billData ? formatDate(billData.billdate) : ''}</td>
                        <td className='liveBillTableData'>{billData?.billamt} Rs</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Livemessbill;

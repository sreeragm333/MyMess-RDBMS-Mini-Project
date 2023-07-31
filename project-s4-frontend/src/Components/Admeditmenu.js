import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AdminEditMenu.css';
const Admeditmenu = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8800/admeditmenu')
      .then((response) => {
        setMenu(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [selectedOption, setSelectedOption] = useState('');
  const [newMenu, setNewmenu] = useState('')
  const [newTime, setNewTime] = useState('')

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleNewmenu = (event) => {
    setNewmenu(event.target.value)
  }
  const handleTimeChange = (event)=>{
    setNewTime(event.target.value)
  }
  const handleUpdate = () => {
    axios.post('http://localhost:8800/admeditmenu/' + selectedOption + '/' + newTime + '/' + newMenu)
    .then(result=>{
      alert(result.data)
      window.location.reload()
    })
    .catch(err=>{
      alert(err)
    })
  }
 
  return (
    <div className='admmenuContainer'>
      <h1 className='admmenuHeading'>Edit Menu Here</h1>
      <div id='editMenu'>
        <label className='admmenuLabel'>Select an option:</label>
        <select className='admtextField' value={selectedOption} onChange={handleOptionChange}>
          <option value="">-- Select --</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <br />
        {selectedOption !== '' ? (
          <div>
            <label className='choosetimelabel'>Choose the time: </label>
            <select className="admtextField" value={newTime} onChange={handleTimeChange}>
            <option value="">-- Select --</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            </select>
            <br />
            <div className='updatedmenudiv'>
                <label className='updatemenulabel'>Enter the updated menu: </label>
                <input className="admtextField" id="updateInput" type='textbox' placeholder='enter updated menu' onChange={handleNewmenu} value={newMenu}></input>
                <button className="selectIdButton" onClick={handleUpdate}>Update</button>
            </div>
            
          </div>) : null}
      </div>
      <div id='tableContainerMenu'>
      <table className='adminmenuTable'>
        <thead className='adminmenuTableHead'>
          <tr className='adminmenuTableRow'>
            <th className='adminmenuTableHeadData'>DAY</th>
            <th className='adminmenuTableHeadData'>BREAKFAST</th>
            <th className='adminmenuTableHeadData'>LUNCH</th>
            <th className='adminmenuTableHeadData'>DINNER</th>
          </tr>
        </thead>
        <tbody className='adminmenuTableBody'>
          {menu.map(item => (
            <tr key={item.day}>
              <td>{item.day}</td>
              <td>{item.breakfast}</td>
              <td>{item.lunch}</td>
              <td>{item.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Admeditmenu

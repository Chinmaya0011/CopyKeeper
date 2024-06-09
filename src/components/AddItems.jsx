import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddItems = () => {
  const [itemName, setItemName] = useState('');
  const [notes, setNotes] = useState('');
  const [priority, setPriority] = useState('low');
  const [currentDate, setCurrentDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      itemName,
      currentDate: currentDate ? currentDate.toLocaleDateString() : '',
      notes,
      priority,
    };
    console.log('Submitted Item:', itemData);
    // Add your submit logic here (e.g., send data to server, update state, etc.)
    // Reset form fields after submission
    setItemName('');
    setNotes('');
    setPriority('low');
    setCurrentDate(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="datePicker">Select Date:</label>
          <DatePicker
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Click to select a date"
            id="datePicker"
          />
        </div>

        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="priority">Priority Level:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;

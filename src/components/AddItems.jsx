import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from '../style/addItem.module.css';
import { ItemContext } from '../context/ItemContext';

const AddItems = () => {
  const [itemName, setItemName] = useState('');
  const [notes, setNotes] = useState('');
  const [priority, setPriority] = useState('low');
  const [currentDate, setCurrentDate] = useState(null);
  const [submit, setSubmit] = useState(false);

  const { white, black, red, green, blue } = useContext(ItemContext);

  useEffect(() => {
    let timer;
    if (submit) {
      timer = setTimeout(() => setSubmit(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [submit]);

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
    setSubmit(true);
    setItemName('');
    setNotes('');
    setPriority('low');
    setCurrentDate(null);
  };
  const backgroundColor = white || black || red || green || blue;

  return (
<div className={style.formContainer} style={{ backgroundColor: backgroundColor }}>

<form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="itemName" className={style.label}>Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className={style.input}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="datePicker" className={style.label}>Select Date:</label>
          <DatePicker
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Click to select a date"
            id="datePicker"
            className={style.datePicker}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="notes" className={style.label}>Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={style.textarea}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="priority" className={style.label}>Priority Level:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={style.select}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className={style.formGroup}>
          <button 
            type="submit" 
            className={style.button} 
            style={{ backgroundColor: submit ? 'green' : '' }}
          >
            {submit ? `Submitted` : `Submit`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;

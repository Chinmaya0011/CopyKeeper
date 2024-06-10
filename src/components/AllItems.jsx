import React, { useState } from 'react';
import dataItems from '../data/data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from '../style/allItems.module.css';

// Define a mapping of priority levels to background colors
const priorityColors = {
  Low: '#e6f7ff', // Light blue
  Medium: '#fffaeb', // Light yellow
  High: '#fff0f6', // Light pink
};

// Function to sort and group items by date
const groupByDate = (items) => {
  // Sort items by date in descending order
  items.sort((a, b) => new Date(b.selectDate) - new Date(a.selectDate));

  // Group items by date
  const groupedItems = items.reduce((acc, item) => {
    const date = item.selectDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  return groupedItems;
};

const AllItems = () => {
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);

  // Handle priority level change
  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  // Filter items based on selected priority and date
  const filterItems = (items) => {
    return items.filter((item) => {
      const isPriorityMatch = selectedPriority === 'All' || item.priorityLevel === selectedPriority;

      let isDateMatch = true;
      if (selectedDate) {
        const itemDate = new Date(item.selectDate).setHours(0, 0, 0, 0);
        const filterDate = selectedDate.setHours(0, 0, 0, 0);
        isDateMatch = itemDate === filterDate;
      }

      return isPriorityMatch && isDateMatch;
    });
  };

  const filteredItems = filterItems(dataItems);
  const groupedItems = groupByDate(filteredItems);

  return (
    <div className={style.allItems}>
      <div className={style.filters}>
        <label className={style.filterLabel}>
          Filter by Priority Level:
          <select value={selectedPriority} onChange={handlePriorityChange} className={style.prioritySelect}>
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label className={style.filterLabel}>
          Filter by Date:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Click to select a date"
            className={style.datePicker}
          />
        </label>
      </div>

      {Object.keys(groupedItems).length === 0 ? (
        <p className={style.noItemsMessage}>No items found for the selected filters.</p>
      ) : (
        Object.keys(groupedItems).map((date) => (
          <div key={date} className={style.dateGroup}>
            <h2 className={style.dateHeading}>{date}</h2>
            <ul className={style.itemList}>
              {groupedItems[date].map((item, index) => (
                <li
                  key={index}
                  className={style.item}
                  style={{ backgroundColor: priorityColors[item.priorityLevel] || 'transparent' }} // Apply background color based on priority
                >
                  <strong className={style.itemName}>{item.itemName}</strong><br />
                  <span className={style.itemNotes}>Notes: {item.notes}</span><br />
                  <span className={style.itemPriority}>Priority Level: {item.priorityLevel}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default AllItems;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Helper to remove time part from date
  const stripTime = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  // Disable past dates for start date picker
  const isStartDateDisabled = (date) => {
    return stripTime(date) > stripTime(new Date());
  };

  // Disable dates before start date for end date picker
  const isEndDateDisabled = (date) => {
    return stripTime(date) > stripTime(startDate);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // If new start date is after current end date, update end date too
    if (stripTime(date) > stripTime(endDate)) {
      setEndDate(date);
    }
  };

  return (
    <div className="date-range-picker">
      <div className="date-picker-group">
        <label htmlFor="start-date">Start Date:</label>
        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          filterDate={isStartDateDisabled}
          dateFormat="MMMM d, yyyy"
          className="date-picker-input"
          popperPlacement="bottom-start"
        />
      </div>

      <div className="date-picker-group">
        <label htmlFor="end-date">End Date:</label>
        <DatePicker
          id="end-date"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          filterDate={isEndDateDisabled}
          dateFormat="MMMM d, yyyy"
          className="date-picker-input"
          popperPlacement="bottom-start"
        />
      </div>

      <style jsx>{`
        .date-range-picker {
          display: flex;
          gap: 20px;
          margin: 20px 0;
          flex-wrap: wrap;
        }
        .date-picker-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .date-picker-input {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }
        label {
          font-weight: 500;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default DateRangePicker;
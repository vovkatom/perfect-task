import { useState } from 'react';
import DatePicker from 'react-datepicker';

import './react-datepicker2.css';

const Calendar = ({ handleDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

    const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="EEEE, MMMM d"
        showPopperArrow={false}
        placeholderText="Select a date"
        closeOnScroll={true}
        minDate={today}
      />
    </div>
  );
};

export default Calendar;

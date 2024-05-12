import { useState } from 'react';
import DatePicker from 'react-datepicker';

import './react-datepicker2.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      />
    </div>
  );
};

export default Calendar;

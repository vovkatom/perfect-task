import { useState } from 'react';
import DatePicker from 'react-datepicker';

import './react-datepicker2.css';
import { format } from 'date-fns';

const Calendar = ({ handleDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

    const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = format(date, 'dd-MM-yyyy');
    handleDate(formattedDate);
    console.log('formattedDate:', formattedDate)
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

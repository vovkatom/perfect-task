import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import css from './calendar.module.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        className={css.datePicker}
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

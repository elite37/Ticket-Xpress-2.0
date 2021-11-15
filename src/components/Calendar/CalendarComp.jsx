import React, { useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./reactCalendar.css";

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default CalendarComp;

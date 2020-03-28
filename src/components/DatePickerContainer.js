import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePickerContainer() {

  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div>
      <h1>Date Picker</h1>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy' // sets formatting of date
        minDate={new Date()} // disables all past dates
        //maxDate={new Date() + 7}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // Saturday(6) and Sunday(0) excluded
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  )
}

export default DatePickerContainer

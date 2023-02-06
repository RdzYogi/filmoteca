import React, { useState, useEffect } from "react";
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Day from "../../components/calendar/Day"

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const days = [];
  const renderDays = () => {
    const monthStart = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const monthEnd = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = monthStart; i <= monthEnd; i.setDate(i.getDate() + 1)) {
      days.push(<div key={i}>{i.getDate()}</div>);
      console.log(i.getDay())
    }
  };

  return (
    <Layout>
      {/* <Navbar/> */}
       <div>
        <div>{selectedDate.toDateString()}</div>
        <div>
          <button onClick={() => handleDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
            Prev
          </button>
          <button onClick={() => handleDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
            Next
          </button>
        </div>
        <div>{renderDays()}
        {days.map(day => (
          <Day key={day.id} day={day} />
      ))}
        </div>
    </div>
      <Footer/>
    </Layout>
  )
}

export default Calendar

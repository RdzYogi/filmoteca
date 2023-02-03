import React, { useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Day from "./Day"

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const renderDays = () => {
    const days = [];
    const monthStart = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const monthEnd = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = monthStart; i <= monthEnd; i.setDate(i.getDate() + 1)) {
      days.push(<div key={i}>{i.getDate()}</div>);
    }

    return days;
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
        <Day key={day} day={day} />
      ))}
        </div>
    </div>
      <Footer/>
    </Layout>
  )
}

export default Calendar

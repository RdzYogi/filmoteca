import React, { useState, useEffect } from 'react';
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Calendar() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('"api/v1/movies"')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <Layout>
      {/* <Navbar/> */}
      <div className="pt-40">Calendar</div>
     <div>
      <h2>{month} {year}</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => {
            const dayOfWeek = new Date(year, date.getMonth(), day).getDay();
            if (index === 0) {
              return (
                <tr>
                  {[...Array(dayOfWeek).fill(null), day].map((cell, index) => (
                    <td key={index} />
                  ))}
                </tr>
              );
            } else {
              return (
                index % 7 === 0 ?
                  <tr key={index}>
                    <td>{day}</td>
                  </tr> :
                  <td key={index}>{day}</td>
              );
            }
          })}
        </tbody>
      </table>
    </div>
      <Footer/>
    </Layout>
  );
}

export default Calendar

import React, { useState, useEffect } from 'react';
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('api/v1/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < monthStart; i++) {
      days.push(<div className="empty-day" key={`empty-${i}`} />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      const movieCards = movies.filter(movie => movie.release_date === dateStr).map(movie => (
        <div className="movie-card bg-white rounded-lg shadow-md p-4 my-2" key={movie.id}>
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <p className="text-gray-500">{movie.release_date}</p>
        </div>
      ));
      days.push(
        <div className="day flex flex-col justify-start items-center" key={`day-${i}`}>
          <div className="date font-bold text-lg mb-2">{i}</div>
          {movieCards}
        </div>
      );
    }
    return days;
  };
  return (
    <Layout>
      <Navbar/>
      <div className="calendar bg-gray-100 min-h-screen mt-32">
      <div className="header flex justify-between items-center bg-gray-200 px-4 py-2 rounded-t-lg">
        <button className="text-gray-500 hover:text-gray-700" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>{'<'}</button>
        <h2 className="text-xl font-bold">{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button className="text-gray-500 hover:text-gray-700" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>{'>'}</button>
      </div>
      <div className="days grid grid-cols-7 grid-rows-auto gap-2 p-2">
        <div className="day-name font-bold text-sm text-gray-500 text-center">Sun</div>
        <div className="day-name font-bold text-sm text-gray-500 text-center">Mon</div>
        <div className="day-name font-bold text-sm text-gray-500 text-center">Tue</div>
        <div className="day-name font-bold text-sm text-gray-500 text-center">Wed</div>
        <div className="day-name font-bold text-sm text-gray-500 text-center">Thu</div>
        <div className="day-name font-bold text-sm text-gray-500 text-center">Fri</div>
        <div className="day-name font-bold text-sm text-gray-500 text-center">Sat</div>
        {renderDays()}
      </div>
    </div>
      <Footer/>
    </Layout>
  );
}

export default Calendar

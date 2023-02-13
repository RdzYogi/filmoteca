import React, { useState, useEffect } from 'react';

const Day = ({ day }) => {
  const [Movies, SetMovies] = useState([]);

  useEffect(() => {
    fetch("")
    .then(response => response.json())
    .then(data => SetMovies(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <div onClick={handleClick}>
      {day}
      {isDropdownOpen && <div>Dropdown content goes here</div>}
    </div>
  );
};

export default Day;

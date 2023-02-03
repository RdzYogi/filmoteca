import React, { useState } from 'react';

const Day = ({ day }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div onClick={handleClick}>
      {day}
      {isDropdownOpen && <div>Dropdown content goes here</div>}
    </div>
  );
};

export default Day;

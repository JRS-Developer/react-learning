import React, { useState } from 'react';

const UseStateBasics = () => {
  const originalTitle = 'Random title'
  const NewTitle = 'New title'

  const [title, setTitle] = useState(originalTitle)

  const handleClick = () => {
      title == originalTitle ? setTitle(NewTitle) : setTitle(originalTitle)
  }

  return (
  <>
    <h2>{title}</h2>
    <button className="btn" onClick={handleClick}>Change title</button>
  </>
  );
};

export default UseStateBasics;

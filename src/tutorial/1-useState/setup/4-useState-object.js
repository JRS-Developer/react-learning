import React, { useState } from 'react';

const UseStateObject = () => {
  const OriginalMessage = 'random message'

  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: OriginalMessage,
  })

  const changeMessage = () => {
    const newMessage = 'Hello World'
    person.message == newMessage ? setPerson({...person,message: OriginalMessage}) : 
    setPerson({...person,message: newMessage})
  }

  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>Change message</button>
    </>
  );
};

export default UseStateObject;

import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

// const [text, setText] = useState('');
// const firstValue = text || 'hello world';
// const secondValue = text && 'hello world';

// firstValue se muestra debido a que || significa que si es falso pues que muestre hello world.
// secondValue no se muestra debido a que && significa que es verdadero entonces se muestra, en este caso el texto es falso debido a que est avacio

const ShortCircuit = () => {
	const [text, setText] = useState('Peter');
  const [isError,setIsError] = useState(false)
  // const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';


	return (
		<>
			{/* <h1>{firstValue}</h1>
			<h1>value: {secondValue}</h1> */}
      {/* {text && <h1>John Doe</h1>}
      {!text && <h1>John Doe</h1>} */}
      {/* <h1>{text || 'John Doe'}</h1> */}
      <button className="btn" onClick={() => {
        setIsError(!isError)
      }}>Toggle error</button>
      {isError ? <h1>Error D:</h1> : <h1>There are no errors :D</h1>}
		</>
	);
};

export default ShortCircuit;

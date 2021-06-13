import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [Value, setValue] = useState(0);

	useEffect(() => {
		Value > 0 && (document.title = `New messages(${Value})`);
	}, [Value]);

	useEffect(() => {
		// Este useEffec solo se renderiza una vez porque el array de dependencias esta vacio.
		console.log('Hola, yo solo me renderizo una sola vez')
	}, [])

	return (
		<>
			<h1>{Value}</h1>
			<button
				className='btn'
				onClick={() => {
					setValue(Value + 1);
				}}
			>
				Increase value
			</button>
		</>
	);
};

export default UseEffectBasics;

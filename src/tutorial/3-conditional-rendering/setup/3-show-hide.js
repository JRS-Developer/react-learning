import React, { useState, useEffect } from 'react';

const ShowHide = () => {
	const [Show, setShow] = useState(false);
	return (
		<>
			<button className='btn' onClick={() => setShow(!Show)}>
				Show/Hide
			</button>
			{Show && <Item />}
		</>
	);
};

const Item = () => {
	const [Size, setSize] = useState(window.innerWidth);

  const CheckSize = () => {
    setSize(window.innerWidth);
  }

	useEffect(() => {
		window.addEventListener('resize', CheckSize);
		return () => {
			window.removeEventListener('resize', CheckSize);
		};
	}, []);
  
	return (
		<div style={{ marginTop: '2rem' }}>
			<h1>window</h1>
			<h2>size: {Size}PX</h2>
		</div>
	);
};

export default ShowHide;

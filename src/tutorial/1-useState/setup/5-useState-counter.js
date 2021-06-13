import React, { useState } from 'react';

const UseStateCounter = () => {
	const [Value, setValue] = useState(0);

	const decreaseValue = () => {
    setValue(Value - 1)
  };

  const resetValue = () => {
    setValue(0)

  }

  const increaseValue = () => {
    setValue(Value + 1)
  }

  const increaseValueLater = () => {
    setTimeout(() => {
      // setValue(Value + 1)
      setValue((prevState) => {
        return prevState + 1
      })
    }, 1000);
  }
	return (
		<>
			<section style={{ margin: '4rem 0' }}>
				<h2>regular counter</h2>
				<h1>{Value}</h1>
				<button className='btn' onClick={decreaseValue}>
					decrease
				</button>
				<button
					className='btn'
					onClick={resetValue}
				>
					reset
				</button>
				<button className='btn' onClick={increaseValue}>
					increase
				</button>
			</section>
			<section style={{ margin: '4rem 0' }}>
				<h2>More complex counter</h2>
				<h1>{Value}</h1>
				<button className='btn' onClick={increaseValueLater}>
					increase later
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;

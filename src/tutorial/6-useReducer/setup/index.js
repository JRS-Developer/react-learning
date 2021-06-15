import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// reducer function
import reducer from './reducer'

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: 'hello world',
};

const Index = () => {
	// const [people, setPeople] = useState(data);
	// const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState('');
	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			const newItem = {
				name,
				id: new Date().getTime().toString(),
			};
			// payload se usa mucho como nombre de la variable asi que ahi se pone
			dispatch({ type: 'ADD_ITEM', payload: newItem });
			setName('');
		} else {
			dispatch({ type: 'NO_VALUE' });
		}
	};

	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' });
	};

	return (
		<>
			{state.isModalOpen && (
				<Modal
					modalContent={state.modalContent}
					closeModal={closeModal}
				/>
			)}
			<form onSubmit={handleSubmit} className='form'>
				<div>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type='submit'>Add</button>
			</form>
			{state.people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id} className="item">
						<h4>{name}</h4>
						<button
							onClick={() => {
								dispatch({ type: 'REMOVE_ITEM', payload: id });
							}}
						>
							Remove Item
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;

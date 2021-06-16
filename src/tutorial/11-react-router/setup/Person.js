import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
	const [name, setName] = useState('default name');
	const { id } = useParams();

	useEffect(() => {
		const Person = data.find((person) => {
			return person.id === parseInt(id);
		});
		const { name } = Person;
		setName(name);
	}, []);
	return (
		<div>
			<h1>{name}</h1>
			<Link to='/people' className='btn'>
				Back to People
			</Link>
		</div>
	);
};

export default Person;

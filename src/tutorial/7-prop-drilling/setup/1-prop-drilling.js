import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
		setPeople((pastPeople) => {
			return pastPeople.filter((person) => person.id !== id);
		});
	};

	return (
		<section>
			<h3>prop drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

const List = ({ people, removePerson }) => {
	return (
		<ul>
			{people.map((person) => {
				return (
					<SinglePerson
						{...person}
						key={person.id}
						removePerson={removePerson}
					/>
				);
			})}
		</ul>
	);
};

const SinglePerson = ({ id, name, removePerson }) => {
	return (
		<li className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>Remove Item</button>
		</li>
	);
};
export default PropDrilling;

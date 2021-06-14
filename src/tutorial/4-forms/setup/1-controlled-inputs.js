import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && email) {
			// const person = { firstName: firstName, email: email };

      // Aqui para obtener un ID unico se uso el new Date function pero es mejor usar una libreria llamada UUID
      
			const person = {id: new Date().getTime().toString(), firstName, email };
      setPeople((oldPeople) => {
        return [...oldPeople, person]
      })
      setEmail('')
      setFirstName('')
    } else {
			console.log('empty values');
		}
	};


	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name: </label>
						<input
							value={firstName}
							type='text'
							id='firstName'
							name='firstName'
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='Email'>Email: </label>
						<input
							value={email}
							type='email'
							id='Email'
							name='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type='submit'>Add person</button>
				</form>
        {
          people.map((person) => {
            const {id, firstName, email} = person
            return <div className="item" >
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          })
        }
			</article>
		</>
	);
};

export default ControlledInputs;

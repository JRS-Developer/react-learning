import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
	const [User, setUser] = useState([]);

	const GetUsers = async () => {
		const Data = await fetch(url);
		const Response = await Data.json();
		setUser(Response);
		console.log(Response);
	};

	useEffect(() => {
		GetUsers();
		// Si no usaba el array vacio se haria un cliclo infinito, mucho cuidado al hacer fetch data
	}, []);
	return (
		<>
			<h3>github users</h3>
			<ul className='users'>
				{User.map((user) => {
					const { id, login, avatar_url, html_url } = user;
					return (
						<li key={`user${id}`}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url} target="_blank">Profile</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default UseEffectFetchData;

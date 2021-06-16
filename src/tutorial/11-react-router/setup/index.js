import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about/' exact>
					<About />
				</Route>
				<Route path='/people/' exact>
					<People />
				</Route>
				<Route path='/person/:id' children={<Person />} />
				<Route>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default ReactRouterSetup;

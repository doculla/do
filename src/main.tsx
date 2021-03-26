import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from './router';

import './main.scss';

export default function App() {
	return (
		<div className="app">
			<Router basename="/do">
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/registration">Registration</Link>
						</li>
					</ul>
					<Switch>
						{routes.map(({ path, exact, component }) => (
							<Route path={path} exact={exact} component={component} />
						))}
					</Switch>
				</div>
			</Router>
		</div>
	);
}

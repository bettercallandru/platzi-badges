import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '../pages/HomePage';
import Badges from '../pages/Badges';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/badges/" component={Badges} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

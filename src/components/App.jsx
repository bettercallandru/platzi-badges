import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '../pages/HomePage';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from '../pages/BadgeDetails';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from './NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/platzi-badges" component={HomePage} />
					<Route exact path="/platzi-badges/badges/" component={Badges} />
					<Route exact path="/platzi-badges/badges/new" component={BadgeNew} />
					<Route
						exact
						path="/platzi-badges/badges/:badgeId"
						component={BadgeDetails}
					/>
					<Route
						exact
						path="/platzi-badges/badges/:badgeId/edit"
						component={BadgeEdit}
					/>
					<Route exact path="/platzi-badges/404" component={NotFound} />
					<Redirect from="*" to="/404" />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

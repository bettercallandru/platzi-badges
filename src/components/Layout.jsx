import React from 'react';

import Eventbar from './Eventbar';

function Layout(props) {
	return (
		<React.Fragment>
			<Eventbar />
			{props.children}
		</React.Fragment>
	);
}

export default Layout;

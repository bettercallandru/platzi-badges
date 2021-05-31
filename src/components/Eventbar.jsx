import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Eventbar.css';
import logo from '../images/logo.svg';

function Eventbar() {
	return (
		<div className="Eventbar">
			<Link className="Eventbar__brand font-color-primary" to="/platzi-badges/">
				<img className="Nabvar__brand-logo" src={logo} alt="Logo" />
				<span className="font-weight-light">Conference</span>
				<span className="font-weight-bold">badges</span>
			</Link>
		</div>
	);
}

export default Eventbar;

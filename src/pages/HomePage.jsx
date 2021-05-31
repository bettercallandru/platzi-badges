import React from 'react';
import { Link } from 'react-router-dom';

import './styles/HomePage.css';
import ConfLogo from '../images/platziconf-logo.svg';
import Astronauts from '../images/astronauts.svg';

function HomePage() {
	return (
		<div className="HomePage-hero">
			<div className="container HomePage__container">
				<div className="HomePage__introduce">
					<img className="HomePage-conf" src={ConfLogo} alt="Platzi Conf" />
					<section className="HomePage__introduce-text">
						<h1>print your badges</h1>
						<p>The easiest way to manage your conference</p>
					</section>
					<Link className="btn btn-primary link-unstyled" to="/badges/">
						Start now
					</Link>
				</div>
				<img className="HomePage-logo" src={Astronauts} alt="Astronautas" />
			</div>
		</div>
	);
}

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import api from '../api';
import ConfLogo from '../images/platziconf-logo.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, error: null, data: {} };
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async (e) => {
		this.setState({ loading: true, error: null, data: this.state.data });

		try {
			const data = await api.badges.list();

			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className="Badge-hero">
					<div className="container Badges__container">
						<img
							className="Badges-logo"
							src={ConfLogo}
							alt="Platzi conf logo"
						/>
					</div>
				</div>
				<div className="container Badges__container">
					<Link
						className="btn btn-primary link-unstyled Badges__link"
						to="/badges/new"
					>
						Add
					</Link>
					<BadgesList
						loading={this.state.loading}
						error={this.state.error}
						data={this.state.data}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;

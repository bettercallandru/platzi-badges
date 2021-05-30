import React from 'react';

import ConfLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: {
				firstName: '',
				lastName: '',
				jobTitle: '',
				email: '',
				twitter: '',
			},
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async (e) => {
		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });

		try {
			await api.badges.update(this.props.match.params.badgeId, this.state.data);
			this.setState({ loading: false });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	handleChange = (e) => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value },
		});
	};

	handleClear = (e) => {
		this.setState({
			data: {
				firstName: '',
				lastName: '',
				jobTitle: '',
				twitter: '',
				email: '',
			},
		});
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}

		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img
						className="BadgeNew-logo"
						src={ConfLogo}
						alt="PLatzi Conf logo"
					/>
				</div>
				<div className="container BadgeNew__container">
					<div className="row">
						<Badge data={this.state.data} />
					</div>
					<div className="row BadgeNew__form">
						<h1>New Attendant</h1>
						<BadgeForm
							form={this.state.data}
							handleSubmit={this.handleSubmit}
							handleChange={this.handleChange}
							handleClear={this.handleClear}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeEdit;

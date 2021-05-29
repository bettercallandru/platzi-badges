import React from 'react';
import ReactDOM from 'react-dom';

import './styles/BadgeNew.css';
import ConfLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Modal from '../components/Modal';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			error: null,
			form: {
				firstName: '',
				lastName: '',
				jobTitle: '',
				email: '',
				twitter: '',
			},
		};
	}

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleClear = (e) => {
		this.setState({
			form: {
				firstName: '',
				lastName: '',
				jobTitle: '',
				email: '',
				twitter: '',
			},
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });
		try {
			await api.badges.create(this.state.form);
			this.setState({ loading: false });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
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
						<Badge data={this.state.form} />
					</div>
					<div className="row BadgeNew__form">
						<h1>New Attendant</h1>
						<BadgeForm
							form={this.state.form}
							handleSubmit={this.handleSubmit}
							handleChange={this.handleChange}
							handleClear={this.handleClear}
						/>
					</div>
				</div>
				{this.state.loading &&
					ReactDOM.createPortal(
						<Modal>
							<PageLoading>Cargando Badge...</PageLoading>
						</Modal>,
						document.getElementById('modal')
					)}
			</React.Fragment>
		);
	}
}

export default BadgeNew;

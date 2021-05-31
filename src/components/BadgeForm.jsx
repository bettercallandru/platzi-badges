import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeForm.css';
import ArrowRight from '../images/icons/right-arrow.png';

function BadgeForm(props) {
	return (
		<form onSubmit={props.handleSubmit} className="BadgeForm">
			<label className="BadgeForm__label">
				First Name{' '}
				<input
					onChange={props.handleChange}
					value={props.form.firstName}
					name="firstName"
					type="text"
				/>
			</label>
			<label className="BadgeForm__label">
				Last Name{' '}
				<input
					onChange={props.handleChange}
					value={props.form.lastName}
					name="lastName"
					type="text"
				/>
			</label>
			<label className="BadgeForm__label">
				Email{' '}
				<input
					onChange={props.handleChange}
					value={props.form.email}
					name="email"
					type="email"
				/>
			</label>
			<label className="BadgeForm__label">
				Job Title{' '}
				<input
					onChange={props.handleChange}
					value={props.form.jobTitle}
					name="jobTitle"
					type="text"
				/>
			</label>
			<label className="BadgeForm__label">
				Twitter{' '}
				<input
					onChange={props.handleChange}
					value={props.form.twitter}
					name="twitter"
					type="text"
				/>
			</label>
			<Link className="BadgeForm-link" to="/platzi-badges/badges">
				<img className="icon" src={ArrowRight} alt="Right arrow" /> Go to Badges
				List
			</Link>
			<button
				onClick={props.handleClear}
				type="button"
				className="btn btn-danger"
			>
				Clear
			</button>
			<button type="submit" className="btn btn-primary">
				Save
			</button>
		</form>
	);
}

export default BadgeForm;

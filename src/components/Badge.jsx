import React from 'react';

import './styles/Badge.css';
import ConfLogo from '../images/badge-header.svg';

function Badge(props) {
	const data = props.data;

	return (
		<div className="Badge">
			<div className="Badge__header">
				<img src={ConfLogo} alt="Logo de la conferencia" />
			</div>

			<div className="Badge__section-name">
				<img className="Badge-avatar" src="" alt="Profile_picture" />
				<h1>
					{data.firstName || 'FIRST_NAME'} <br />
					{data.lastName || 'LAST_NAME'}
				</h1>
			</div>

			<div className="Badge__section-info">
				<h3>{data.jobTitle || 'Job_Title'}</h3>
				<div className="font-style-twitter">@{data.twitter || 'Twitter'}</div>
			</div>

			<div className="Badge__footer">#platziconf</div>
		</div>
	);
}

export default Badge;

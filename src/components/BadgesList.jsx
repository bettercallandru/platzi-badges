import React from 'react';

import './styles/BadgesList.css';
import PageLoading from './PageLoading';
import IconEdit from '../images/icons/edit.png';
import TwitterIcon from '../images/icons/twitter.png';
import EmailIcon from '../images/icons/email.png';

function BadgesList(props) {
	if (props.loading) {
		return <PageLoading />;
	}

	if (props.error) {
		return `La aplicacion salto error ${props.error.message}`;
	}

	return (
		<ul>
			{props.data.map((badge) => {
				return (
					<li className="Badge__item" key={badge.id}>
						<div className="Badge__header">
							<h3 className="font-normal font-weight-light">{`${badge.firstName} ${badge.lastName}`}</h3>
							<a href="">
								<img className="icon" src={IconEdit} alt="Edit the badge" />
							</a>
						</div>
						<div className="Badge__data">
							<img
								src="https://www.gravatar.com/avatar?"
								alt="Avatar del participante"
								className="Badge__data-avatar"
							/>
							<div className="Badge__data-description">
								<p>{badge.jobTitle}</p>
								<a className="BadgesList__link" href="">
									<img className="icon" src={EmailIcon} alt="email icon" />
									{badge.email}
								</a>
								<a className="BadgesList__link" href="">
									<img className="icon" src={TwitterIcon} alt="twitter icon" />@
									@{badge.twitter}
								</a>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default BadgesList;

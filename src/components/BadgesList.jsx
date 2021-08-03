import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import PageLoading from "./PageLoading";
import IconEdit from "../images/icons/edit.png";
import TwitterIcon from "../images/icons/twitter.png";
import EmailIcon from "../images/icons/email.png";

function BadgesList(props) {
  if (props.loading) {
    return <PageLoading />;
  }

  if (props.error) {
    return `La aplicacion salto error ${props.error.message}`;
  }

  return (
    <ul className="BadgesList">
      {props.data.map((badge) => {
        return (
          <li className="BadgeList__item" key={badge.id}>
            <div className="BadgeList__header">
              <h3 className="font-normal font-weight-light">{`${badge.firstName} ${badge.lastName}`}</h3>
              <Link to={`/badges/${badge.id}`}>
                <img className="icon" src={IconEdit} alt="Edit the badge" />
              </Link>
            </div>
            <div className="BadgeList__data">
              <img
                src="https://www.gravatar.com/avatar?"
                alt="Avatar del participante"
                className="Badge__data-avatar"
              />
              <div className="Badge__data-description">
                <p>{badge.jobTitle}</p>
                <a
                  className="BadgesList__link link-unstyled"
                  href={`mailto:${badge.email}`}
                >
                  <img className="icon" src={EmailIcon} alt="email icon" />
                  {badge.email}
                </a>
                <a
                  className="BadgesList__link link-unstyled"
                  href={`https://twitter.com/${badge.twitter}`}
                >
                  <img className="icon" src={TwitterIcon} alt="twitter icon" />@
                  {badge.twitter}
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

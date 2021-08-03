import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import api from "../api";
import ConfLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

class BadgeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, loading: true, error: null, data: {} };
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

  handleRemoveModal = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.state.data.id);

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ error: error });
    }
  };

  handleToggleModal = (e) => {
    const modal = !this.state.modal;
    this.setState({ modal: modal });
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeDetails-hero">
          <div className="container BadgeDetails__container">
            <img className="Badge-logo" src={ConfLogo} alt="Platzi Conf logo" />
            <h1 className="BadgeDetails__name">{`${this.state.data.firstName} ${this.state.data.lastName}`}</h1>
          </div>
        </div>
        <div className="container BadgeDetails__container">
          <div className="row">
            <Badge data={this.state.data} />
          </div>
          <div className="row">
            <h2>Actions:</h2>
            <Link
              to={`/badges/${this.state.data.id}/edit`}
              className="btn btn-primary link-unstyled"
            >
              Edit
            </Link>
            <button onClick={this.handleToggleModal} className="btn btn-danger">
              Delete
            </button>
            <DeleteBadgeModal
              isOpen={this.state.modal}
              deleteBadge={this.handleRemoveModal}
              closeModal={this.handleToggleModal}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeDetails;

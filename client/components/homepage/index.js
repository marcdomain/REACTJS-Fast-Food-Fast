import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './Container';
import UserAuth from '../userAuth';
import { getToken } from '../../utils';
import '../../styles/homepage.css';
import toggleMessage from '../../actions/toggleMessage';

class Homepage extends Component {
  state = {
    authModalName: false,
  }

  componentDidMount() {
    if (getToken()) {
      this.props.history.push('/menu');
    }
  }

  toggleAuth = (event) => {
    if (event.currentTarget === event.target) {
      this.setState({ authModalName: event.target.id });
    }
    this.props.toggleMessage();
  }

  render() {
    return (
      <div className="welcome" id="welcome">
        <div className="welcome-content">
          <Container toggleAuth={this.toggleAuth} />
        </div>
        <UserAuth authModalName={this.state.authModalName} toggleAuth={this.toggleAuth} />
      </div>
    );
  }
}

export default withRouter(connect(null, { toggleMessage })(Homepage));

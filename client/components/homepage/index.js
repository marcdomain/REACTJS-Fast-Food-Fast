import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import UserAuth from '../userAuth';
import '../../styles/homepage.css';
import toggleMessage from '../../actions/toggleMessage';

class Homepage extends Component {
  state = {
    authModalName: false,
  }

  toggleAuth = (event) => {
    if (event.currentTarget === event.target) {
      this.setState({ authModalName: event.target.id });
    }
    this.props.toggleMessage();
  }

  render() {
    return (
      <div className="welcome">
        <div className="welcome-content">
          <Container toggleAuth={this.toggleAuth} />
        </div>
        <UserAuth authModalName={this.state.authModalName} toggleAuth={this.toggleAuth} />
      </div>
    );
  }
}

export default connect(null, { toggleMessage })(Homepage);

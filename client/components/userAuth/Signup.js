import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SignupNewUser } from '../../actions/auth';
import AlertMessage from './Alert';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  }

  onChangeInput = event => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      username: name, email, phone, address, password
    } = this.state;

    const signupInputs = {
      name,
      email,
      phone,
      address,
      password
    };

    this.props.SignupNewUser(signupInputs);

    console.log('STATUS', this.props.displayMessageStatus);
    console.log('MESSAGE', this.props.displayMessage);

    this.props.history.push('/menu');
  }

  render() {
    return (
      <div className="auth-form">
        <form className="form-before-click" id="signupForm" onSubmit={this.handleSubmit}>
          <AlertMessage
            onSubmit={this.handleSubmit}
            displayMessage={this.props.displayMessage}
            displayMessageStatus={this.props.displayMessageStatus}
          />
          <span role="img" arial-label="Close" className="close close-signup" onClick={this.props.toggleAuth}>
            &#10062;
          </span>
          <br />
          <legend className="form-title">SIGNUP HERE</legend>
          <label htmlFor="name">
            Name: &nbsp;
            <input
              className="fullname"
              type="text"
              name="username"
              id="name"
              required
              placeholder="Enter full name"
              value={this.state.username}
              onChange={this.onChangeInput}
            />
          </label>
          <label htmlFor="email">
            Email: &nbsp;
            <input
              type="email"
              name="email"
              className="email"
              id="email"
              required
              placeholder="email@domain.com"
              value={this.state.email}
              onChange={this.onChangeInput}
            />
          </label>
          <label htmlFor="phone">
            Phone: &nbsp;
            <input
              type="phone"
              name="phone"
              className="phone"
              id="phone"
              required
              placeholder="Phone (08084842323)"
              value={this.state.phone}
              onChange={this.onChangeInput}
            />
          </label>
          <label htmlFor="address">
            Address: &nbsp;
            <input
              type="text"
              name="address"
              className="address"
              id="address"
              required
              placeholder="Residential address"
              value={this.state.address}
              onChange={this.onChangeInput}
            />
          </label>
          <label htmlFor="password">
            Password: &nbsp;
            <input
              type="password"
              className="password"
              id="password"
              name="password"
              required
              placeholder="Create password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>
          Have an account? &nbsp;
          <span id="login-modal" onClick={this.props.toggleAuth}>
            Login
          </span>
        </p>
      </div>
    );
  }
}

Signup.propTypes = {
  SignupNewUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  displayMessage: state.auths.response.message,
  displayMessageStatus: state.auths.response.status
});

export default withRouter(connect(mapStateToProps, { SignupNewUser })(Signup));

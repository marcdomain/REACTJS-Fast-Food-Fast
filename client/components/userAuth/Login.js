import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/auth';
import AlertMessage from './Alert';

class Login extends Component {
  state = {
    email: '',
    password: '',
    displayMessage: false
  }

  onChangeInput = event => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      email, password
    } = this.state;
    const loginInputs = {
      email,
      password
    };

    this.props.loginUser(loginInputs);
    this.setState({ displayMessage: this.props.displayMessage });
    this.setState({ displayMessage: this.props.displayMessageStatus });
  }

  render() {
    return (
      <div className="auth-form">
        <form className="form-before-click" id="loginForm" onSubmit={this.handleSubmit}>
          <AlertMessage
            onSubmit={this.handleSubmit}
            displayMessage={this.props.displayMessage}
            displayMessageStatus={this.props.displayMessageStatus}
          />
          <span className="close close-login" onClick={this.props.toggleAuth}>&#10062;</span>
          <br />
          <legend className="form-title">LOGIN HERE</legend>
          <label htmlFor="email">
            Email:&nbsp;
            <span className="formAlert" />
            <input
              type="email"
              name="email"
              id="email1"
              className="email1"
              required
              placeholder="example@domain.com"
              value={this.state.email}
              onChange={this.onChangeInput}
            />
          </label>
          <label htmlFor="password">
            Password:&nbsp;
            <span className="formAlert" />
            <input
              type="password"
              id="password1"
              className="password1"
              name="password"
              required
              placeholder="Input your password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>
          I'm new here. &nbsp;
          <span
            id="signup-modal"
            onClick={this.props.toggleAuth}
          >
            Signup
          </span>
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    displayMessage: state.auths.response.message,
    displayMessageStatus: state.auths.response.status
  };
};

export default connect(mapStateToProps, { loginUser })(Login);

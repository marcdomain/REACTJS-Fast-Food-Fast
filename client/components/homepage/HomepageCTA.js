import React from 'react';
import { Link } from 'react-router-dom';

const elementStyle = {
  color: '#fff',
  paddingTop: 20
};

const Buttons = props => (
  <div>
    <div className="auth-btn">
      <button type="button" id="signup" onClick={props.toggleAuth}>
        I'm new here
      </button>
      <button type="button" className="login" id="login" onClick={props.toggleAuth}>
        Login
      </button>
    </div>
    <Link to="/menu" style={{ textDecoration: 'none' }}>
      <div style={elementStyle}>Checkout Available Menu</div>
    </Link>
  </div>
);

export default Buttons;

import React from 'react';
import Signup from './Signup';
import Login from './Login';

const UserAuth = props => props.authModalName && (
  <div>
    <div className="modal" onClick={props.toggleAuth}>
      <div className="auth-modal-content">
        {props.authModalName.includes('signup') && <Signup toggleAuth={props.toggleAuth} className="" />}
        {props.authModalName.includes('login') && <Login toggleAuth={props.toggleAuth} name="auths" />}
      </div>
    </div>
  </div>
);

export default UserAuth;

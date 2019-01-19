import React from 'react';

const AlertMessage = props => (
  <div className={props.displayMessageStatus ? 'errorBox' : 'successBox'}>
    {props.displayMessage}
  </div>
);

export default AlertMessage;

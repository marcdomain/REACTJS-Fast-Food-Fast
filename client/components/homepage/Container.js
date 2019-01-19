import React from 'react';
import logo from '../../img/logo.png';
import IntroWords from './IntroWords';
import deliveryGirl from '../../img/delivery-girl.png';
import Buttons from './HomepageCTA';

const Container = props => (
  <div className="container">
    <h1 className="page-title">
      Welcome to &nbsp;
      <span>
        FAST-FOOD-FAST &nbsp;
        <img src={logo} alt="logo" />
      </span>
    </h1>

    <div className="intro">
      <div className="delivery-girl intro-content">
        <img src={deliveryGirl} alt="delivery-girl" />
      </div>

      <IntroWords />
    </div>

    <Buttons toggleAuth={props.toggleAuth} />
  </div>
);

export default Container;

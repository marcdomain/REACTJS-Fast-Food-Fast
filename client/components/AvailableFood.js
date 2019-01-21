import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import getAvailableFood from '../actions/availableFood';

class AvailableFood extends Component {
  state = {
    items: []
  }

  componentWillMount() {
    this.setState({ items: this.props.items });
    this.props.getAvailableFood();
  }

  render() {
    return (
      <div>
        <header>
          <div className="nav-bar">
            <div className="logo">
              <Link to="index.html">
                <img src={logo} alt="" />
                <span>Fast-Food-Fast</span>
              </Link>
            </div>
            <nav>
              <ul>
                <li className="username"><a href="orders.html">Profile</a></li>
                <li className="logout">
                  <a>Logout</a>
                </li>
                <li className="dropdown">
                  <span>&#8801;</span>
                  <div className="dropdown-content">
                    <a href="orders.html">Profile</a>
                    <a href="#" className="logout">Logout</a>
                  </div>
                </li>
              </ul>
            </nav>
            <nav className="guest">
              <ul>
                <li className="signup-menu"><a id="signup">Signup</a></li>
                <li className="login-menu"><a id="login">Login</a></li>
                <li className="dropdown">
                  <span>&#8801;</span>
                  <div className="dropdown-content">
                    <a href="#" id="signupDrop">Signup</a>
                    <a href="#" id="loginDrop">Login</a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="foodContainer">
          {console.log('PROPS', !this.props.items.length ? 'loading' : this.props.items)}
          {
            !this.props.items.length ? 'loading'
              : this.props.items.map(item => (
                <div className="menu" key={item.id}>
                  <div className="menuName">{item.menu}</div>
                  <img className="menuImage" src={item.imageurl} alt="menu" />
                  <div className="details">
                    <div className="description">{item.description}</div>
                    <div className="orderAction">
                      <div className="quantityForm">
                        <form>
                          <select id="quantity8" className="input" max="32">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                          <input type="submit" id="submit8" value="add" className="input send" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="price">{item.price}</div>
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}

AvailableFood.propTypes = {
  getAvailableFood: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.availableFood.response,
});

export default connect(mapStateToProps, { getAvailableFood })(AvailableFood);

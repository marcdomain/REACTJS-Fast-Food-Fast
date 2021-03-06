import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { Link, withRouter } from 'react-router-dom';
import logo from '../img/logo.png';
import getAvailableFood from '../actions/availableFood';
import {
  setCartInStorage, getCartInStorage, getToken, removeToken, removeCartInStorage
} from '../utils';
import PlaceOrder from './PlaceOrder';
import { orderUpdate } from '../actions/placeOrder';
import '../styles/homepage.css';

export class AvailableFood extends Component {
  state = {
    quantity: '',
    cartItems: [],
    isLoggedIn: false
  }

  componentDidMount() {
    this.setState({ items: this.props.items });
    this.props.getAvailableFood();
    this.props.orderUpdate(JSON.parse(getCartInStorage('orderItems')));

    if (getToken()) {
      this.setState({ isLoggedIn: true });
    }
  }

  logoutUser = () => {
    removeToken();
    removeCartInStorage();
    this.setState({ isLoggedIn: false });
    this.props.history.push('/');
  }

  onChangeInput = event => this.setState({ [event.target.name]: event.target.value });

  addToCart = (event, itemId, itemPrice, itemName, itemImg) => {
    event.preventDefault();
    if (!getToken()) {
      toastr.error('Login to add order to cart');
      return false;
    }
    const cartItem = {};
    cartItem.menuId = itemId;
    cartItem.quantity = this.state.quantity;
    cartItem.price = itemPrice;
    cartItem.menu = itemName;
    cartItem.imageUrl = itemImg;
    cartItem.amount = cartItem.quantity * cartItem.price;

    const updateCartList = (newObj, list) => {
      const cartList = list.slice();
      let cartIndex = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].menuId === newObj.menuId) {
          cartIndex = i;
          break;
        }
      }
      if (cartIndex !== -1) {
        cartList[cartIndex] = newObj;
        toastr.success('Item updated');
      } else {
        cartList.push(newObj);
        toastr.success('New item added to cart');
      }
      return cartList;
    };

    if (!JSON.parse(getCartInStorage('orderItems'))) {
      setCartInStorage(JSON.stringify([cartItem]));
      toastr.success('New item added to cart');
      return;
    }
    const cartUpdate = JSON.parse(getCartInStorage('orderItems'));
    const newCartList = updateCartList(cartItem, cartUpdate);

    setCartInStorage(JSON.stringify(newCartList));
  }

  render() {
    if (this.props.displayMessageStatus === 'Fail') {
      toastr.error('You are not logged in! Login when you are ready to place order.');
    }
    return (
      <div>
        <header>
          <div className="nav-bar">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
                <span>Fast-Food-Fast</span>
              </Link>
            </div>
            <nav style={{ display: getToken() || this.props.displayMessage ? 'flex' : 'none' }}>
              <ul>
                <li className="username">
                  <Link to="/orders">Orders</Link>
                </li>
                <li className="logout" onClick={this.logoutUser}>
                  Logout
                </li>
              </ul>
            </nav>
            <nav
              className="guest"
              style={
                {
                  display: getToken()
                || this.props.displayMessageStatus
                || this.props.displayMessageStatus === 'Fail' ? 'none' : 'flex'
                }
              }
            >
              <ul>
                <li className="signup-menu">
                  <Link to="/">Signup</Link>
                </li>
                <li className="login-menu">
                  <Link to="/">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="foodContainer">
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
                        <form
                          onSubmit={e => this.addToCart(e, item.id, item.price, item.menu, item.imageurl)}
                        >
                          <select className="input selectQuantity" name="quantity" onChange={this.onChangeInput}>
                            <option value="0" disabled defaultValue>0</option>
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
                          <input type="submit" value="add" className="input send" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="price">{item.price}</div>
                </div>
              ))
          }
        </div>
        <PlaceOrder {...this.props} />
      </div>
    );
  }
}

AvailableFood.defaultProps = {
  items: [],
};

AvailableFood.propTypes = {
  getAvailableFood: PropTypes.func.isRequired,
  items: PropTypes.oneOfType([PropTypes.array]),
};

const mapStateToProps = state => ({
  items: state.availableFood.response,
  cartItems: state.placeOrder.updatedOrder,
  displayMessage: state.auths.response.message,
  displayMessageStatus: state.auths.response.status
});

export default withRouter(connect(mapStateToProps, {
  getAvailableFood, orderUpdate
})(AvailableFood));

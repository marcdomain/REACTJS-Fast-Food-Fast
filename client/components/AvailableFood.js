import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import getAvailableFood from '../actions/availableFood';
import { setCartInStorage, getCartInStorage } from '../utils';
import PlaceOrder from './PlaceOrder';

class AvailableFood extends Component {
  state = {
    quantity: '',
  }

  componentWillMount() {
    this.setState({ items: this.props.items });
    this.props.getAvailableFood();
  }

  onChangeInput = event => this.setState({ [event.target.name]: event.target.value });

  addToCart = (event, itemId, itemPrice, itemName, itemImg) => {
    event.preventDefault();
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
                          <select className="input" name="quantity" onChange={this.onChangeInput}>
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
        <PlaceOrder />
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
});

export default connect(mapStateToProps, { getAvailableFood })(AvailableFood);

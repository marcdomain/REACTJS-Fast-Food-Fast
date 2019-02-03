import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastr from 'toastr';
import {
  getCartInStorage, decoded, setCartInStorage, removeCartInStorage
} from '../utils';
import placeOrderAction from '../actions/placeOrder';

class PlaceOrder extends Component {
  state = {
    deliveryLocation: '',
    total: '',
    showCart: false,
  }

  displayCart = () => {
    const orders = JSON.parse(getCartInStorage('orderItems'));
    if (orders === null || orders.length === 0) {
      toastr.error('Your cart is empty');
      return false;
    }
    const total = JSON.parse(getCartInStorage('orderItems'))
      .map(item => item.amount)
      .reduce((a, b) => a + b);
    this.setState({ total, showCart: true });
  }

  hideCart = (event) => {
    if (event.target === event.currentTarget) {
      this.setState({ showCart: false });
      return;
    }
    this.setState({ showCart: true });
  }

  onChangeInput = (event, id) => {
    const cart = JSON.parse(getCartInStorage('orderItems'));
    const foundOrder = cart.find(order => order.menuId === id);
    foundOrder.quantity = event.target.value;

    foundOrder.amount = foundOrder.quantity * foundOrder.price;

    setCartInStorage(JSON.stringify(cart));

    const total = cart
      .map(item => item.amount)
      .reduce((a, b) => a + b);

    this.setState({ amount: foundOrder.quantity * foundOrder.price, total });
    toastr.success('Item updated');
  }

  onKeyUpEvent = (event) => {
    this.setState({ deliveryLocation: event.target.value });
  }

  submitOrder = (event) => {
    event.preventDefault();

    const orderDetails = {
      userId: decoded.payload.id,
      orderItems: JSON.parse(getCartInStorage('orderItems')),
      location: this.state.deliveryLocation
    };

    this.props.placeOrderAction(orderDetails);
    toastr.success('Order was placed successully');
    this.setState({ showCart: false });
    removeCartInStorage('orderItems');
  }

  render() {
    const cartItems = JSON.parse(getCartInStorage('orderItems'));
    return (
      <div>
        <div className="toggle-cart" id="toggle-cart" onClick={this.displayCart}>
          <strong style={{ color: '#2091ad' }}>View Cart </strong>
          <span>
            &#9832;
          </span>
        </div>

        <div className="cart-modal" style={{ display: this.state.showCart ? 'block' : 'none' }} onClick={this.hideCart}>
          <div className="cart-dashboard">
            <div className="cart-items">
              {
                cartItems
                && cartItems.map(cartItem => (
                  <div className="newOrderDiv" key={cartItem.menuId}>
                    <img className="orderImageDiv" src={cartItem.imageUrl} alt="" />
                    <div className="orderDetails">
                      <span className="delete">
                        ✖
                        <span className="tool-tip">delete</span>
                      </span>
                      <i>&nbsp; Meal: </i>
                      {cartItem.menu}
                      <br />
                      <i>&nbsp; Amount: </i>
                      <span className="amount">
                        &#8358;
                        {
                          !cartItem.amount
                            ? cartItem.quantity * cartItem.price
                            : cartItem.amount
                        }
                      </span>
                      <br />
                      <i>&nbsp; Quantity: </i>
                      <select
                        className="cartQuantity"
                        onChange={e => this.onChangeInput(e, cartItem.menuId)}
                      >
                        <option defaultValue>{cartItem.quantity}</option>
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
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="cartTotal">
              TOTAL = &nbsp;&#8358;
              {this.state.total}
            </div>
            <div className="cartTotal" />
            <div className="order-cart" id="cartDiv">
              <form className="order-form" onSubmit={this.submitOrder}>
                <div className="decide">
                  Deliver to your residence? Yes:&nbsp;
                  <input type="checkbox" value="" />
                  <br />
                </div>
                No: &nbsp;
                <input
                  type="text"
                  placeholder="delivery location"
                  className="deliver-to"
                  minLength="5"
                  maxLength="100"
                  name="deliveryLocation"
                  onChange={this.onKeyUpEvent}
                />
                <br />
                <input type="submit" value="Submit Order" id="cartBtn" />
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

PlaceOrder.placeOrderAction = {
  placeOrderAction: PropTypes.func.isRequired,
};

export default connect(null, { placeOrderAction })(PlaceOrder);

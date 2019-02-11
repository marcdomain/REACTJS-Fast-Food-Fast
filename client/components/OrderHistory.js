import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { Link, withRouter } from 'react-router-dom';
import logo from '../img/logo.png';
import getOrderHistory from '../actions/orderHistory';
import {
  decoded, getToken, removeCartInStorage, removeToken
} from '../utils';
import '../styles/orders.css';
import deleteOrder from '../actions/deleteOrder';

export class OrderHistory extends Component {
  state = {
    deleteModal: false,
    orderId: '',
  }

  componentDidMount() {
    if (!getToken()) {
      toastr.error('Login to view your orders');
      return this.props.history.push('/menu');
    }

    const userId = decoded().payload.id;
    this.props.getOrderHistory(userId);
  }

  showDeleteModal = (id) => {
    this.setState({ deleteModal: true, orderId: id });
  }

  removeModal = (event) => {
    if (event.target === event.currentTarget) {
      this.setState({ deleteModal: false });
    }
  }

  deleteUserOrder = (event, orderId) => {
    event.preventDefault();
    this.props.deleteOrder(orderId);
    toastr.success('Order deleted successfully');
    this.setState({ deleteModal: false });
    setTimeout(() => {
      const userId = decoded.payload.id;
      this.props.getOrderHistory(userId);
    }, 50);
  }

  logoutUser = () => {
    removeToken();
    removeCartInStorage();
    this.setState({ isLoggedIn: false });
    this.props.history.push('/');
  }

  render() {
    const { orders } = this.props;
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
            <nav style={{ display: 'flex' }}>
              <ul>
                <li className="username">
                  <Link to="/orders">Orders</Link>
                </li>
                <li className="logout" onClick={this.logoutUser}>
                  Logout
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="orderlist-dashboard-content-bg">
          <div className="page-title all-orders">
            ORDER HISTORY
          </div>
          <div className="orders-list">
            <table className="all-orders-table">
              <tbody>
                <tr className="table-head">
                  <th>ID</th>
                  <th>Date</th>
                  <th>Phone</th>
                  <th>Location</th>
                  <th className="items-head">Order Items</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </tbody>
              { this.props.orders.response === 'None' ? <div className="empty-order">Your order history is empty</div>
                : orders.response.map((order) => {
                  const date = new Date(order.orderdate).toLocaleString();
                  return (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{date}</td>
                      <td>{order.phone}</td>
                      <td>{order.location}</td>
                      <td height="50" width="350">
                        <div className="orderlist-items">
                          <table>
                            <tbody>
                              {
                                order.orderitems.map(orderItem => (
                                  <tr key={orderItem.menu}>
                                    <td>
                                      <strong>Meal: </strong>
                                      &nbsp; &nbsp; &nbsp; &nbsp;
                                      {orderItem.menu}
                                      <br />
                                      <strong>Quantity: </strong>
                                      &nbsp;
                                      {orderItem.quantity}
                                      <br />
                                      <strong>Amount: </strong>
                                      &nbsp;
                                      {orderItem.amount}
                                      <br />
                                    </td>
                                  </tr>
                                ))
                              }
                            </tbody>
                          </table>
                        </div>
                      </td>
                      <td>
                          &#8358;
                        {order.total}
                      </td>
                      <td>
                        <button
                          type="submit"
                          onClick={() => this.showDeleteModal(order.id)}
                          style={{ background: 'red', boxShadow: '1px 2px 1px 0 gray', padding: '3px' }}
                        >
                          delete
                        </button>
                        <div
                          className="modal orderlist-delete-modal"
                          style={{ display: this.state.deleteModal ? 'block' : 'none' }}
                          onClick={this.removeModal}
                        >
                          <div className="orderlist-confirm-form">
                            <form
                              id="delete-form"
                              onSubmit={event => this.deleteUserOrder(event, this.state.orderId)}
                            >
                              <div className="confirm-text">Sure you want to delete?</div>
                              <input type="submit" value="delete" />
                            </form>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              }
            </table>
          </div>
        </div>
        <footer className="footer">
          ©
          <script>
            {(new Date().getFullYear())}
          </script>
          2019
          <strong> Fast-Food-Fast </strong>
          developed &amp; designed by
          <em> Marcdomain</em>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orderHistory,
});

export default withRouter(connect(mapStateToProps, { getOrderHistory, deleteOrder })(OrderHistory));

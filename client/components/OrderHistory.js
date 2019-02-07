import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import getOrderHistory from '../actions/orderHistory';
import { decoded } from '../utils';
import '../styles/orders.css';
import deleteOrder from '../actions/deleteOrder';

class OrderHistory extends Component {
  state = {
    deleteModal: false,
    orderId: ''
  }

  componentDidMount() {
    const userId = decoded.payload.id;
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

  render() {
    const { orders } = this.props;

    return (
      <div>
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
              {
                orders.response.map((order) => {
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

export default connect(mapStateToProps, { getOrderHistory, deleteOrder })(OrderHistory);

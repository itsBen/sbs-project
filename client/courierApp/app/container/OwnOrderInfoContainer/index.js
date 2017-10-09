import React, { Component } from 'react';
import { Alert } from 'react-native';
import * as firebase from 'firebase';
import moment from 'moment';

import OrderInfoComponent from '@components/OrderInfoComponent';

export default class extends Component {
  state = {
    disabled: false,
  };

  constructor(props) {
    super(props);
  }

  handlePurchaseOrder(order) {
    this.setState({ disabled: true });
    const uid = 'uidme';
    const newOrder = Object.assign(order, {
      status: 'purchased',
      purchasedAt: moment().format(),
    });
    const courierOrdersRef = firebase.database().ref('courierOrders/' + uid);
    courierOrdersRef.child('purchased/' + order.orderId).set(newOrder);
    courierOrdersRef.child('reserved/' + order.orderId).set({});
    this.alertPurchaseOrder();
  }

  alertPurchaseOrder() {
    Alert.alert(
      'Order',
      'Order marked as purchased',
      [{ text: 'OK', onPress: () => this.props.navigation.goBack() }],
      { cancelable: false }
    );
  }

  render() {
    const { order, hideButton } = this.props.navigation.state.params;
    return (
      <OrderInfoComponent
        order={order}
        buttonText="Mark as Purchased"
        onButtonPress={() => this.handlePurchaseOrder(order)}
        hideButton={hideButton}
        buttonDisabled={this.state.disabled}
      />
    );
  }
}

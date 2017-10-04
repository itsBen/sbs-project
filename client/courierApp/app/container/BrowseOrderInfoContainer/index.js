import React, { Component } from 'react';
import { Alert } from 'react-native';
import * as firebase from 'firebase';

import OrderInfoComponent from '@components/OrderInfoComponent';

export default class extends Component {
  state = {
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.handleReserveOrder = this.handleReserveOrder.bind(this);
    this.order = this.props.navigation.state.params.order;
    this.orderId = this.order.orderId;
  }

  handleReserveOrder() {
    this.setState({ disabled: true });
    const newOrder = Object.assign(this.order, {
      courier: 'me',
      status: 'reserved',
    });
    firebase
      .database()
      .ref('allOrders/reserved/' + this.orderId)
      .set(newOrder);
    firebase
      .database()
      .ref('courierOrders/' + 'uidme' + '/reserved/' + this.orderId)
      .set(newOrder);
    firebase
      .database()
      .ref('allOrders/pending/' + this.orderId)
      .set({});
    this.alertReservedOrder();
  }

  alertReservedOrder() {
    Alert.alert(
      'Reserved',
      'You just reserved this order, keep track of your orders in my orders tab',
      [{ text: 'OK', onPress: () => this.props.navigation.goBack() }],
      { cancelable: false }
    );
  }

  render() {
    return (
      <OrderInfoComponent
        order={this.order}
        buttonText="Reserve"
        onButtonPress={this.handleReserveOrder}
        hideButton={false}
        buttonDisabled={this.state.disabled}
      />
    );
  }
}

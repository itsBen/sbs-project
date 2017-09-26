import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Section, TableView } from 'react-native-tableview-simple';
import Modal from 'react-native-modal'
import * as firebase from 'firebase'

// Internal
import OrderCell from '@components/OrderCell'
import BackgroundImage from '@components/BackgroundImage'
import OrderInfoDialog from '@components/OrderInfoDialog'

import { defaultPaddings } from '../../config';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Browse Orders',
  };

  state = {
    orders: null,
    currentDetailsOrderId: null
  };

  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
  }

  componentWillMount() {
    firebase.database().ref('orders/').on('value', (snapshot) => {
      const orders = snapshot.val()
      this.setState({ orders: Object.values(orders) })
    })
  }

  handleReserveOrder() {
    console.log('reserved order!');
  }

  handleOpenDetails(OrderId) {
    this.setState({
      currentDetailsOrderId: OrderId,
    });
  }

  render() {
    const renderOrderDetailsModal = () => (
      <Modal
        isVisible={!!this.state.currentDetailsOrderId}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <OrderInfoDialog
          orderId={this.state.currentDetailsOrderId}
          size="bla"
          onReserveOrder={this.handleReserveOrder}
          onClose={() => this.setState({ currentDetailsOrderId: null })}
        />
      </Modal>
    );

    return (
      <BackgroundImage>
        {renderOrderDetailsModal()}
        <ScrollView
          style={styles.container}
          alwaysBounceVertical={false}
        >
          {
            !this.state.orders ? <ActivityIndicator size='large' style={styles.spinner}/>
            :
            <TableView>
              <Section sectionPaddingTop={0} sectionPaddingBottom={0}>
                { this.state.orders.map((order) => (
                  <OrderCell
                    key={order.orderId}
                    onReserveOrder={this.handleReserveOrder}
                    onOpenDetails={this.handleOpenDetails}
                    orderId={order.orderId}
                    orderDetails={order}
                  />
                ))}
              </Section>
            </TableView>
          }
      </ScrollView>
    </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinner: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

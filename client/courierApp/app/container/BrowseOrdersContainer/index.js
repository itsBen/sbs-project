import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Section, TableView } from 'react-native-tableview-simple';
import Modal from 'react-native-modal'

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
    currentDetailsOrderId: null,
  };

  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
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
        <TableView>
          <Section sectionPaddingTop={0} sectionPaddingBottom={0}>
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0001"
              orderDetails={{
                store: 'Alepa',
                logo: require('@assets/logo_alepa.png'),
                location: 'Near Amiraalinkatu',
                time: 10,
                numberOfItems: 5,
                totalPrice: 8.99,
                deliveryFee: 5
              }}
            />
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0002"
              orderDetails={{
                store: 'K-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Near Siltakuja',
                time: 8,
                numberOfItems: 12,
                totalPrice: 34.89,
                deliveryFee: 6
              }}
            />
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0003"
              orderDetails={{
                store: 'S-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Near Vanha Viertotie',
                time: 34,
                numberOfItems: 9,
                totalPrice: 15.60,
                deliveryFee: 8
              }}
            />
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0004"
              orderDetails={{
                store: 'Lidl',
                logo: require('@assets/logo_lidl.png'),
                location: 'Near Vierakuja',
                time: 29,
                numberOfItems: 12,
                totalPrice: 23.50,
                deliveryFee: 11
              }}
            />
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0005"
              orderDetails={{
                store: 'Alepa',
                logo: require('@assets/logo_alepa.png'),
                location: 'Near Amiraalinkatu',
                time: 10,
                numberOfItems: 5,
                totalPrice: 8.99,
                deliveryFee: 5
              }}
            />
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0006"
              orderDetails={{
                store: 'K-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Near Siltakatu',
                time: 8,
                numberOfItems: 12,
                totalPrice: 34.89,
                deliveryFee: 6
              }}
            />
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0009"
              orderDetails={{
                store: 'S-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Near Pikku Huopalahti',
                time: 34,
                numberOfItems: 9,
                totalPrice: 15.60,
                deliveryFee: 8
              }}
            />
            <OrderCell
              onReserveOrder={this.handleReserveOrder}
              onOpenDetails={this.handleOpenDetails}
              orderId="0006"
              orderDetails={{
                store: 'Lidl',
                logo: require('@assets/logo_lidl.png'),
                location: 'Near Kirkkokatu',
                time: 29,
                numberOfItems: 12,
                totalPrice: 23.50,
                deliveryFee: 11
              }}
            />
          </Section>
        </TableView>
      </ScrollView>
    </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

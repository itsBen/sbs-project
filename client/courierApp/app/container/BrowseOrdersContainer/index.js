import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Section, TableView } from 'react-native-tableview-simple';
import Modal from 'react-native-modal'
import * as firebase from 'firebase'

// Internal
import OrderCell from '@components/OrderCell'
import BackgroundImage from '@components/BackgroundImage'

import { defaultPaddings } from '../../config';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Browse Orders',
  };

  state = {
    orders: null
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    firebase.database().ref('allOrders/pending/').on('value', (snapshot) => {
      const orders = snapshot.val()
      if(orders)
        this.setState({ orders: Object.values(orders) })
    })
  }

  render() {
    return (
      <BackgroundImage>
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
                    orderDetails={order}
                    onPress={
                      () => this.props.navigation.navigate('OrderInfo', { store: order.store, orderId: order.orderId } )
                    }
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

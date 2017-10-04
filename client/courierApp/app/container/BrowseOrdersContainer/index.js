import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Section, TableView } from 'react-native-tableview-simple';
import Modal from 'react-native-modal';
import * as firebase from 'firebase';

// Internal
import BrowseOrderCell from '@components/BrowseOrderCell';
import BackgroundImage from '@components/BackgroundImage';
import Spinner from '@components/Spinner';

import { defaultPaddings } from '../../config';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Browse Orders',
  };

  state = {
    orders: null,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    firebase
      .database()
      .ref('allOrders/pending/')
      .on('value', snapshot => {
        const orders = snapshot.val();
        if (orders) this.setState({ orders: Object.values(orders) });
      });
  }

  render() {
    return (
      <BackgroundImage>
        {!this.state.orders ? (
          <Spinner />
        ) : (
          <ScrollView style={styles.container} alwaysBounceVertical={false}>
            <TableView>
              <Section sectionPaddingTop={0} sectionPaddingBottom={0}>
                {this.state.orders.map(order => (
                  <BrowseOrderCell
                    key={order.orderId}
                    orderDetails={order}
                    onPress={() =>
                      this.props.navigation.navigate('OrderInfo', { order })}
                  />
                ))}
              </Section>
            </TableView>
          </ScrollView>
        )}
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

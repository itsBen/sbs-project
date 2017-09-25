import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Section, TableView } from 'react-native-tableview-simple';
import OrderCell from '@components/OrderCell'
import BackgroundImage from '@components/BackgroundImage'

import { defaultPaddings } from '../../config';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Browse Orders',
  };
  render() {
    return (
      <BackgroundImage>
      <ScrollView
        style={styles.container}
        alwaysBounceVertical={false}
      >
        <TableView>
          <Section sectionPaddingTop={0} sectionPaddingBottom={0}>
            <OrderCell
              orderDetails={{
                store: 'Alepa',
                logo: require('@assets/logo_alepa.png'),
                location: 'Amiraalinkatu 3',
                time: 10,
                numberOfItems: 5,
                totalPrice: 8.99,
                deliveryFee: 5
              }}
            />
            <OrderCell
              orderDetails={{
                store: 'K-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Siltakuja 3',
                time: 8,
                numberOfItems: 12,
                totalPrice: 34.89,
                deliveryFee: 6
              }}
            />
            <OrderCell
              orderDetails={{
                store: 'S-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Vanha Viertotie 6',
                time: 34,
                numberOfItems: 9,
                totalPrice: 15.60,
                deliveryFee: 8
              }}
            />
            <OrderCell
              orderDetails={{
                store: 'Lidl',
                logo: require('@assets/logo_lidl.png'),
                location: 'Vierakuja 3',
                time: 29,
                numberOfItems: 12,
                totalPrice: 23.50,
                deliveryFee: 11
              }}
            />
            <OrderCell
              orderDetails={{
                store: 'Alepa',
                logo: require('@assets/logo_alepa.png'),
                location: 'Amiraalinkatu 3',
                time: 10,
                numberOfItems: 5,
                totalPrice: 8.99,
                deliveryFee: 5
              }}
            />
            <OrderCell
              orderDetails={{
                store: 'K-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Siltakuja 3',
                time: 8,
                numberOfItems: 12,
                totalPrice: 34.89,
                deliveryFee: 6
              }}
            />
            <OrderCell
              orderDetails={{
                store: 'S-Market',
                logo: require('@assets/logo_kmarket.png'),
                location: 'Vanha Viertotie 6',
                time: 34,
                numberOfItems: 9,
                totalPrice: 15.60,
                deliveryFee: 8
              }}
            />
            <OrderCell
              orderDetails={{
                store: 'Lidl',
                logo: require('@assets/logo_lidl.png'),
                location: 'Vierakuja 3',
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
    flex: 1,
    paddingVertical: 5
  },
});

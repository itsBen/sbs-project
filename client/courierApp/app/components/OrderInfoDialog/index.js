import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'
import Button, { SmallButton } from '@components/Button';
import IconButton from '@components/IconButton';

export default ({ orderDetails, onReserveOrder, onClose }) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Alepa</Text>
      </View>
    </View>
    <ScrollView style={{ flex: 1, alignSelf: 'stretch'}}>
    <View style={styles.body}>
      <View style={styles.bodyBody}>
        <TableView>
          <Section header="Grocery List" footer="Total: 6.80 €">
            <Cell
              cellStyle="RightDetail"
              title="Lactose-free Milk 1200l"
              detail=" ~ 1.20 €"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
            <Cell
              cellStyle="RightDetail"
              title="Lactose-free Milk 1200l"
              detail=" ~ 1.20 €"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
            <Cell
              cellStyle="RightDetail"
              title="Lactose-free Milk 1200l"
              detail=" ~ 1.20 €"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
          </Section>

          <Section header="Delivery Info">
            <Cell
              cellStyle="Subtitle"
              title="Location"
              detail="Near Katajanokanranta"
            />
            <Cell
              cellStyle="Subtitle"
              title="Deliver by"
              detail="Tue 26.09 19:45 (in 40 min)"
            />
            <Cell
              cellStyle="Subtitle"
              title="Earn delivery fee"
              detail="6 €"
            />
          </Section>
        </TableView>


      </View>
    </View>
  </ScrollView>

    <View style={styles.footer}>
      <View style={styles.footerBody}>
        <Button title="Reserve Order" />
        <View style={{ height: 10 }} />
        <SmallButton title="Cancel" buttonStyle="white" onPress={onClose} />
      </View>
    </View>
  </View>
);

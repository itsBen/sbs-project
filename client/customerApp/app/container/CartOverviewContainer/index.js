import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { TableView, Section, Cell } from 'react-native-tableview-simple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { defaultPaddings } from '../../config';
import Button from '../../components/Button';

const Screen = () => (
  <View style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.body}
      alwaysBounceVertical={false}
    >
      <TableView>
        <Section header="LIDL" sectionTintColor="#E9E9EF">
          <Cell
            accessory="DisclosureIndicator"
            cellStyle="RightDetail"
            title="2 x Lactose free milk"
            detail="0.89 € / Unit"
          />
        </Section>
        <Section header="PRISMA" sectionTintColor="#E9E9EF">
          <Cell
            accessory="DisclosureIndicator"
            cellStyle="RightDetail"
            title="Ruisleipä 500g"
            detail="1.50 €"
          />
          <Cell
            accessory="DisclosureIndicator"
            cellStyle="RightDetail"
            title="Lactose free milk"
            detail="0.89 €"
          />
        </Section>
        <Section
          header="DETAILS"
          footer="I accept that the prices may vary. Also there is no guarantee, that every requested product can be delivered."
          sectionTintColor="#E9E9EF"
        >
          <Cell
            cellStyle="RightDetail"
            title="Estimated cost of groceries"
            detail="4.17 €"
          />
          <Cell
            accessory="Detail"
            cellStyle="RightDetail"
            title="Estimated cost for delivery"
            detail="2.85 €"
          />
        </Section>
      </TableView>
    </ScrollView>
    <View style={styles.footer}>
      <Button title="Place order for 7.02 €" />
    </View>
  </View>
);

Screen.navigationOptions = {
  title: 'Cart',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {},
  footer: {
    paddingVertical: defaultPaddings.paddingHorizontal,
    paddingHorizontal: defaultPaddings.paddingHorizontal,
  },
});

export default Screen;

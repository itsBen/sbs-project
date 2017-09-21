import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { TableView, Section, Cell } from 'react-native-tableview-simple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { defaultPaddings } from '../../config';
import Button from '../../components/Button';

const Screen = () => (
  <ScrollView
    contentContainerStyle={styles.container}
    alwaysBounceVertical={false}
  >
    <View style={styles.body}>
      <TableView>
        <Section header="LIDL" sectionTintColor="#E9E9EF">
          <Cell
            cellStyle="RightDetail"
            title="2 x Lactose free milk"
            detail="0.89 € / Unit"
          />
        </Section>
        <Section header="PRISMA" sectionTintColor="#E9E9EF">
          <Cell
            cellStyle="RightDetail"
            title="Ruisleipä 500g"
            detail="1.50 €"
          />
          <Cell
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
            title="Estimated cost of Groceries"
            detail="4.17 €"
          />
          <Cell
            cellStyle="RightDetail"
            title="Estimated cost for Delivery"
            detail="2.85 €"
          />
        </Section>
      </TableView>
    </View>
    <View style={styles.footer}>
      <Button title="Place order for 7.02 €" />
    </View>
  </ScrollView>
);

Screen.navigationOptions = {
  title: 'Cart',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: defaultPaddings.paddingHorizontal,
  },
  body: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: defaultPaddings.paddingHorizontal,
  },
});

export default Screen;

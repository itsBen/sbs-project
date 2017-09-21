import React from 'react';

import { TableView, Section, Cell } from 'react-native-tableview-simple';

const Screen = () => (
  <TableView>
    <Section header="In Delivery" sectionTintColor="#E9E9EF">
      <Cell
        accessory="DisclosureIndicator"
        cellStyle="Subtitle"
        title="4 hours left"
        detail="LIDL – 7.25 €"
      />
    </Section>
    <Section header="Delivered Orders" sectionTintColor="#E9E9EF">
      <Cell
        accessory="DisclosureIndicator"
        cellStyle="Subtitle"
        title="21. September"
        detail="LIDL, Prisma – 7.25 €"
      />
      <Cell
        accessory="DisclosureIndicator"
        cellStyle="Subtitle"
        title="10. September"
        detail="Prisma – 2.25 €"
      />
    </Section>
  </TableView>
);

Screen.navigationOptions = {
  title: 'Orders',
};

export default Screen;

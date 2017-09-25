import React from 'react';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import BackgroundImage from '@components/BackgroundImage';

const Screen = () => (
  <BackgroundImage>
    <TableView>
      <Section header="In Delivery" sectionTintColor="#E9E9EF">
        <Cell
          accessory="DisclosureIndicator"
          cellStyle="Subtitle"
          title="4 hours left"
          detail="LIDL – 7.25 €"
          subtitleColor="#808080"
        />
      </Section>
      <Section header="Delivered Orders" sectionTintColor="#E9E9EF">
        <Cell
          accessory="DisclosureIndicator"
          cellStyle="Subtitle"
          title="21. September"
          detail="LIDL, Prisma – 7.25 €"
          subtitleColor="#808080"
        />
        <Cell
          accessory="DisclosureIndicator"
          cellStyle="Subtitle"
          title="10. September"
          detail="Prisma – 2.25 €"
          subtitleColor="#808080"
        />
      </Section>
    </TableView>
  </BackgroundImage>
);

Screen.navigationOptions = {
  title: 'Orders',
};

export default Screen;

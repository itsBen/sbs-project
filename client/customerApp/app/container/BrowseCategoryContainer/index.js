import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { TableView, Section } from 'react-native-tableview-simple';
import ProductCell from '../../components/ProductCell';

export default class extends PureComponent {
  render() {
    return (
      <TableView>
        <Section
          sectionTintColor="#E9E9EF"
          footer="I accept that the prices may vary. Also I accept, that there's no guarantee that the products are available at the written stores."
        >
          <ProductCell
            price="1.99 €"
            title="Low Fat Milk"
            subtitle="0.5 l (1 l = 3.98 €)"
            stores={['Lidl']}
            imageSource={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
          <ProductCell
            price="1.99 €"
            title="Lactose free"
            subtitle="0.5 l (1 l = 3.98 €)"
            stores={['Alepa', 'K-Market']}
            imageSource={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
          <ProductCell
            price="1.99 €"
            title="Piima"
            subtitle="0.5 l (1 l = 3.98 €)"
            stores={['Lidl']}
            imageSource={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
          <ProductCell
            price="1.99 €"
            title="Regular"
            subtitle="0.5 l (1 l = 3.98 €)"
            stores={['S-Market']}
            imageSource={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
        </Section>
      </TableView>
    );
  }
}

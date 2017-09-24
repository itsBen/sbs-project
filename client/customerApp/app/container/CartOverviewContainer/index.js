import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { defaultPaddings } from '../../config';
import Button from '../../components/Button';
import UpdateOrderDialog from '../../components/UpdateOrderDialog';

export default class extends PureComponent {
  navigationOptions = {
    title: 'Cart',
  };

  state = {
    currentDetailsProductId: null,
  };

  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
  }

  handleUpdateOrder() {
    console.log('bla!');
  }

  handleOpenDetails(productId) {
    this.setState({
      currentDetailsProductId: productId,
    });
  }

  render() {
    // Render Modal every time to allow animations
    const renderUpdateOrderModal = () => (
      <Modal
        isVisible={!!this.state.currentDetailsProductId}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <UpdateOrderDialog
          productId={this.state.currentDetailsProductId}
          size="bla"
          onUpdateOrder={this.handleUpdateOrder}
          onClose={() => this.setState({ currentDetailsProductId: null })}
        />
      </Modal>
    );

    return (
      <View style={styles.container}>
        {renderUpdateOrderModal()}
        <ScrollView
          contentContainerStyle={styles.body}
          alwaysBounceVertical={false}
        >
          <TableView>
            <Section header="CURRENT CART" sectionTintColor="#E9E9EF">
              <Cell
                accessory="DisclosureIndicator"
                cellStyle="RightDetail"
                title="2 x Lactose free milk"
                detail="0.89 € / Unit"
                onPress={() => this.handleOpenDetails(12)}
              />
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
              header="SUMMARY"
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
              <Cell
                accessory="DisclosureIndicator"
                cellStyle="RightDetail"
                title="Delivery due"
                detail="Today, 18.45"
              />
            </Section>
          </TableView>
        </ScrollView>
        <View style={styles.footer}>
          <Button title="Place Order for 7.02 €" />
        </View>
      </View>
    );
  }
}

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

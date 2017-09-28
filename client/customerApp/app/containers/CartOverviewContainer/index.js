import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { getTotal, getCartProducts } from '../../reducers';
import { defaultPaddings } from '../../config';
import Button from '../../components/Button';
import UpdateOrderDialog from '../../components/UpdateOrderDialog';

class Container extends PureComponent {
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

  handleOpenDetails(productDetails) {
    this.setState({
      currentProductDetails: productDetails,
    });
  }

  render() {
    // Render Modal every time to allow animations
    const renderUpdateOrderModal = () => (
      <Modal
        isVisible={!!this.state.currentProductDetails}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <UpdateOrderDialog
          productId={this.state.currentProductDetails}
          size="bla"
          onUpdateOrder={this.handleUpdateOrder}
          onClose={() => this.setState({ currentProductDetails: null })}
        />
      </Modal>
    );

    const cartProductsTotal = parseFloat(this.props.cartTotal);
    const deliveryCosts = 2.85;
    const totalCosts = (cartProductsTotal + deliveryCosts).toFixed(2);

    return (
      <View style={styles.container}>
        {renderUpdateOrderModal()}
        <ScrollView
          contentContainerStyle={styles.body}
          alwaysBounceVertical={false}
        >
          <TableView>
            <Section header="LIDL" sectionTintColor="#E9E9EF">
              {this.props.cartProducts.map((product, index) => (
                <Cell
                  key={index}
                  accessory="DisclosureIndicator"
                  cellStyle="RightDetail"
                  title={`${product.quantity} x ${product.name}`}
                  detail={`${(product.quantity * product.price).toFixed(2)} €`}
                  onPress={() => this.handleOpenDetails(product)}
                />
              ))}
            </Section>
            <Section
              header="SUMMARY"
              footer="I accept that the prices may vary. Also there is no guarantee, that every requested product can be delivered."
              sectionTintColor="#E9E9EF"
            >
              <Cell
                cellStyle="RightDetail"
                title="Estimated cost of groceries"
                detail={`${cartProductsTotal} €`}
              />
              <Cell
                accessory="Detail"
                cellStyle="RightDetail"
                title="Estimated cost for delivery"
                detail={`${deliveryCosts} €`}
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
          <Button title={`Place Order for maximum ${totalCosts} €`} />
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

const mapStateToProps = state => ({
  cartProducts: getCartProducts(state),
  cartTotal: getTotal(state),
});

export default connect(mapStateToProps)(Container);

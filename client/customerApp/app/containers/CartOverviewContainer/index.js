import React, { PureComponent } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { removeFromCart } from '../../actions';
import { getTotal, getCartProducts } from '../../reducers';
import { defaultPaddings } from '../../config';
import Button from '../../components/Button';
import UpdateOrderDialog from '../../components/UpdateOrderDialog';
import firebase from '../../api/firebase';

class Container extends PureComponent {
  static navigationOptions = {
    title: 'Cart',
  };

  state = {
    currentProductDetails: null,
  };

  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
    this.handleOrderRequest = this.handleOrderRequest.bind(this);
    this.handleRemoveOrder = this.handleRemoveOrder.bind(this);
  }

  handleUpdateOrder() {
    console.log('bla!');
  }

  handleOpenDetails(productDetails) {
    this.setState({
      currentProductDetails: productDetails,
    });
  }

  handleRemoveOrder(productId) {
    this.props.removeFromCart(productId);
    this.setState({
      currentProductDetails: null,
    });
  }

  handleOrderRequest() {
    const refByKey = 'allOrders/pending';
    //const refByCustomerId = `customerIrders/byCustomerId/001`;
    const key = firebase
      .database()
      .ref(refByKey)
      .push().key;

    const productData = this.props.cartProducts.map(product => {
      return {
        name: product.name,
        price: product.price,
        productId: product.id,
      };
    });

    const orderData = {
      location: 'Here',
      orderId: key,
      products: productData,
      status: 'pending',
      store: 'LIDL',
      timeLimit: '2017-09-28T13:44:14+03:00',
      deliveryFee: 2.85,
    };

    const updates = {};
    //updates[`${refByCustomerId}/${key}`] = orderData;
    updates[`${refByKey}/${key}`] = orderData;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => this.setState({ isSaving: false, error: null }))
      .catch(error => this.setState({ isSaving: false, error }));

    Alert.alert(
      'Order placed',
      'You will be notified when we found a courier for your order.',
      [{ text: 'OK', style: 'cancel' }]
    );
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
          onRemoveFromCart={() =>
            this.handleRemoveOrder(this.state.currentProductDetails.id)}
        />
      </Modal>
    );

    const cartProductsTotal = parseFloat(this.props.cartTotal);
    const deliveryCosts = 2.85;
    const totalCosts = (cartProductsTotal + deliveryCosts).toFixed(2);

    if (this.props.cartProducts.length === 0) {
      return (
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionViewText}>Your cart is empty.</Text>
        </View>
      );
    }
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
          <Button
            title={`Place Order for maximum ${totalCosts} €`}
            onPress={this.handleOrderRequest}
          />
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
  descriptionView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  },
  descriptionViewText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#636268',
    marginBottom: 15,
  },
});

const mapStateToProps = state => ({
  cartProducts: getCartProducts(state),
  cartTotal: getTotal(state),
});

export default connect(mapStateToProps, {
  removeFromCart,
})(Container);

import React, { PureComponent } from 'react';
import { Alert, FlatList, View } from 'react-native';
import Modal from 'react-native-modal';
import { Separator } from 'react-native-tableview-simple';
import { connect } from 'react-redux';

import { addToCart, fetchProductsByCategoryId } from '../../actions';
import { getProductsByCategoryId } from '../../reducers';
import ProductCell from '../../components/ProductCell';
import AddToCartDialog from '../../components/AddToCartDialog';

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
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentWillMount() {
    this.props.fetchProductsByCategoryId(
      this.props.navigation.state.params.categoryId
    );
  }

  handleAddToCart(productDetails) {
    this.props.addToCart(productDetails.id);
    Alert.alert(
      'Added to Cart',
      `You added ${productDetails.name} to your cart.`,
      [{ text: 'OK', style: 'cancel' }]
    );
  }

  handleOpenDetails(productDetails) {
    this.setState({
      currentProductDetails: productDetails,
    });
  }

  render() {
    // Render Modal every time to allow animations
    const renderAddToCartModal = () => (
      <Modal
        isVisible={!!this.state.currentProductDetails}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <AddToCartDialog
          productTitle={
            !!this.state.currentProductDetails &&
            this.state.currentProductDetails.hasOwnProperty('title')
              ? this.state.currentProductDetails.title
              : 'Product Details'
          }
          productPrice={
            !!this.state.currentProductDetails &&
            this.state.currentProductDetails.hasOwnProperty('price')
              ? this.state.currentProductDetails.price
              : 'No Information'
          }
          productImageSource={
            !!this.state.currentProductDetails &&
            this.state.currentProductDetails.hasOwnProperty('photoUrl') &&
            this.state.currentProductDetails.photoUrl.hasOwnProperty('file')
              ? {
                  uri: `https:${this.state.currentProductDetails.photoUrl.file
                    .url}`,
                }
              : null
          }
          size="bla"
          onAddToCart={() =>
            this.handleAddToCart(this.state.currentProductDetails)}
          onClose={() => this.setState({ currentProductDetails: null })}
        />
      </Modal>
    );
    return (
      <View style={{ flex: 1 }}>
        {renderAddToCartModal()}
        <FlatList
          data={this.props.products}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, separators }) => (
            <ProductCell
              onAddToCart={() => this.handleAddToCart(item)}
              onOpenDetails={() => this.handleOpenDetails(item)}
              productId={item.id}
              price={item.price}
              title={item.name}
              stores={['Lidl']}
              imageSource={
                item.photoUrl && item.photoUrl.hasOwnProperty('file')
                  ? {
                      uri: `https:${item.photoUrl.file.url}`,
                    }
                  : null
              }
              onHighlightRow={separators.highlight}
              onUnHighlightRow={separators.unhighlight}
            />
          )}
          ItemSeparatorComponent={({ highlighted }) => (
            <Separator isHidden={highlighted} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, currentProps) => ({
  products: getProductsByCategoryId(
    state,
    currentProps.navigation.state.params.categoryId
  ),
});

export default connect(mapStateToProps, {
  addToCart,
  fetchProductsByCategoryId,
})(Container);

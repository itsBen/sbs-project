import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import Modal from 'react-native-modal';
import { Separator } from 'react-native-tableview-simple';
import { connect } from 'react-redux';

import { getAllProducts } from '../../actions';
import { getProductsByCategoryId } from '../../reducers';
import ProductCell from '../../components/ProductCell';
import AddToCartDialog from '../../components/AddToCartDialog';

class Container extends PureComponent {
  state = {
    currentProductDetails: null,
  };

  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getAllProducts());
  }

  handleAddToCart() {
    console.log('bla!');
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
          size="bla"
          onAddToCart={this.handleAddToCart}
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
              title={item.title}
              stores={['Lidl']}
              imageSource={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
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

export default connect(mapStateToProps)(Container);

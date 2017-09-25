import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Modal from 'react-native-modal';
import { TableView, Section } from 'react-native-tableview-simple';
import ProductCell from '../../components/ProductCell';
import AddToCartDialog from '../../components/AddToCartDialog';

export default class extends PureComponent {
  state = {
    currentDetailsProductId: null,
  };

  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
  }

  handleAddToCart() {
    console.log('bla!');
  }

  handleOpenDetails(productId) {
    this.setState({
      currentDetailsProductId: productId,
    });
  }

  render() {
    // Render Modal every time to allow animations
    const renderAddToCartModal = () => (
      <Modal
        isVisible={!!this.state.currentDetailsProductId}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <AddToCartDialog
          productId={this.state.currentDetailsProductId}
          size="bla"
          onAddToCart={this.handleAddToCart}
          onClose={() => this.setState({ currentDetailsProductId: null })}
        />
      </Modal>
    );

    return (
      <View>
        {renderAddToCartModal()}
        <TableView>
          <Section
            sectionTintColor="#E9E9EF"
            footer="I accept that the prices may vary. Also I accept, that there's no guarantee that the products are available at the written stores."
          >
            <ProductCell
              onAddToCart={this.handleAddToCart}
              onOpenDetails={this.handleOpenDetails}
              productId="01AC"
              price="1.99 €"
              title="Low Fat Milk"
              stores={['Lidl']}
              imageSource={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
            />
            <ProductCell
              price="1.99 €"
              title="Lactose free"
              stores={['Alepa', 'K-Market']}
              imageSource={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
            />
            <ProductCell
              price="1.99 €"
              title="Piima"
              stores={['Lidl']}
              imageSource={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
            />
            <ProductCell
              price="1.99 €"
              title="Regular"
              stores={['S-Market']}
              imageSource={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
            />
          </Section>
        </TableView>
      </View>
    );
  }
}

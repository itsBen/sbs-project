import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Modal from 'react-native-modal';
import { TableView, Section } from 'react-native-tableview-simple';
import ProductCell from '../../components/ProductCell';
import AddToCartDialog from '../../components/AddToCartDialog';

export default class extends PureComponent {
  state = {
    currentProductId: null,
  };

  constructor(props) {
    super(props);
    this.handleOpenAddToCartModal = this.handleOpenAddToCartModal.bind(this);
  }

  handleAddToCart() {
    console.log('bla!');
  }

  handleOpenAddToCartModal(productId) {
    this.setState({
      currentProductId: productId,
    });
  }

  render() {
    console.log(this.state.currentProductId);
    // Render Modal every time to allow animations
    const renderAddToCartModal = () => (
      <Modal
        isVisible={!!this.state.currentProductId}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <AddToCartDialog
          productId={this.state.currentProductId}
          size="bla"
          onAddToCart={this.handleAddToCart}
          onClose={() => this.setState({ currentProductId: null })}
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
              onAddToCart={this.handleOpenAddToCartModal}
              productId="01AC"
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
      </View>
    );
  }
}

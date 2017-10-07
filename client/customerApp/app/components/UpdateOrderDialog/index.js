import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Button, { SmallButton } from '../Button';
import IconButton from '../IconButton';

export default class extends PureComponent {
  state = {
    quantity: this.props.quantity || 0,
    priceTotal: this.props.productPrice * this.props.quantity || 0,
  };

  setQuantity = quantity => {
    if (quantity < 0) return;
    this.setState({
      quantity,
      priceTotal: this.props.productPrice * quantity,
    });
  };

  render() {
    const {
      productTitle,
      productPrice,
      productImageSource,
      onClose,
      onUpdateQuantity,
      onAddToCart,
      onRemoveFromCart,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{productTitle}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyBody}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={productImageSource} />
            </View>

            <Text style={styles.pricelabel}>{`${this.state.priceTotal.toFixed(
              2
            )} €`}</Text>
            <View style={styles.quantitySelector}>
              <IconButton
                iconName="remove-circle-outline"
                colorScheme="white"
                onPress={() => this.setQuantity(this.state.quantity - 1)}
              />
              <Text style={styles.quantitySelector_value}>
                {this.state.quantity}
              </Text>
              <IconButton
                iconName="add-circle-outline"
                colorScheme="white"
                onPress={() => this.setQuantity(this.state.quantity + 1)}
              />
            </View>

            <View style={styles.metatable}>
              <View style={styles.metatableElement}>
                <Text style={styles.metatableElementLabel}>Size</Text>
                <Text style={styles.metatableElementValue}>0.5 l</Text>
              </View>
              <View style={styles.metatableElement}>
                <Text style={styles.metatableElementLabel}>Manufacturer</Text>
                <Text style={styles.metatableElementValue}>Valimo</Text>
              </View>
              <View style={styles.metatableElement}>
                <Text style={styles.metatableElementLabel}>Ingredients</Text>
                <Text style={styles.metatableElementValue}>
                  Lorem ipsum doter iter lokter fuht wers gasd birte sniope neqs
                  cunvxs corniclres
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerBody}>
            <Button
              title="Update Order"
              onPress={() => onUpdateQuantity(this.state.quantity)}
            />
            <View style={{ height: 10 }} />
            <SmallButton
              title="Remove Order"
              buttonStyle="white"
              onPress={onRemoveFromCart}
            />
            <View style={{ height: 10 }} />
            <SmallButton title="Cancel" buttonStyle="white" onPress={onClose} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    backgroundColor: 'rgb(230,37,101)',
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#fff',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 22,
  },
  bodyBody: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingBottom: 22,
  },
  footerBody: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  pricelabel: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  quantitySelector: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quantitySelector_value: {
    fontSize: 15,
    alignSelf: 'center',
  },
  metatable: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: 20,
  },
  metatableElement: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  metatableElementLabel: {
    color: '#333333',
    marginBottom: 3,
  },
  metatableElementValue: {
    color: '#4D4D4D',
  },
});

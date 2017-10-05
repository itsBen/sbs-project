import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import API from '@api';

import { SmallButton } from '../Button';
import styles from './styles';

export default class extends Component {
  state = {
    product: null,
  };

  componentWillMount() {
    API.getProductById(this.props.productId).then(res => {
      if (res.items.length > 0) {
        console.log(res.items[0].fields);
        this.setState({ product: res.items[0].fields });
      } else {
        window.alert('Error!');
      }
    });
  }

  render() {
    const { product } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{product ? product.name : ''}</Text>
          </View>
        </View>
        {!product ? (
          <ActivityIndicator size="large" style={styles.spinner} />
        ) : (
          <View style={styles.body}>
            <View style={styles.bodyBody}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: product.photoURL
                      ? product.photoURL
                      : 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              </View>

              <Text style={styles.pricelabel}>{product.price} €</Text>

              <View style={styles.metatable}>
                <View style={styles.metatableElement}>
                  <Text style={styles.metatableElementLabel}>Size</Text>
                  <Text style={styles.metatableElementValue}>
                    {product.size &&
                      product.size.value + ' ' + product.size.unit}
                  </Text>
                </View>
                <View style={styles.metatableElement}>
                  <Text style={styles.metatableElementLabel}>Brand</Text>
                  <Text style={styles.metatableElementValue}>
                    {product.brand}
                  </Text>
                </View>
                <View style={styles.metatableElement}>
                  <Text style={styles.metatableElementLabel}>Dimensions</Text>
                  <Text style={styles.metatableElementValue}>
                    {product.dimensions}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        <View style={styles.footer}>
          <View style={styles.footerBody}>
            <View style={{ height: 10 }} />
            <SmallButton
              title="Cancel"
              buttonStyle="white"
              onPress={this.props.onClose}
            />
          </View>
        </View>
      </View>
    );
  }
}

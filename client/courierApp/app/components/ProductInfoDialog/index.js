import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import API from '@api'

import { SmallButton } from '../Button';
import styles from './styles'

export default class extends Component {
  state = {
    product: null
  }

  componentWillMount() {
    API.getProductById(this.props.productId).then((res) => {
      if (res.status === 200) {
        this.setState({ product: res.data })
      } else {
        window.alert('Error!')
      }
    })
  }

  render() {
    const { product } = this.state
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{product ? product.name : ''}</Text>
            </View>
          </View>
          {
            !product ? <ActivityIndicator size='large' style={styles.spinner}/>
            :
            <View style={styles.body}>
              <View style={styles.bodyBody}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                  />
                </View>

                <Text style={styles.pricelabel}>{product.avgPrice} €</Text>

                <View style={styles.metatable}>
                  <View style={styles.metatableElement}>
                    <Text style={styles.metatableElementLabel}>Size</Text>
                    <Text style={styles.metatableElementValue}>{product.size.value + ' ' + product.size.unit}</Text>
                  </View>
                  <View style={styles.metatableElement}>
                    <Text style={styles.metatableElementLabel}>Brand</Text>
                    <Text style={styles.metatableElementValue}>NONE</Text>
                  </View>
                  <View style={styles.metatableElement}>
                    <Text style={styles.metatableElementLabel}>Contains</Text>
                    <Text style={styles.metatableElementValue}>
                      Lorem ipsum doter iter lokter fuht wers gasd birte sniope neqs
                      cunvxs corniclres
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          }
          <View style={styles.footer}>
            <View style={styles.footerBody}>
              <View style={{ height: 10 }} />
              <SmallButton title="Cancel" buttonStyle="white" onPress={this.props.onClose} />
            </View>
          </View>
        </View>
    )
  }
}

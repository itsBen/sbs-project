import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'
import { TableView, Section, Cell } from 'react-native-tableview-simple'

import Button, { SmallButton } from '../Button';
import styles from './styles'
import CheckBox from '../CheckBox'
import ListHeaderSection from '../ListHeaderSection'

export default class extends Component {
  render() {
    const { order } = this.props
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{order ? order.store : ''}</Text>
            </View>
          </View>
          {
            !order ? <ActivityIndicator size='large' style={styles.spinner}/>
            :
            <View style={styles.body}>
              <View style={styles.bodyBody}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                  />
                </View>

                <Text style={styles.pricelabel}>{order.totalPrice} €</Text>

                <TableView>
                  <Section
                    header="Grocery List"
                    sectionPaddingBottom={0}
                    footer={'Total ' + order.totalPrice + 'e'}
                  >
                    {
                      Object.values(order.products).map((product) => {
                        return (
                          <Cell
                            cellContentView={
                              <View style={{flexDirection: 'row', alignItems: 'center'}} key={product.productId}>
                                <CheckBox />
                                <Text>{product.title} - {product.estimatedPrice} e</Text>
                              </View>
                            }
                          />
                        )
                      })
                    }

                  </Section>

                </TableView>

              </View>
            </View>
          }
          <View style={styles.footer}>
            <View style={styles.footerBody}>
              <View style={{ height: 10 }} />
              <Button title="Mark as purchased" onPress={this.props.handlePurchasedOrder}/>
              <SmallButton title="Cancel" buttonStyle="white" onPress={this.props.onClose} />
            </View>
          </View>
        </View>
    )
  }
}

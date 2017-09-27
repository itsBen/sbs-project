import React, {Component} from 'react';
import { Image, Text, View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
import moment from 'moment'

import styles from './styles'
import BackgroundImage from '@components/BackgroundImage'
import ProductInfoDialog from '@components/ProductInfoDialog'
import ListHeaderSection from '@components/ListHeaderSection'
import OrderDetailsCell from '@components/OrderDetailsCell'
import Button from '@components/Button';

export default class extends Component {
    state = {
      currentDetailsProductId: null,
      order: null,
      disabled: null
    };

    constructor(props) {
      super(props);
      this.orderId = this.props.navigation.state.params.orderId
      this.handleOpenDetails = this.handleOpenDetails.bind(this);
      this.handleReserveOrder = this.handleReserveOrder.bind(this);
    }

    componentWillMount() {
      firebase.database().ref('orders/' + this.orderId).on('value', (snapshot) => {
        const order = snapshot.val()
        this.setState({ order })
      })
    }

    handleOpenDetails(productId) {
      this.setState({
        currentDetailsProductId: productId,
      });
    }

    handleReserveOrder() {
      this.setState({ disabled: true })
      const newOrder = Object.assign(this.state.order, { courier: 'me', status: 'reserved'} )
      firebase.database().ref('allOrders/reserved/' + this.orderId).set(newOrder)
      firebase.database().ref('courierOrders/' + 'uidme' + '/reserved/' + this.orderId).set(this.state.order)
      firebase.database().ref('allOrders/pending/' + this.orderId).set({})
      this.alertReservedOrder()
    }

    alertReservedOrder() {
      Alert.alert(
        'Reserved',
        'You just reserved this order, keep track of your orders in my orders tab',
        [
          {text: 'OK', onPress: () => this.props.navigation.goBack()},
        ],
        { cancelable: false }
      )
    }

    render() {
      const { order } = this.state
      // Render Modal every time to allow animations
      const renderProductInfoModal = () => (
        <Modal
          isVisible={!!this.state.currentDetailsProductId}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
        >
          <ProductInfoDialog
            productId={this.state.currentDetailsProductId}
            onClose={() => this.setState({ currentDetailsProductId: null })}
          />
        </Modal>
      );
    return (
      <BackgroundImage>
        {
          !order ? <ActivityIndicator />
          :
          <View style={styles.container}>
            {renderProductInfoModal()}
            <ScrollView>
              <TableView>
                <View style={{ marginBottom: 10 }}>
                <Section
                  headerComponent={ListHeaderSection('Grocery List')}
                  sectionPaddingTop={0}
                  footer={"Total: " + order.totalPrice + ' €'}
                >
                  {
                    Object.values(order.products).map((product) => (
                      <Cell
                        key={product.productId}
                        cellStyle="RightDetail"
                        title={product.title}
                        detail={" ~ " + product.estimatedPrice + " €"}
                        accessory="DisclosureIndicator"
                        onPress={() => this.handleOpenDetails(product.productId)}
                        image={
                          <Image
                            style={{ borderRadius: 5 }}
                            source={{
                              uri: 'https://facebook.github.io/react/img/logo_og.png',
                            }}
                          />
                        }
                      />
                    ))
                  }
                </Section>
              </View>

              <Section
                headerComponent={ListHeaderSection('Details')}
                sectionPaddingTop={0}
                sectionPaddingBottom={0}
              >
                <Cell
                  cellContentView={OrderDetailsCell('Location', 'Near ' + order.location, 'location-on')}
                />
                <Cell
                  cellContentView={OrderDetailsCell('Deliver by', moment(order.timeLimit).format('MM.DD.YY h:mm a') , 'access-time')}
                />
                <Cell
                  cellContentView={OrderDetailsCell('Earn delivery fee', order.deliveryFee + ' €', 'attach-money')}
                />
              </Section>
            </TableView>
          </ScrollView>

          <View style={styles.footer}>
            <View style={styles.footerBody}>
              <Button title="Reserve Order" disabled={this.state.disabled} onPress={this.handleReserveOrder}/>
            </View>
          </View>
        </View>
        }
      </BackgroundImage>
    )
  }
}

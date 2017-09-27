import React, { Component } from 'react'
import { View, Text, ActivityIndicator, Alert } from 'react-native'
import * as firebase from 'firebase'
import moment from 'moment'
import Modal from 'react-native-modal'
import { TableView, Section, Cell } from 'react-native-tableview-simple';

import BackgroundImage from '@components/BackgroundImage';
import ListHeaderSection from '@components/ListHeaderSection'
import OwnReservedOrderDialog from '@components/OwnReservedOrderDialog'
import OwnPurchasedOrderDialog from '@components/OwnPurchasedOrderDialog'
import OwnDeliveredOrderDialog from '@components/OwnDeliveredOrderDialog'

const NoneViewCell = () => (
  <View style={{ height: 40, paddingLeft: 10, justifyContent: 'center' }}>
    <Text style={{ color: '#373737', fontSize: 16 }}>None</Text>
  </View>
)

const MyOrdersOverviewCell = ({ order, ...props }) => (
  <Cell
    accessory="DisclosureIndicator"
    cellStyle="Subtitle"
    detail={order.store + ' - ' + order.totalPrice + ' €'}
    subtitleColor="#808080"
    {...props}
  />
)

class Screen extends Component {
  state = {
    ownOrders: null,
    selectedOwnOrder: null,
    selectedOrderStatus: null
  }

  constructor(props) {
    super(props)
    this.handleOpenDetails = this.handleOpenDetails.bind(this)
  }

  componentWillMount() {
    const uid = 'uidme'
    firebase.database().ref('courierOrders/' + uid).on('value', (snapshot) => {
      const ownOrders = snapshot.val()
      if(ownOrders) {
        this.setState({ ownOrders })
      }
    })
  }

  handlePurchasedOrder(order) {
    const uid = 'uidme'
    const newOrder = Object.assign(order, { status: 'purchased' })
    const courierOrdersRef = firebase.database().ref('courierOrders/' + uid)
    courierOrdersRef.child('purchased/' + order.orderId).set(newOrder)
    courierOrdersRef.child('reserved/' + order.orderId).set({})
    this.alertPurchasedOrder()
  }

  alertPurchasedOrder() {
    Alert.alert(
      'Order',
      'Order marked as purchased',
      [
        {text: 'OK', onPress: () => this.setState({ selectedOwnOrder: null, selectedOrderStatus: null })},
      ],
      { cancelable: false }
    )
  }

  handleOpenDetails(order, status) {
    this.setState({
      selectedOwnOrder: order,
      selectedOrderStatus: status
    });
  }

  render() {
    const renderReservedOrderModal = () => (
      <Modal
        isVisible={this.state.selectedOrderStatus === 'reserved'}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <OwnReservedOrderDialog
          order={this.state.selectedOwnOrder}
          handlePurchasedOrder={() => this.handlePurchasedOrder(this.state.selectedOwnOrder)}
          onClose={() => this.setState({ selectedOwnOrder: null, selectedOrderStatus: null })}
        />
      </Modal>
    )

    const renderPurchasedOrderModal = () => (
      <Modal
        isVisible={this.state.selectedOrderStatus === 'purchased'}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <OwnPurchasedOrderDialog
          order={this.state.selectedOwnOrder}
          onClose={() => this.setState({ selectedOwnOrder: null, selectedOrderStatus: null })}
        />
      </Modal>
    )

    const renderDeliveredOrderModal = () => (
      <Modal
        isVisible={this.state.selectedOrderStatus === 'delivered'}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        <OwnDeliveredOrderDialog
          order={this.state.selectedOwnOrder}
          onClose={() => this.setState({ selectedOwnOrder: null, selectedOrderStatus: null })}
        />
      </Modal>
    )

    return (
      <BackgroundImage>
        {renderReservedOrderModal()}
        {renderPurchasedOrderModal()}
        {renderDeliveredOrderModal()}
        <TableView>
          <ListHeaderSection
            header="In Delivery"
            sectionPaddingBottom={0}
            sectionTintColor="white"
          >
            {
              this.state.ownOrders
                ? this.state.ownOrders.reserved
                ? Object.values(this.state.ownOrders.reserved).map((order) => (
                  <MyOrdersOverviewCell
                    key={order.orderId}
                    order={order}
                    title={'Deliver ' + moment(order.timeLimit).fromNow()}
                    onPress={() => this.handleOpenDetails(order, 'reserved')}
                  />
                ))
                : <NoneViewCell />
                : <ActivityIndicator />
            }
          </ListHeaderSection>

          <ListHeaderSection
            header="Purchased"
            sectionPaddingBottom={0}
            sectionTintColor="white"
          >
            {
              this.state.ownOrders
                ? this.state.ownOrders.purchased
                ? Object.values(this.state.ownOrders.purchased).map((order) => (
                  <MyOrdersOverviewCell
                    key={order.orderId}
                    order={order}
                    title={'Deliver ' + moment(order.timeLimit).fromNow()}
                    onPress={() => this.handleOpenDetails(order, 'purchased')}
                  />
                ))
                : <NoneViewCell />
                : <ActivityIndicator />
            }
          </ListHeaderSection>

          <ListHeaderSection
            header="Delivered"
            sectionPaddingBottom={0}
            sectionTintColor="white"
          >
            {
              this.state.ownOrders
                ? this.state.ownOrders.delivered
                ? Object.values(this.state.ownOrders.delivered).map((order) => (
                  <MyOrdersOverviewCell
                    key={order.orderId}
                    order={order}
                    title={'Delivered ' + moment(order.timeLimit)}
                    onPress={() => this.handleOpenDetails(order, 'delivered')}
                  />
                ))
                : <NoneViewCell />
                : <ActivityIndicator />
            }
          </ListHeaderSection>
        </TableView>
      </BackgroundImage>
    )
  }
}

Screen.navigationOptions = {
  title: 'My Orders',
};

export default Screen;

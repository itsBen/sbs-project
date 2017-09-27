import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import * as firebase from 'firebase'
import moment from 'moment'
import Modal from 'react-native-modal'
import { TableView, Section, Cell } from 'react-native-tableview-simple'

import BackgroundImage from '@components/BackgroundImage'
import Spinner from '@components/Spinner'
import ListHeaderSection from '@components/ListHeaderSection'
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
    ownOrders: null
  }

  constructor(props) {
    super(props)
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

  render() {
    return (
      <BackgroundImage>
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
                    onPress={() => this.props.navigation.navigate('OrderInfo', { order: order, hideButton: false })}
                  />
                ))
                : <NoneViewCell />
                : <Spinner />
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
                    onPress={() => this.props.navigation.navigate('OrderInfo', { order: order, hideButton: true })}
                  />
                ))
                : <NoneViewCell />
                : <Spinner />
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
                    onPress={() => this.props.navigation.navigate('OrderInfo', { order: order, hideButton: true })}
                  />
                ))
                : <NoneViewCell />
                : <Spinner />
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

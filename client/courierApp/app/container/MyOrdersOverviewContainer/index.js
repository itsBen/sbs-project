import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'
import moment from 'moment'
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import BackgroundImage from '@components/BackgroundImage';
import ListHeaderSection from '@components/ListHeaderSection'

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

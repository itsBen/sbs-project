import React, {Component} from 'react';
import { Image, Text, View, ScrollView, Alert } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
import moment from 'moment'

import styles from './styles'
import BackgroundImage from '@components/BackgroundImage'
import Spinner from '@components/Spinner'
import ProductInfoDialog from '@components/ProductInfoDialog'
import ListHeaderSection from '@components/ListHeaderSection'
import OrderDetailsCell from '@components/OrderDetailsCell'
import Button from '@components/Button';

export default class extends Component {
    state = {
      currentDetailsProductId: null,
    };

    constructor(props) {
      super(props);
      this.handleOpenDetails = this.handleOpenDetails.bind(this);
    }

    handleOpenDetails(productId) {
      this.setState({
        currentDetailsProductId: productId,
      });
    }

    render() {
      const { order, buttonDisabled } = this.props
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
          !order ? <Spinner />
          :
          <View style={styles.container}>
            {renderProductInfoModal()}
            <ScrollView>
              <TableView>
              <ListHeaderSection
                header='Grocery List'
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
              </ListHeaderSection>

              <ListHeaderSection
                header='Details'
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
                <Cell
                  cellContentView={OrderDetailsCell('Status', order.status, 'info')}
                />
                {
                  order.purchasedAt
                    && <Cell
                      cellContentView={OrderDetailsCell('Purchased at', moment(order.purchasedAt).format('MM.DD.YY h:mm a'), 'shopping-basket')}
                    />
                }
              </ListHeaderSection>
            </TableView>
          </ScrollView>

          {
            !this.props.hideButton
              && <View style={styles.footer}>
                <View style={styles.footerBody}>
                  <Button title={this.props.buttonText} disabled={this.props.buttonDisabled} onPress={this.props.onButtonPress}/>
                </View>
              </View>
          }

        </View>
        }
      </BackgroundImage>
    )
  }
}

import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Alert } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import Modal from 'react-native-modal';
import * as firebase from 'firebase';
import moment from 'moment';

import styles from './styles';
import BackgroundImage from '@components/BackgroundImage';
import Spinner from '@components/Spinner';
import ProductInfoDialog from '@components/ProductInfoDialog';
import ListHeaderSection from '@components/ListHeaderSection';
import OrderDetailsCell from '@components/OrderDetailsCell';
import Button from '@components/Button';
import { getTotalPrice } from '@utilities';

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
    const { order, buttonDisabled } = this.props;
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
        {!order ? (
          <Spinner />
        ) : (
          <View style={styles.container}>
            {renderProductInfoModal()}
            <ScrollView>
              <TableView>
                <ListHeaderSection
                  header="Grocery List"
                  footer={'Total: ' + getTotalPrice(order.products) + ' €'}
                >
                  {Object.values(order.products).map(product => (
                    <Cell
                      key={product.id}
                      cellStyle="RightDetail"
                      title={product.name}
                      detail={' ~ ' + product.price + ' €'}
                      accessory="DisclosureIndicator"
                      onPress={() => this.handleOpenDetails(product.productId)}
                      image={
                        <Image
                          style={{ borderRadius: 5 }}
                          source={{
                            uri:
                              'https://facebook.github.io/react/img/logo_og.png',
                          }}
                        />
                      }
                    />
                  ))}
                </ListHeaderSection>

                <ListHeaderSection header="Details" sectionPaddingBottom={0}>
                  <Cell
                    cellContentView={
                      <OrderDetailsCell
                        label="Location"
                        info={'Near ' + order.location}
                        iconName="location-on"
                      />
                    }
                  />
                  <Cell
                    cellContentView={
                      <OrderDetailsCell
                        label="Deliver by"
                        info={moment(order.timeLimit).format('MM.DD.YY h:mm a')}
                        iconName="access-time"
                      />
                    }
                  />
                  <Cell
                    cellContentView={
                      <OrderDetailsCell
                        label="Earn delivery fee"
                        info={order.deliveryFee + ' €'}
                        iconName="attach-money"
                      />
                    }
                  />
                  <Cell
                    cellContentView={
                      <OrderDetailsCell
                        label="Status"
                        info={order.status}
                        iconName="info"
                      />
                    }
                  />
                  {order.purchasedAt && (
                    <Cell
                      cellContentView={
                        <OrderDetailsCell
                          label="Purchased at"
                          info={moment(order.purchasedAt).format(
                            'MM.DD.YY h:mm a'
                          )}
                          iconName="shopping-basket"
                        />
                      }
                    />
                  )}
                </ListHeaderSection>
              </TableView>
            </ScrollView>

            {!this.props.hideButton && (
              <View style={styles.footer}>
                <View style={styles.footerBody}>
                  <Button
                    title={this.props.buttonText}
                    disabled={this.props.buttonDisabled}
                    onPress={this.props.onButtonPress}
                  />
                </View>
              </View>
            )}
          </View>
        )}
      </BackgroundImage>
    );
  }
}

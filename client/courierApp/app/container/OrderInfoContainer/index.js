import React, {Component} from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'

import styles from './styles'
import BackgroundImage from '@components/BackgroundImage'
import Button, { SmallButton } from '@components/Button';
import IconButton from '@components/IconButton';
import ProductInfoDialog from '@components/ProductInfoDialog'

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
      // Render Modal every time to allow animations
      const renderProductInfoModal = () => (
        <Modal
          isVisible={!!this.state.currentDetailsProductId}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
        >
          <ProductInfoDialog
            productId={this.state.currentDetailsProductId}
            size="bla"
            onClose={() => this.setState({ currentDetailsProductId: null })}
          />
        </Modal>
      );
    return (
      <BackgroundImage>
          {renderProductInfoModal()}
          <ScrollView style={{ flex: 1, alignSelf: 'stretch'}}>
          <View style={styles.body}>
            <View style={styles.bodyBody}>
              <TableView>
                <Section header="Grocery List" footer="Total: 6.80 €">
                  <Cell
                    cellStyle="RightDetail"
                    title="Lactose-free Milk 1200l"
                    detail=" ~ 1.20 €"
                    accessory="DisclosureIndicator"
                    onPress={() => this.handleOpenDetails('12312')}
                    image={
                      <Image
                        style={{ borderRadius: 5 }}
                        source={{
                          uri: 'https://facebook.github.io/react/img/logo_og.png',
                        }}
                      />
                    }
                  />
                  <Cell
                    cellStyle="RightDetail"
                    title="Lactose-free Milk 1200l"
                    detail=" ~ 1.20 €"
                    accessory="DisclosureIndicator"
                    onPress={() => this.handleOpenDetails('12312')}
                    image={
                      <Image
                        style={{ borderRadius: 5 }}
                        source={{
                          uri: 'https://facebook.github.io/react/img/logo_og.png',
                        }}
                      />
                    }
                  />
                  <Cell
                    cellStyle="RightDetail"
                    title="Lactose-free Milk 1200l"
                    detail=" ~ 1.20 €"
                    accessory="DisclosureIndicator"
                    onPress={() => this.handleOpenDetails('12312')}
                    image={
                      <Image
                        style={{ borderRadius: 5 }}
                        source={{
                          uri: 'https://facebook.github.io/react/img/logo_og.png',
                        }}
                      />
                    }
                  />
                </Section>

                <Section header="Delivery Info">
                  <Cell
                    cellStyle="Subtitle"
                    title="Location"
                    detail="Near Katajanokanranta"
                  />
                  <Cell
                    cellStyle="Subtitle"
                    title="Deliver by"
                    detail="Tue 26.09 19:45 (in 40 min)"
                  />
                  <Cell
                    cellStyle="Subtitle"
                    title="Earn delivery fee"
                    detail="6 €"
                  />
                </Section>
              </TableView>


            </View>
          </View>
        </ScrollView>

          <View style={styles.footer}>
            <View style={styles.footerBody}>
              <Button title="Reserve Order" />
              <View style={{ height: 10 }} />
            </View>
        </View>
      </BackgroundImage>
    )
  }
}
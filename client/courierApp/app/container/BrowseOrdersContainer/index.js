import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

import { defaultPaddings } from '../../config';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Browse Orders',
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}
      >
        <TableView>
          <Section>
            <Cell
              cellContentView={
                <View
                  style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
                >
                  <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                  >
                    Element 1
                  </Text>
                </View>
              }
            />
          </Section>
        </TableView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: defaultPaddings.paddingHorizontal,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});

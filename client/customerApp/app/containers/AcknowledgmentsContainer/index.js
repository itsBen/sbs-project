import React, { Component } from 'react';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getLicenses } from '../../api/shop';

export default class extends Component {
  state = {
    licenses: [],
  };
  componentDidMount() {
    getLicenses().then(entries => this.setState({ licenses: entries.items }));
  }

  render() {
    const renderEntry = (entry, key) => {
      return (
        <View style={styles.entry} key={key}>
          {entry.fields.url ? (
            <Text
              style={[
                ...{},
                styles.entry_title,
                styles.entry_title__style_link,
              ]}
              onPress={() => Linking.openURL(entry.fields.url)}
            >
              {entry.fields.title}
            </Text>
          ) : (
            <Text style={styles.entry_title}>{entry.fields.title}</Text>
          )}
          <Text style={styles.entry_body}>{entry.fields.license}</Text>
        </View>
      );
    };

    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <View style={styles.preDescription}>
          <Text style={styles.entry_body}>
            This application makes use of the following third party libraries:
          </Text>
        </View>
        {this.state.licenses.map(renderEntry)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  stage: {
    paddingHorizontal: 10,
    paddingBottom: 65,
  },
  entry: {
    borderBottomWidth: 0.5,
    borderColor: '#c8c7cc',
    paddingBottom: 10,
  },
  entry_title: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
  },
  entry_title__style_link: {
    color: '#007AFF',
  },
  entry_body: {
    color: 'black',
  },
  preDescription: {
    marginVertical: 10,
    paddingBottom: 15,
  },
});

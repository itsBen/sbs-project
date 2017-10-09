import React, { PureComponent } from 'react';

import { ScrollView } from 'react-native';
import { TableView, Section } from 'react-native-tableview-simple';
import firebase from '../../api/firebase';

import ProfileHeaderCell from '../../components/ProfileHeaderCell';
import IconCell from '../../components/IconCell';

export default class extends PureComponent {
  navigationOptions = {
    title: 'Profile',
  };

  handleSignOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {},
        error => {
          console.error('Logout Error', error);
          window.alert('Logout Error', error);
        }
      );
  }

  render() {
    return (
      <ScrollView>
        <TableView>
          <Section sectionTintColor="#E9E9EF">
            <ProfileHeaderCell />
          </Section>
          <Section sectionTintColor="#E9E9EF" footer="Made with ❤ in Finland.">
            <IconCell
              onPress={() => console.log('Hey')}
              title="Payment details"
              iconName="credit-card"
            />
            <IconCell
              onPress={() => console.log('Hey')}
              title="Settings"
              iconName="settings"
            />
            <IconCell
              onPress={() => console.log('Hey')}
              title="Invite friends"
              iconName="card-giftcard"
            />
            <IconCell
              onPress={() => console.log('Hey')}
              title="Get help"
              iconName="help-outline"
            />
            <IconCell
              onPress={() => console.log('Hey')}
              title="Give us feedback"
              iconName="feedback"
            />
            <IconCell
              onPress={() => this.props.navigation.navigate('Acknowledgments')}
              title="Acknowledges"
              iconName="info-outline"
            />
            <IconCell
              onPress={this.handleSignOut}
              title="Logout"
              iconName="exit-to-app"
            />
          </Section>
        </TableView>
      </ScrollView>
    );
  }
}

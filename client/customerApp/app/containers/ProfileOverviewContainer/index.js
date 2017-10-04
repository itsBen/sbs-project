import React from 'react';

import { TableView, Section } from 'react-native-tableview-simple';

import ProfileHeaderCell from '../../components/ProfileHeaderCell';
import IconCell from '../../components/IconCell';

const Screen = ({ navigation }) => (
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
        onPress={() => navigation.navigate('Acknowledgments')}
        title="Acknowledges"
        iconName="info-outline"
      />
    </Section>
  </TableView>
);

Screen.navigationOptions = {
  title: 'Profile',
};

export default Screen;

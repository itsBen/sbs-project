import { AppRegistry } from 'react-native';
import App from './app/index';
import { Client } from 'bugsnag-react-native';

const bugsnag = new Client();

AppRegistry.registerComponent('courierApp', () => App);

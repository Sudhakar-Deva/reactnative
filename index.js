/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './wrks/screens/App';
import {name as appName} from './app.json';
import App from './src/navigation/App';

AppRegistry.registerComponent(appName, () => App);

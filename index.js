/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RoutingService from './src/Route/RoutingService'
AppRegistry.registerComponent(appName, () => RoutingService);

//IMPORTS
import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from '/Screens/SplashScreenModule/SplashScreen';

const AppNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
  },
  {
    initialRouteName: 'splash',
  },
);

const Navigation = createAppContainer(AppNavigator);
export default class Route extends Component {
  constructor() {
    super();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        {/* <Provider store={store}>
          <Navigation />
        </Provider> */}
        <Navigation />
      </View>
    );
  }
}

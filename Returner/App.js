import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Home from './src/home/home';
import Shipments from './src/shipments/shipments';
import Returns from './src/returns/returns';

const HomeStack = createStackNavigator({
	Home: Home
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const ShipmentsStack = createStackNavigator({
	Shipments: Shipments
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const ReturnsStack = createStackNavigator({
	Returns: Returns
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const MainNavigator = createBottomTabNavigator({
  Home: HomeStack,
	Shipments: ShipmentsStack,
	Returns: ReturnsStack
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Shipments') {
					iconName = 'home';
				} else if (routeName === 'Returns') {
					iconName = 'home';
				}
        return <Icon name={iconName} size={30} color="#900"/>;
    }
  }),
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});
const AppNavigator = createAppContainer(MainNavigator)
export default  class App extends Component {
  render() {
    return <AppNavigator/>
  }
}

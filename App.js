/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SplashScreen from 'react-native-splash-screen';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import SideMenu from './src/screens/SideMenu';
import ChangePassword from './src/screens/ChangePassword';
import Profile from './src/screens/Profile';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? 0 : 0,
  backgroundColor: '#ffb900',
};

const AppStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'TEST',
        headerStyle,
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        title: 'Đổi Mật Khẩu',
        headerStyle,
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Trang Cá Nhân',
        headerStyle: {
          marginTop: Platform.OS === 'android' ? 0 : 0,
          backgroundColor: '#ffb900',
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    AppStack,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
  },
);

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      headerStyle,
      header: null,
    },
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
    console.disableYellowBox = true;
  }

  render() {
    return <AppContainer />;
  }
}

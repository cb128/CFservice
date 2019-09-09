/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, StyleSheet, Platform, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SplashScreen from 'react-native-splash-screen';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ChangePassword from './src/screens/ChangePassword';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import Profile from './src/screens/Profile';
import InsuranceAgreement from './src/screens/InsuranceAgreement';
import InsurancePayment from './src/screens/InsurancePayment';
import LoanHistory from './src/screens/LoanHistory';
import LoanAgreement from './src/screens/LoanAgreement';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  tabName: {
    textAlign: 'center',
  },
  inActiveTabName: {
    color: 'grey',
  },
  activeTabName: {
    color: '#ffb900',
  },
});

const headerStyle = {
  marginTop: Platform.OS === 'android' ? 0 : 0,
  backgroundColor: '#ffb900',
};

const InsuranceAgreementStack = createStackNavigator(
  {
    InsuranceAgreement: {
      screen: InsuranceAgreement,
      navigationOptions: {
        title: 'Hợp Đồng Bảo Hiểm',
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

const InsurancePaymentStack = createStackNavigator(
  {
    InsurancePayment: {
      screen: InsurancePayment,
      navigationOptions: {
        title: 'Thanh Toán Bảo Hiểm',
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

const LoanAgreementStack = createStackNavigator(
  {
    LoanAgreement: {
      screen: LoanAgreement,
      navigationOptions: {
        title: 'Hợp Đồng Vay',
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

const LoanHistoryStack = createStackNavigator(
  {
    LoanHistory: {
      screen: LoanHistory,
      navigationOptions: {
        title: 'Lịch Sử Trả Nợ',
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

const ProfileStack = createStackNavigator(
  {
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

const TabNavigator = createBottomTabNavigator(
  {
    InsuranceAgreement: InsuranceAgreementStack,
    InsurancePayment: InsurancePaymentStack,
    LoanAgreement: LoanAgreementStack,
    LoanHistory: LoanHistoryStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = MaterialCommunityIcons;
        let iconName;
        if (routeName === 'InsuranceAgreement') {
          iconName = `account-badge-horizontal${focused ? '' : '-outline'}`;
        } else if (routeName === 'InsurancePayment') {
          iconName = `ballot${focused ? '' : '-outline'}`;
        } else if (routeName === 'LoanAgreement') {
          iconName = `file-document-edit${focused ? '' : '-outline'}`;
        } else if (routeName === 'LoanHistory') {
          iconName = 'history';
        } else if (routeName === 'Profile') {
          iconName = 'account';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      tabBarLabel: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let tabName;
        if (routeName === 'InsuranceAgreement') {
          tabName = 'Bảo Hiểm';
        } else if (routeName === 'InsurancePayment') {
          tabName = 'Thanh Toán';
        } else if (routeName === 'LoanAgreement') {
          tabName = 'Vay';
        } else if (routeName === 'LoanHistory') {
          tabName = 'Trả Nợ';
        } else if (routeName === 'Profile') {
          tabName = 'Cá Nhân';
        }
        return (
          <Text
            style={[
              styles.tabName,
              focused ? styles.activeTabName : styles.inActiveTabName,
            ]}>
            {tabName}
          </Text>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ffb900',
      inactiveTintColor: 'grey',
    },
  },
);

const AuthStack = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        headerStyle,
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: 'Forgot Password',
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
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: {
        title: 'Thay Đổi Mật Khẩu',
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
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Thiết Lập Tài Khoản',
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

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: TabNavigator,
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

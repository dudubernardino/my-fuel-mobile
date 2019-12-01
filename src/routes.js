import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Dashboard,
          Profile
        }, {
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: 'rgba(9, 9, 121, 1)',
            inactiveTintColor: 'rgba(9, 9, 121, 0.6)',
            style: {
              backgroundColor: '#fff'
            }
          }
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoadingScreen from '../../screens/loadingScreen';
import LoginScreen from '../../screens/loginScreen';
import DashboardScreen from '../../screens/dashboardScreen';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    Main: MainTabNavigator, 
    DashboardScreen: DashboardScreen,
    
  })
);

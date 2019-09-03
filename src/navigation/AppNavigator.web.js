import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoadingScreen from '../../screens/LoadingScreen';
import LoginScreen from '../../screens/LoginScreen';
import DashboardScreen from '../../screens/DashboardScreen';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    Main: MainTabNavigator, 
    DashboardScreen: DashboardScreen,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });

import React, { Component } from "react";
import { ExpoConfigView } from '@expo/samples';
import styles from './css';

class SettingsScreen extends Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render(){
    return <ExpoConfigView />;
  }
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};

export default SettingsScreen;

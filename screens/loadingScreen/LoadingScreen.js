import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import styles from './css';

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        // console.log('AUTH STATE CHANGED CALLED ');
        if (user) {
          console.log('Update user >>> ', user);
          this.props.updateUser(user);
          // console.log('navigation to >>> Main');
          this.props.navigation.navigate('Main');
        } else {
          // console.log('navigation to >>> LoginScreen');
          this.props.navigation.navigate('LoginScreen');
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;

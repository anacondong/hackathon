import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import {updateUser} from '../src/actions/userActions'
class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        console.log('AUTH STATE CHANGED CALLED ');
        if (user) {
          console.log('Update user >>> ', user);
          this.props.updateUser(user);
          console.log('navigation to >>> Main');
          this.props.navigation.navigate('Main');
        } else {
          console.log('navigation to >>> LoginScreen');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      updateUser: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);


import * as WebBrowser from 'expo-web-browser';
import React, { Component } from "react";
import firebase from 'firebase';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import { MonoText } from '../../src/components/StyledText';
import styles from './css';

class HomeScreen extends Component {

  
  render(){
  return (
    <View style={styles.container}>
      <Image
            source={{ uri: this.props.user.photoURL }}
            style={styles.welcomeImage}
            PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={{ fontSize: 20 }}>Hi {this.props.user.displayName} !!</Text>

      <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
          
        <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
              <Text style={{ fontSize: 20 }}>Increase</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
              <Text style={{ fontSize: 20 }}>Decrease</Text>
          </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../../assets/images/robot-dev.png')
                : require('../../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
      
    </View>
  );
  }
}

export default HomeScreen;

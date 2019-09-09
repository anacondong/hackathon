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
import { Thumbnail } from 'native-base';
import { MonoText } from '../../src/components/StyledText';
import styles from './css';

class HomeScreen extends Component {
  
  render(){
    return (
      <View style={styles.container}>
         <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={{alignItems:'center'}}>
            <Thumbnail 
              source={{ uri: this.props.user.photoURL }} 
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={{ fontSize: 20 }}>Hi {this.props.user.displayName} !!</Text>
          </View>

          {/* <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
              <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                  <Text style={{ fontSize: 20 }}>Increase</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                  <Text style={{ fontSize: 20 }}>Decrease</Text>
              </TouchableOpacity>
          </View> */}

          <View style={styles.welcomeContainer}>
          <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
          </View>
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

HomeScreen.navigationOptions = {
  title: 'Home Page',
};

export default HomeScreen;

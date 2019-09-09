import React, { Component } from "react";
import firebase from 'firebase';
import styles from './css';
import { db } from './../../config';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
class SettingsScreen extends Component {

 _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      userProfile: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;
    db.ref('/users/' + this.props.user.uid).on('value', snapshot => {
      let userProfile = snapshot.val();
      if (this._isMounted) {
        this.setState({ userProfile });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const renderProfile = this.state.userProfile;
    console.log("renderProfile >>>", renderProfile);
    
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.userProfile.profile_picture}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Hi : {this.state.userProfile.first_name} {this.state.userProfile.last_name}</Text>
              <Text style={styles.info}>You have : {this.state.userProfile.points} points</Text>
              <Text style={styles.description}>Email: {this.state.userProfile.email}</Text>
              
              {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity> */}
            </View>
        </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Profile',
};

export default SettingsScreen;

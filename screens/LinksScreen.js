import React, { Component } from "react";
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

class LinksScreen extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * we just wanted to provide you with some helpful links.
        */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default LinksScreen;

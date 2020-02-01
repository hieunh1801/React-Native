import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';

export default class Logout extends Component {
  render() {
    return (
      <View style={styles.logoutContainer}>
        <Text>Login Screen</Text>
      </View>
    )
  }
}
const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const styles = StyleSheet.create({
  logoutContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "blue"
  }
})
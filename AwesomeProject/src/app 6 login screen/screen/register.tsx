import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.registerContainer}>
        <Text>
          Register Screen
        </Text>
      </View>
    )
  }
}
const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const styles = StyleSheet.create({
  registerContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "red"
  }
})
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Login from './screen/login';
import Logout from './screen/logout';
import Register from './screen/register';

export default class App6LoginScreen extends Component {
  render() {
    return (
      <View>
        <Login />
        {/* <Logout /> */}
        {/* <Register /> */}
      </View>
    )
  }
}
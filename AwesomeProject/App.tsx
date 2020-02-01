/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import App1 from './src/app1';
import App2 from './src/app2';
import App3 from './src/app3';
import App4SearchScreen from './src/app4 seach screen';
import App5Modal from './src/app5 modal';
import App6LoginScreen from './src/app 6 login screen';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      {/* <App6LoginScreen></App6LoginScreen> */}
      <App5Modal></App5Modal>
      {/* <App4SearchScreen></App4SearchScreen> */}
      {/* <App3></App3> */}
      {/* <App2></App2> */}
      {/* <App1></App2> */}
    </View>
  );
};

export default App;

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({

})

export default class App1 extends Component {

	render() {
		console.log(this.props)
		return (
			<View>
				<Text>
					Hello Wordl
                </Text>
			</View>
		)
	}
}
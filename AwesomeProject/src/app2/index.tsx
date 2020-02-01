import React, { Component, } from 'react'
import { View, Text, Image } from 'react-native'


interface GreetingState {

}

interface GreetingProps {
  name?: string
}

class Greeting extends Component<GreetingProps, GreetingState> {
  render() {
    console.log(typeof (this.props.name))
    return (
      <View>
        <Text>Hello {this.props.name}</Text>
      </View>
    )
  }
}


export default class App2 extends Component {

  render() {
    let source = {
      uri: `https://2sao.vietnamnetjsc.vn/images/2019/12/26/16/30/jangnara.jpg`
    }
    let url = `https://2sao.vietnamnetjsc.vn/images/2019/12/26/16/30/jangnara.jpg`
    return (
      <View>
        <Text>Hello App 2</Text>
        <Text>URL link: {url} </Text>
        <Image source={{ uri: url }} style={{
          width: 100,
          height: 200
        }} />
        <Greeting name={"Jang na ra"}></Greeting>
        <Greeting ></Greeting>
      </View >
    )
  }

}



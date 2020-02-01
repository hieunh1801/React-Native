import React, { Component } from 'react';
import { Text, View, Modal, Button, Dimensions } from 'react-native';

type App5ModalProps = {}
type App5ModalStates = {
  isModalVisible: boolean,
  name: string
}

const initState: App5ModalStates = {
  isModalVisible: false,
  name: "Nguyen Huu Hieu"
}

export default class App5Modal extends Component<App5ModalProps, App5ModalStates> {
  constructor(props: App5ModalProps) {
    super(props)
    this.state = initState
  }

  renderModal() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}

      >
        <View
          style={{
            width: SCREEN_WIDTH * 6 / 9,
            height: SCREEN_HEIGHT * 6 / 9,
            backgroundColor: "gray",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}>
          <View>
            <Text>Hello {this.state.name}</Text>
            <Button title="close modal" onPress={() => this.setState({ isModalVisible: false })}></Button>
          </View>
        </View>
      </Modal>
    )
  }

  render() {
    return (
      <View>
        <View>
          <Text>Header</Text>
          <Button title="openModal" onPress={() => this.setState({ isModalVisible: true })}></Button>
        </View>
        {this.renderModal()}
      </View>
    )
  }
}


const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height
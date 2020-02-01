import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, ImageBackground, TextInput, Button, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, CheckBox } from 'react-native';
type LoginProps = {}
type LoginStates = {
  username: string,
  password: string,

}

const initState: LoginStates = {
  username: "",
  password: ""

}
export default class Login extends Component<LoginProps, LoginStates> {

  constructor(props: LoginProps) {
    super(props)
    this.state = initState
  }

  renderFooter() {
    return (
      <View style={styles.footerContainer}>
        <TouchableWithoutFeedback
          onPress={() => console.log("Quên mật khẩu")}
        >
          <Text style={{ color: "green", fontWeight: "600" }}>Quên mật khẩu?</Text>
        </TouchableWithoutFeedback>
      </View>
    )
  }
  renderViewCenter() {
    const iconUsername = "data:image/png;base64,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"
    const iconPassword = "data:image/png;base64,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"
    const logoUrl = "https://thumbs.dreamstime.com/b/bicycle-bike-icon-vector-cycling-concept-bike-sign-yellow-circle-isolated-white-background-sign-graphic-design-logo-web-134966913.jpg"
    return (
      <View style={styles.viewCenterContainer}>
        <View style={styles.logo}>
          {/* <Text style={{ fontSize: 20 }}>Logo</Text> */}
          <Image source={{ uri: logoUrl }} style={{ width: 50, height: 50 }}></Image>
        </View>
        <View style={styles.txtInputContainer}>
          <View style={styles.txtUsernameContainer}>
            <Image
              style={styles.icon}
              source={{ uri: iconUsername }}>
            </Image>
            <TextInput
              style={styles.txtInputUsername}
              placeholder="Tài khoản"
              onChangeText={(text) => this.setState({ username: text })}
              value={this.state.username}>
            </TextInput>
          </View>
          <View style={styles.txtUsernameContainer}>
            <Image
              style={styles.icon}
              source={{ uri: iconPassword }}>
            </Image>
            <TextInput
              style={styles.txtInputUsername}
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
              secureTextEntry={true}
              placeholder="Mật khẩu">
            </TextInput>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              onValueChange={(value) => console.log(value)}
            >
            </CheckBox>
            <Text>nhớ mật khẩu</Text>
          </View>
        </View>
        <View>
          <TouchableHighlight
            underlayColor="#2b88d4"
            style={styles.btnLogin}
            onPress={() => console.log("Đăng nhập", this.state.username, this.state.password)}
          >
            <Text style={styles.txtLogin}>Đăng nhập</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#f9e086"
            style={styles.btnRegister}
            onPress={() => console.log("Đăng kí", this.state.username, this.state.password)}
          >
            <Text style={styles.txtRegister}>Đăng kí</Text>
          </TouchableHighlight>
        </View>
        {this.renderFooter()}
      </View >
    )
  }
  render() {
    const uri = "https://gamek.mediacdn.vn/thumb_w/690/2018/8/20/photo-1-15347406162351083495463.jpg"
    return (
      <ImageBackground
        source={{ uri: uri }}
        style={styles.backgroundImage}
      >
        {this.renderViewCenter()}

      </ImageBackground>

    )
  }
}
const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const styles = StyleSheet.create({
  backgroundImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  viewCenterContainer: {
    display: "flex",
    height: SCREEN_HEIGHT * 4.5 / 8,
    width: SCREEN_WIDTH * 6.5 / 8,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 10,
    alignSelf: "center"
  },
  footerContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingHorizontal: 25,

  },
  logo: {
    alignSelf: "center",
    width: SCREEN_WIDTH * 6 / 8,
    height: SCREEN_HEIGHT * 0.5 / 8,
    padding: 20,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  txtInputContainer: {
    justifyContent: "center",
    alignItems: 'center',

  },
  txtUsernameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 10,
    elevation: 0.8
  },
  txtInputUsername: {
    width: SCREEN_WIDTH * 3 / 5,
    paddingHorizontal: 10
  },
  txtPasswordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  txtInputPassword: {

  },
  btnLogin: {
    backgroundColor: "#20639b",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  btnRegister: {
    backgroundColor: "#f6d55c",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  txtLogin: {
    color: "#b1cce4"
  },
  txtRegister: {
    color: "#143a37"
  },
  icon: {
    width: 20,
    height: 20
  }
})
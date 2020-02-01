import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, Button, ScrollView, FlatList, TouchableWithoutFeedback, Modal } from 'react-native';
import { search, getOne, getAll } from './service/studentService';
/**
 * Fetchdata - search
 * Show modal
 * Lazyload
 */
type App4SearchScreenProps = {}
type App4SearchScreenState = {
  app4SearchScreenTitle: string,
  searchValue: string,
  students: Student[],
  studentPicked: Student,
  isModalStudentOpen: boolean
}

const initState = {
  app4SearchScreenTitle: "Search",
  searchValue: "",
  students: [],
  studentPicked: { id: 0, name: "", address: "" },
  isModalStudentOpen: false,
}

export default class App4SearchScreen extends Component<App4SearchScreenProps, App4SearchScreenState> {

  constructor(props: App4SearchScreenProps) {
    super(props)
    this.state = initState
  }

  _handleOnPressStudentItem(student: Student) {
    console.log("Click student item", student)
    this.setState({
      isModalStudentOpen: true
    })
  }

  _hanldeSearch(value: string) {
    search(value).then((data) => {
      this.setState({
        students: data
      })
    })
  }

  renderListStudentItem(student: Student) {
    return (
      <TouchableWithoutFeedback
        onPress={() => this._handleOnPressStudentItem(student)}
      >
        <View style={styles.listStudentItem}>
          <Text>{student.name} </Text>
        </View>
      </TouchableWithoutFeedback>

    )
  }

  renderListStudent(students: Student[]) {
    return (
      <ScrollView >
        <FlatList
          data={students}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => this.renderListStudentItem(item)}
          style={styles.listStudent}
        ></FlatList>
      </ScrollView>
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text>{this.state.app4SearchScreenTitle}</Text>
        <TextInput
          style={styles.headerSearchInput}
          value={this.state.searchValue}
          onChangeText={(txtInput) => this.setState({ searchValue: txtInput })}
        />
        <Button
          title="Search"
          onPress={() => { this._hanldeSearch(this.state.searchValue) }}>
        </Button>
      </View>
    )
  }

  renderModalStudent(student: Student) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isModalStudentOpen}
        onRequestClose={() => {
          this.setState({ isModalStudentOpen: false })
        }}
      >
        <View style={styles.modalStudent}>
          <Text>{student.id}</Text>
        </View>
      </Modal>
    )
  }
  renderNoStudentData() {
    return (
      <View>
        <Text>Nodata</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.app4SearchScreenContainer}>
        {this.renderHeader()}
        {this.state.students.length == 0 ? this.renderNoStudentData() : this.renderListStudent(this.state.students)}
        {this.renderModalStudent(this.state.studentPicked)}
      </View>
    )
  }
}

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const styles = StyleSheet.create({
  app4SearchScreenContainer: {
    backgroundColor: "#FFFFFF",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    color: "green",
    paddingTop: SCREEN_HEIGHT * 1 / 12
  },
  headerContainer: {
    color: "#141823",
    backgroundColor: "white",
    position: "absolute",
    width: SCREEN_WIDTH,
    elevation: 5,
    height: SCREEN_HEIGHT * 1 / 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  headerSearchInput: {
    width: SCREEN_WIDTH * 1 / 2,
    height: 40,
    padding: 12,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  listStudent: {
    width: SCREEN_WIDTH,
    padding: 20,
    height: SCREEN_HEIGHT * 9 / 10,
  },
  listStudentItem: {
    height: 100,
    borderBottomWidth: 0.1,
    // backgroundColor: "red",
    marginBottom: 2,
    elevation: 1
  },
  modalStudent: {
    height: 500,
    width: 500
  }
})
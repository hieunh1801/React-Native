import React, { Component, } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, FlatList, ListRenderItem, ToastAndroid, TouchableWithoutFeedback, TouchableOpacityComponent, TouchableHighlight, Button } from 'react-native'

import { getStudentFromServer } from './api/studentService';
interface student {
  id: number,
  name: string,
  address: string
}

interface App3Props { }
interface App3State {
  students: student[]
}

const initState: App3State = {
  students: []
}
export default class App3 extends Component<App3Props, App3State> {

  constructor(props: App3Props) {
    super(props)
    this.state = initState
  }

  _fetchStudentData1() {
    const students: student[] = [
      { id: 1, name: "Nguyen Huu Hiue", address: "Ha Noi" },
      { id: 2, name: "Nguyen Vanw A", address: "Ha Noi" },
      { id: 3, name: "Nguyen Vanw ", address: "Ha Noi" },
      { id: 4, name: "Nguyen Vanw C", address: "Ha Noi" },
      { id: 5, name: "Nguyen Vanw D", address: "Ha Noi" },
      { id: 6, name: "Nguyen Vanw E", address: "Ha Noi" },
      { id: 7, name: "Nguyen Vanw F", address: "Ha Noi" },
      { id: 8, name: "Nguyen Vanw G", address: "Ha Noi" },
    ]
    this.setState({
      students: students
    })
  }

  _fetchStudentData(): void {
    getStudentFromServer().then(data => {
      let students: student[] = data ? data : []
      this.setState({
        students: students
      })
    })
  }

  componentDidMount() {
    console.log("componentDidMount:", this.state)
  }
  hanleOnPressListStudentItem(student: student) {
    this.renderToast(student)
  }
  renderToast(student: student) {
    const studentString = `id: ${student.id}. name: ${student.name}`

    ToastAndroid.showWithGravity(
      studentString,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    )
  }
  renderListStudentItem = (student: student) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.hanleOnPressListStudentItem(student)}
      >
        <View
          style={styles.listStudentItem}
        >
          <Text>{student.id}</Text>
          <Text>{student.name}</Text>
          <Text>{student.address}</Text>
        </View>
      </TouchableWithoutFeedback>

    )
  }

  renderNoData() {
    return (
      <Text>
        No student data
      </Text>
    )
  }

  renderListStudent(students: Array<student> | undefined) {
    if (students == undefined) {
      return this.renderNoData()
    }
    return (
      <FlatList<student>
        style={styles.listStudent}
        renderItem={({ item }) => this.renderListStudentItem(item)}
        keyExtractor={(item) => item.id.toString()}
        data={students}
      />
    )
  }

  render() {
    return (
      <View style={styles.app3Container}>
        <Text>Hello App 3</Text>
        <Button
          title="Fetch Data"
          onPress={() => this._fetchStudentData()} />
        {this.state.students.length == 0 ? this.renderNoData() : this.renderListStudent(this.state.students)}
      </View >
    )
  }

}

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const styles = StyleSheet.create({
  listStudent: {
    backgroundColor: "#ffffff",
    height: SCREEN_HEIGHT - 200,
    width: 200,
    opacity: 1,
    color: "#ffffff",

  },
  listStudentItem: {},
  app3Container: {
    minWidth: SCREEN_WIDTH,
    minHeight: SCREEN_HEIGHT,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  }
})
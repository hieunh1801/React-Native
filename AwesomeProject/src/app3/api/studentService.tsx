import React from 'react'
interface student {
  id: number,
  name: string,
  address: string
}
const studentUrl = `http://10.0.3.2:3000/students`;
async function getStudentFromServer() {
  try {
    console.log("Call API")
    let response = await fetch(studentUrl)
    let responseJson: student[] = await response.json()
    return responseJson
  } catch (error) {

  }
}

export { getStudentFromServer };
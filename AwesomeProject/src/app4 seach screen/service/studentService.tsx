import React from 'react'

const studentUrl = `http://10.0.3.2:3000/students`;


const getAll = async (): Promise<any> => {
  let res = await fetch(studentUrl);
  let jsonData = res.json();
  return jsonData;
}

const getOne = async (id: number): Promise<any> => {
  const url = studentUrl + `/${id}`
  console.log(url)
  let res = await fetch(url);
  let jsonData = res.json();
  return jsonData;
}

const post = async (student: Student): Promise<any> => {
  let res = await fetch(studentUrl, { method: "POST", body: student })
}

const search = async (searchValue: string): Promise<any> => {
  const url = studentUrl + `?q=${searchValue}&_limit=20&_page=1`
  console.log("Student service", url)
  let res = await fetch(url)
  let jsonData = res.json()
  return jsonData;
}

export { search, post, getOne, getAll }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentCollection from './components/StudentCollection';
import NewStudentForm from './components/NewStudentForm';
import './App.css';

const API_URL_BASE = 'http://localhost:3000/students';

const students = [
  {
    id: 1,
    fullName: "Ada Lovelace",
    email: "ada@lovelace.uk",
    present: true,
  },
  {
    id: 2,
    fullName: "Katherine Johnson",
    email: "kat@nasa.gov",
    present: false,
  },
];

const App = () => {
  const [studentList, setStudentList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(API_URL_BASE)
      .then((response) => {
        const apiStudentList = response.data;
        setStudentList(apiStudentList);
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);

  const updateStudent = (updatedStudent) => {
    const students = [];

    studentList.forEach((student) => {
      if (student.id === updatedStudent.id) {
        students.push(updatedStudent);
      } else {
        students.push(student);
      }
    });

    setStudentList(students);
  }

  const addStudent = (student) => {
    axios.post(API_URL_BASE, student)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [...studentList, response.data];
        setStudentList(updatedData);
        setErrorMessage('');
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
  }

  return (
    <div className="App">
      {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
      <StudentCollection students={studentList} onUpdateStudent={updateStudent} />
      <NewStudentForm addStudentCallback={addStudent} />
    </div>
  );
}

export default App;

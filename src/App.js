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

    const newStudentList = [...students];

    // Find the max id and add 1
    const nextId = newStudentList.reduce((accumulator, currentStudent) => {
      return Math.max(accumulator, currentStudent.id);
    }, 0) + 1;

    newStudentList.push({
      id: nextId,
      fullName: student.fullName,
      email: student.email,
      present: false,
    });

    setStudentList(newStudentList);
  }

  const deleteStudent = (id) => {
    const newStudentList = studentList.filter((student) => {
      return student.id !== id;
    });

    if (newStudentList.length < studentList.length) {
      axios.delete(`${ API_URL_BASE }/${ id }`)
        .then((response) => {
          setErrorMessage(`Student ${ id } deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete student ${ id }`);
        })
      setStudentList(newStudentList);
    }
  }

  return (
    <div className="App">
      {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
      <StudentCollection
        students={studentList}
        updateStudentCallback={updateStudent}
        deleteStudentCallback={deleteStudent}
      />
      <NewStudentForm addStudentCallback={addStudent} />
    </div>
  );
}

export default App;

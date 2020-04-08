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
    const startingStudents = JSON.parse(localStorage.getItem('studentList')) || students;

    setStudentList(startingStudents);

    return () => {
      localStorage.setItem('studentList', JSON.stringify(studentList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('studentList', JSON.stringify(studentList));
  }, [studentList]);

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

  return (
    <div className="App">
      <StudentCollection students={studentList} onUpdateStudent={updateStudent} />
      <NewStudentForm addStudentCallback={addStudent} />
    </div>
  );
}

export default App;

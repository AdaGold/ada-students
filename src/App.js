import React, { useState } from 'react';
import StudentCollection from './components/StudentCollection';
import NewStudentForm from './components/NewStudentForm';
import './App.css';

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

function App () {
  const [studentList, setStudentList] = useState(students);

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

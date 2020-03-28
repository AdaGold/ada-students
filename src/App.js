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
  console.log('rendering');
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

  return (
    <div className="App">
      <StudentCollection students={studentList} onUpdateStudent={updateStudent} />
      <NewStudentForm />
    </div>
  );
}

export default App;

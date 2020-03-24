import React from 'react';
import Student from './components/Student';
import StudentCollection from './components/StudentCollection';
import './App.css';

const students = [
  {
    fullName: "Ada Lovelace",
    email: "ada@lovelace.uk",
    present: true,
  },
  {
    fullName: "Katherine Johnson",
    email: "kat@nasa.gov",
    present: false,
  },
];

function App () {
  return (
    <div className="App">
      <StudentCollection students={students} />
    </div>
  );
}

export default App;

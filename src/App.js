import React from 'react';
import Student from './components/Student';
import StudentCollection from './components/StudentCollection';
import './App.css';

const students = [
  {
    fullName: "Ada Lovelace",
    email: "ada@lovelace.uk",
  },
  {
    fullName: "Katherine Johnson",
    email: "kat@nasa.gov",
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

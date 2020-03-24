import React from 'react';
import Student from './components/Student';
import './App.css';

function App () {
  return (
    <div className="App">
      <Student
        fullName="Improved Ada"
        email="improved-ada@ada.org"
      />
    </div>
  );
}

export default App;

// src/components/StudentCollection.js
import React from 'react';

import Student from './Student';

const StudentCollection = () => {
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

  const studentComponents = students.map((student, i) => {
    return (
      <li key={i}>
        <Student fullName={student.fullName} email={student.email} />
      </li>
    );
  });

  return (
    <ul className="student-collection">
      <li>
        <Student fullName="Improved Ada" email="improved-ada@ada.co" />
      </li>
    </ul>
  );
};

export default StudentCollection;

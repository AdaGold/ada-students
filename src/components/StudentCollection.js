// src/components/StudentCollection.js
import React from 'react';

import Student from './Student';

const StudentCollection = (props) => {

  const studentComponents = props.students.map((student, i) => {
    return (
      <li key={i}>
        <Student
          fullName={student.fullName}
          email={student.email}
          present={student.present}
        />
      </li>
    );
  });

  return (
    <ul className="student-collection">
      {studentComponents}
    </ul>
  );
};

export default StudentCollection;

// src/components/StudentCollection.js
import React from 'react';
import PropTypes from 'prop-types';

import Student from './Student';

const StudentCollection = (props) => {

  const studentComponents = props.students.map((student, i) => {
    return (
      <li key={i}>
        <Student
          fullName={student.fullName}
          email={student.email}
          present={student.present}
          id={student.id}
          onUpdateStudent={props.onUpdateStudent}
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

StudentCollection.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape(
    {
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string,
      present: PropTypes.bool,
      id: PropTypes.number.isRequired,
    },
  )),
  onUpdateStudent: PropTypes.func.isRequired,
}



export default StudentCollection;

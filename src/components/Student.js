import React from 'react';
import PropTypes from 'prop-types';

import './Student.css';

const Student = (props) => {

  // Event callback functions
  const onButtonClick = () => {
    const updatedStudent = {
      fullName: props.fullName,
      birthday: props.birthday,
      email: props.email,
      present: !props.present,
      id: props.id,
    }
    props.onUpdateStudent(updatedStudent);
  }

  const onFullNameInputChange = (event) => {
    const fullName = event.target.value;
    props.onUpdateStudent({
      fullName,
      birthday: props.birthday,
      email: props.email,
      present: props.present,
      id: props.id,
    });
  };

  // Component functions always return JSX
  return (
    <div>
      <h3>{fullName}</h3>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: {props.birthday}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={onButtonClick}>
        Mark {props.present ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  birthday: PropTypes.string,
  onUpdateStudent: PropTypes.func.isRequired,
};

Student.defaultProps = {
  birthday: 'no birthdate on file',
}

export default Student;

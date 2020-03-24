import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Student = (props) => {

  const [present, setPresent] = useState(props.present);

  const changePresent = () => setPresent(!present);

  // Component functions always return JSX
  return (
    <div>
      <h3>{props.fullName}</h3>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: {props.birthday}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={changePresent}>
        Mark {present ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  birthday: PropTypes.string,
};

Student.defaultProps = {
  birthday: 'no birthdate on file',
}

export default Student;

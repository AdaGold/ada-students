import React from 'react';
import PropTypes from 'prop-types';

const Student = (props) => {

  const [present, setPresent] = useState(props.present);
  const [fullName, setFullName] = useState(props.fullName);

  const onButtonClick = () => setPresent(!present);

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

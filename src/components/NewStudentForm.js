import React, { useState } from 'react';
import './NewStudentForm.css';


const NewStudentForm = (props) => {
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
  });

  // event handlers
  const onNameChange = (event) => {
    console.log(`Name Field updated ${ event.target.value }`);
    setFormFields({
      fullName: event.target.value,
      email: formFields.email,
    });
  };

  const onEmailChange = (event) => {
    console.log(`Email Field updated ${ event.target.value }`);
    setFormFields({
      fullName: formFields.fullName,
      email: event.target.value,
    });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addStudentCallback(formFields);

    setFormFields({
      fullName: '',
      email: '',
    });
  };

  return (
    <form className="new-student-form" onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input name="fullName"
          onChange={onNameChange}
          value={formFields.fullName}
          name="fullName"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          onChange={onEmailChange}
          value={formFields.email}
        />
      </div>
      <input
        type="submit"
        value="Add Student"
      />
    </form>
  );
}

export default NewStudentForm;
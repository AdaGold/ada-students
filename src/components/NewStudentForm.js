import React, { useState } from 'react';
import './NewStudentForm.css';


const NewStudentForm = (props) => {
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
  });

  // event handlers
  const onInputChange = (event) => {
    console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addStudentCallback(formFields);

    setFormFields({
      fullName: '',
      email: '',
    });
  };

  // validate email
  const emailValid = () => {
    return formFields.email.match(/\S+@\S+/) || formFields.email === '';
  }

  return (
    <form
      className="new-student-form"
      onSubmit={onFormSubmit}
      data-testid="new-student-form"
    >
      <div>
        <label htmlFor="fullName">Name:</label>
        <input
          id="fullName"
          name="fullName"
          onChange={onInputChange}
          value={formFields.fullName}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          onChange={onInputChange}
          value={formFields.email}
          className={emailValid() ? "valid" : "invalid"}
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
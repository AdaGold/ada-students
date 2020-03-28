import React, { useState } from 'react';
import './NewStudentForm.css';


const NewStudentForm = (props) => {

  return (
    <form className="new-student-form">
      <div>
        <label htmlFor="fullName">Name:</label>
        <input name="fullName" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email" />
      </div>
      <input
        type="submit"
        value="Add Student"
      />
    </form>
  );
}

export default NewStudentForm;
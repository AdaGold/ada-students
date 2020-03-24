// src/components/StudentCollection.js
import React from 'react';

import Student from './Student';

const StudentCollection = () => {
  return (
    <ul className="student-collection">
      <li>
        <Student fullName="Improved Ada" email="improved-ada@ada.co" />
      </li>
    </ul>
  );
};

export default StudentCollection;

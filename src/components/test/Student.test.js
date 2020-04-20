// src/components/test/NewStudentForm.test.js
import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react'
import Student from '../Student';

describe('Student Component', () => {
  afterEach(cleanup);
  const renderSampleStudent = (callback = () => { }) => render(<Student
    fullName="Jarred Maddox"
    email="Jared@adadev.org"
    birthday="April 1, 1996"
    present={true}
    onUpdateStudent={callback}
  />);

  test('A student can be rendered', () => {
    const { getByText } = renderSampleStudent();
    const nameElement = getByText(/Jarred Maddox/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('Clicking on the present button can mark a student present/absent', () => {

    const callback = jest.fn();
    const { getByText } = renderSampleStudent(callback);
    const button = getByText(/Mark Absent/i);
    expect(button).toBeInTheDocument();

    expect(callback).toBeCalledTimes(0);
    button.click();
    expect(callback).toHaveBeenCalled();
  });
});
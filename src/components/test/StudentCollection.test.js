import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import StudentCollection from '../StudentCollection';

describe('StudentCollection', () => {

  afterEach(cleanup);

  const students = [
    {
      id: 1,
      fullName: "Serena Williams",
      email: "serena@williams.com",
      present: true,
    },
    {
      id: 2,
      fullName: "Vemus Williams",
      email: "venus@williams.com",
      present: false,
    },
  ]

  test('will render properly', () => {
    // Arrange-Act
    const { asFragment } = render(
      <StudentCollection
        students={students}
        onUpdateStudent={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test('will the proper number of stud', () => {
    // Arrange-Act
    const { getAllByText } = render(
      <StudentCollection
        students={students}
        onUpdateStudent={() => { }}
      />
    );

    // Assert
    expect(getAllByText(/Class: C13/i).length).toEqual(2);
  });

  test('will forward on the onUpdateStudent event handler', () => {
    // Arrange-Act
    const onUpdateStudentCallbackFunction = jest.fn(() => { });
    const { getAllByText } = render(
      <StudentCollection
        students={students}
        onUpdateStudent={onUpdateStudentCallbackFunction}
      />
    );

    // get the first mark present button
    const button = getAllByText(/Mark Present/i)[0];
    // Click it
    fireEvent.click(button);

    // Assert that the callback function is called
    expect(onUpdateStudentCallbackFunction).toHaveBeenCalled();
  });
});
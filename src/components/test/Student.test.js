// src/components/test/Student.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Student from '../Student';

describe('Student', () => {

  afterEach(cleanup);

  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Student
        fullName="Ada Lovelace"
        email="Ada@adadev.org"
        birthday="10 December 1815"
        onUpdateStudent={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('The fullName field renders properly', () => {

    const { getByText } = render(<Student
      fullName="Ada Lovelace"
      email="Ada@adadev.org"
      birthday="10 December 1815"
      present={true}
      onUpdateStudent={() => { }}
    />);

    const element = getByText(/Ada Lovelace/i);
    expect(element).toBeInTheDocument();
  });

  test('The Student\'s button renders properly when they are present', () => {

    const { getByText } = render(<Student
      fullName="Ada Lovelace"
      email="Ada@adadev.org"
      birthday="10 December 1815"
      present={true}
      onUpdateStudent={() => { }}
    />);

    // because the student is present
    const element = getByText(/Mark Absent/i);
    expect(element).toBeInTheDocument();
  });

  test('The Student\'s button renders properly when they are absent', () => {

    const { getByText } = render(<Student
      fullName="Ada Lovelace"
      email="Ada@adadev.org"
      birthday="10 December 1815"
      present={false}
      onUpdateStudent={() => { }}
    />);

    // because the student is present
    const element = getByText(/Mark Present/i);
    expect(element).toBeInTheDocument();
  });

  test('The "onUpdateStudent" prop function is called when the `Mark Absent` button is clicked on', () => {

    // Arrange
    // Create a mock callback function
    const markAbsent = jest.fn();

    // Render a Student
    //   note the markAbsent callback function
    const container = render(<Student
      fullName="Ada Lovelace"
      email="Ada@adadev.org"
      birthday="10 December 1815"
      present={true}
      onUpdateStudent={markAbsent}
    />);

    // Act
    // Find the Mark Absent Button
    const button = container.getByText(/Mark Absent/i);

    // Trigger a click event
    button.click();

    // Assert
    // Verify that the callback function was called
    expect(markAbsent).toHaveBeenCalled();
  });
});

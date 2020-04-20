// src/components/test/NewStudentForm.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewStudentForm from '../NewStudentForm';

describe('NewStudentForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewStudentForm
        addStudentCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
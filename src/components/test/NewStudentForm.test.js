// src/components/test/NewStudentForm.test.js
import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react'
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

  describe('User Interaction', () => {
    // render the form and get the inputs & button
    const setup = () => {
      const addStudentCallbackMock = jest.fn(() => { });
      const utils = render(<NewStudentForm addStudentCallback={addStudentCallbackMock} />);
      const fullNameInput = utils.getByLabelText('Name:');
      const emailInput = utils.getByLabelText('Email:')
      const submitButton = utils.getByText('Add Student');
      const form = utils.getByTestId('NewStudentForm--form')

      return {
        ...utils,
        addStudentCallbackMock,
        fullNameInput,
        emailInput,
        submitButton,

      }
    }

    test('Typing on the fullName field changes the input', () => {
      // Arrange
      const formData = setup();
      const simulatedEvent = {
        target: {
          value: 'Grace Hopper',
        },
      };

      // Act
      // put 'Grace Hopper' in the input field
      fireEvent.change(formData.fullNameInput, simulatedEvent);

      // Assert
      expect(formData.fullNameInput.value).toBe('Grace Hopper');
    });

    test('Typing on the email field changes the input', () => {
      // Arrange
      const formData = setup();
      const simulatedEvent = {
        target: {
          value: 'grace@hopper.com',
        },
      };

      // Act
      // put 'Grace Hopper' in the input field
      fireEvent.change(formData.emailInput, simulatedEvent);

      // Assert
      expect(formData.emailInput.value).toBe('grace@hopper.com');
    });

    test('Giving an invalid email address changes the makes the class list contain invalid', () => {
      // Arrange
      const formData = setup();
      const simulatedEvent = {
        target: {
          value: 'gracehopper.com',
        },
      };

      // Act
      // put 'Grace Hopper' in the input field
      fireEvent.change(formData.emailInput, simulatedEvent);

      // Assert
      expect(formData.emailInput.value).toBe('gracehopper.com');
      expect(formData.emailInput.classList).toContain('invalid');
    });

    test('Giving an invalid email address changes the makes the class list contain valid', () => {
      // Arrange
      const formData = setup();
      const simulatedEvent = {
        target: {
          value: 'grace@hopper.com',
        },
      };

      // It should be valid without input
      expect(formData.emailInput.classList).toContain('valid');

      // Act
      // put 'Grace Hopper' in the input field
      fireEvent.change(formData.emailInput, simulatedEvent);

      // Assert
      expect(formData.emailInput.value).toBe('grace@hopper.com');
      expect(formData.emailInput.classList).toContain('valid');
    });


    test('The callback function is called correctly when the form is submitted', () => {
      // Arrange
      const formData = setup();

      // Acting
      fireEvent.change(formData.fullNameInput, { target: { value: 'Grace Hopper', }, })
      fireEvent.change(formData.emailInput, { target: { value: 'grace@hopper.com', }, })
      fireEvent.click(formData.submitButton);

      expect(formData.addStudentCallbackMock).toHaveBeenCalled();
      expect(formData.fullNameInput.value).toBe('');
      expect(formData.emailInput.value).toBe('');
    });
  });
});

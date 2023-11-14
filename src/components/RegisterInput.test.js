/*
1. should handle name typing correctly:
Arrange: Render komponen RegisterInput.
Action: Mengetikkan "nametest" di dalam input nama.
Assert: Memastikan nilai input nama sesuai dengan yang diketikkan.

2. should handle email typing correctly:
Arrange: Render komponen RegisterInput.
Action: Mengetikkan "emailtest" di dalam input email.
Assert: Memastikan nilai input email sesuai dengan yang diketikkan.

3. should handle password typing correctly:
Arrange: Render komponen RegisterInput.
Action: Mengetikkan "passwordtest" di dalam input password.
Assert: Memastikan nilai input password sesuai dengan yang diketikkan.

4. should call register function when register button is clicked:
Arrange:
Membuat fungsi tiruan (mockRegister) menggunakan Jest.
Render komponen RegisterInput dengan menggunakan fungsi tiruan tersebut.
Mengakses input nama, mengetikkan "nametest".
Mengakses input email, mengetikkan "emailtest".
Mengakses input password, mengetikkan "passwordtest".
Mengakses tombol register.
Action: Mengklik tombol register.
Assert: Memastikan bahwa fungsi tiruan mockRegister dipanggil dengan objek yang memiliki nama, email, dan password sesuai dengan yang diinputkan. */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(nameInput, 'nametest');

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'emailtest');

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nametest');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
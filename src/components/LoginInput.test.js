/*
1. should handle email typing correctly:
Arrange: Render komponen LoginInput.
Action: Mengetikkan "emailtest" di dalam input email.
Assert: Memastikan nilai input email sesuai dengan yang diketikkan.

2. should handle password typing correctly:
Arrange: Render komponen LoginInput.
Action: Mengetikkan "passwordtest" di dalam input password.
Assert: Memastikan nilai input password sesuai dengan yang diketikkan.

3. should call the login function with email and password when the login button is clicked:
Arrange:
Membuat fungsi tiruan (mockLogin) menggunakan Jest.
Render komponen LoginInput dengan menggunakan fungsi tiruan tersebut.
Mengakses input email, mengetikkan "emailtest".
Mengakses input password, mengetikkan "passwordtest".
Mengakses tombol login.
Action: Mengklik tombol login.
Assert: Memastikan bahwa fungsi tiruan mockLogin dipanggil dengan objek yang memiliki email dan password sesuai dengan yang diinputkan.
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'emailtest');

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
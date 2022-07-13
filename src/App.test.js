import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title, subtitle, sign up form, and logo', () => {
  render(<App />)

  expect(screen.getByText('Agent Sign up')).toBeInTheDocument()
  expect(screen.getByText('Hey, Enter your details to get sign up an new account')).toBeInTheDocument()

  expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Repeat Password')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Already have an account?' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument()

  expect(screen.getByAltText('Virtual Queuing')).toBeInTheDocument()
})

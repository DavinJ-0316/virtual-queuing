import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useNavigate } from "react-router-dom"
import { AuthenticationContext } from "../../../Authentication"
import SignUpForm from "./SignUpForm"
import signUp from "../../../../apis/signUp"

jest.mock('react-router-dom')
jest.mock('../../../../apis/signUp')

test('sets authenticated and navigates to / when submit form with valid data', async () => {
  const setAuthenticated = jest.fn()

  const navigate = jest.fn()
  useNavigate.mockReturnValue(navigate)

  signUp.mockResolvedValue()

  render(
    <AuthenticationContext.Provider value={{ authenticated: false, setAuthenticated }}>
      <SignUpForm />
    </AuthenticationContext.Provider>
  )

  userEvent.type(screen.getByPlaceholderText('Enter Email'), 'zlong@outlook.com')
  userEvent.type(screen.getByPlaceholderText('Password'), 'password')
  userEvent.type(screen.getByPlaceholderText('Repeat Password'), 'password')

  userEvent.click(screen.getByRole('button', { name: 'Sign up' }))

  expect(signUp).toBeCalledWith({
    email: 'zlong@outlook.com',
    password: 'password',
  })

  await waitFor(() => {
    expect(setAuthenticated).toBeCalledWith(true)
  })

  await waitFor(() => {
    expect(navigate).toBeCalledWith('/')
  })
})

test('renders conflict email error when signup responds 409', async () => {
  signUp.mockRejectedValue({
    response: { status: 409 }
  })

  render(<SignUpForm />)

  userEvent.type(screen.getByPlaceholderText('Enter Email'), 'zlong@outlook.com')
  userEvent.type(screen.getByPlaceholderText('Password'), 'password')
  userEvent.type(screen.getByPlaceholderText('Repeat Password'), 'password')

  userEvent.click(screen.getByRole('button', { name: 'Sign up' }))

  expect(screen.queryByText('Email already exists, please use another one.')).not.toBeInTheDocument()

  expect(signUp).toBeCalledWith({
    email: 'zlong@outlook.com',
    password: 'password',
  })

  await waitFor(() => {
    expect(screen.getByText('Email already exists, please use another one.')).toBeInTheDocument()
  })
})

test('renders email error message when type an invalid email', () => {
  render(<SignUpForm />)

  expect(screen.queryByText('Please input a valid email')).not.toBeInTheDocument()

  userEvent.type(screen.getByPlaceholderText('Enter Email'), '10086')

  expect(screen.getByText('Please input a valid email')).toBeInTheDocument()
})


test('renders password error message when type an empty password', () => {
  render(<SignUpForm />)

  expect(screen.queryByText('Please input your password')).not.toBeInTheDocument()

  userEvent.type(screen.getByPlaceholderText('Password'), 'p{backspace}')

  expect(screen.getByText('Please input your password')).toBeInTheDocument()
})

test('renders repeat password error message when type a not matched repeat password', () => {
  render(<SignUpForm />)

  expect(screen.queryByText('Repeat password does not match to your password')).not.toBeInTheDocument()

  userEvent.type(screen.getByPlaceholderText('Password'), 'password')
  userEvent.type(screen.getByPlaceholderText('Repeat Password'), 'password123')

  expect(screen.getByText('Repeat password does not match to your password')).toBeInTheDocument()
})

test('renders disabled signup button with invalid form data', () => {
  render(<SignUpForm />)

  expect(screen.getByRole('button', { name: 'Sign up' })).toHaveAttribute('disabled')

  userEvent.type(screen.getByPlaceholderText('Enter Email'), '10086')
  userEvent.type(screen.getByPlaceholderText('Password'), 'password')
  userEvent.type(screen.getByPlaceholderText('Repeat Password'), 'password')

  expect(screen.getByRole('button', { name: 'Sign up' })).toHaveAttribute('disabled')

  userEvent.clear(screen.getByPlaceholderText('Enter Email'))
  userEvent.type(screen.getByPlaceholderText('Enter Email'), 'zlong@outlook.com')

  expect(screen.getByRole('button', { name: 'Sign up' })).not.toHaveAttribute('disabled')
})

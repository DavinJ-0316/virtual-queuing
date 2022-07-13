import getEmailErrorMessage from "./getEmailErrorMessage"

test('returns empty email error message', () => {
  const errorMessage = getEmailErrorMessage('')

  expect(errorMessage).toBe('Please input your email')
})

test('returns invalid email error message', () => {
  const errorMessage = getEmailErrorMessage('10086')

  expect(errorMessage).toBe('Please input a valid email')
})

test('returns null with valid input', () => {
  const errorMessage = getEmailErrorMessage('zlong@utlook.com')

  expect(errorMessage).toBeNull()
})

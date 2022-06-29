import validator from 'validator'

const getPasswordErrorMessage = (password) => {
  if (validator.isEmpty(password)) {
    return 'Please input your password'
  }

  return null
}

export default getPasswordErrorMessage

import validator from 'validator'

const getRepeatPasswordErrorMessage = (repeatPassword, password) => {
  if (validator.isEmpty(repeatPassword)) {
    return 'Please repeat your password'
  }

  if (repeatPassword !== password) {
    return 'Repeat password does not match to your password'
  }

  return null
}

export default getRepeatPasswordErrorMessage

import validator from 'validator'

const getEmailErrorMessage = (email) => {
  if (validator.isEmpty(email)) {
    return 'Please input your email'
  }

  if (!validator.isEmail(email)) {
    return 'Please input a valid email'
  }

  return null
}


export default getEmailErrorMessage

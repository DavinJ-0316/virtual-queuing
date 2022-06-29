import API from "../../libs/API";

const signUp = ({
  email,
  password
}) => API.post('/auth/sign-up', {
  email,
  password,
})

export default signUp

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import signUp from "../../../../apis/signUp";
import FormElement from "../../../../components/FormElement";
import Input from "../../../../components/Input";
import NakedButton from "../../../../components/NakedButton";
import PasswordInputElement from "../../../../components/PasswordInputElement";
import useTouchedState from "../../../../hooks/useTouchedState";
import { AuthenticationContext } from "../../../Authentication";
import getEmailErrorMessage from "./utils/getEmailErrorMessage";
import getPasswordErrorMessage from "./utils/getPasswordErrorMessage";
import getRepeatPasswordErrorMessage from "./utils/getRepeatPasswordErrorMessage";

const Login = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
`

const SignUp = styled(NakedButton)`
  width: 100%;
  border-radius: 5px;
  background: #77A48E;
  color: white;
  padding: 10px 12px;

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(80%);
  }
`

const ServerError = styled.div`
  border-radius: 10px;
  padding: 10px 12px;
  color: white;
  background-color: rgb(244, 67, 54);
  margin: 32px 0;
`;

const SignUpForm = () => {
  const authentication = useContext(AuthenticationContext)
  const navigate = useNavigate()

  const [email, setEmail] = useTouchedState()
  const [password, setPassword] = useTouchedState()
  const [repeatPassword, setRepeatPassword] = useTouchedState()

  const emailErrorMessage = getEmailErrorMessage(email.value)
  const passwordErrorMessage = getPasswordErrorMessage(password.value)
  const repeatPasswordErrorMessage = getRepeatPasswordErrorMessage(repeatPassword.value, password.value)

  const [serverErrorResponse, setServerErrorResponse] = useState()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        signUp({ email: email.value, password: password.value })
          .then(() => {
            authentication.setAuthenticated(true)
            navigate('/')
          })
          .catch((error) => setServerErrorResponse(error.response))
      }}
    >
      {serverErrorResponse?.status === 409 && (
        <ServerError>Email already exists, please use another one.</ServerError>
      )}
      <FormElement errorMessage={email.touched && emailErrorMessage}>
        <Input
          value={email.value}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        />
      </FormElement>
      <PasswordInputElement
        errorMessage={password.touched && passwordErrorMessage}
        value={password.value}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <PasswordInputElement
        errorMessage={repeatPassword.touched && repeatPasswordErrorMessage}
        value={repeatPassword.value}
        onChange={(event) => setRepeatPassword(event.target.value)}
        placeholder="Repeat Password"
      />
      <FormElement>
        <Login href="/">Already have an account?</Login>
      </FormElement>
      <FormElement>
        <SignUp
          disabled={emailErrorMessage || passwordErrorMessage || repeatPasswordErrorMessage}
          type="submit"
        >
          Sign up
        </SignUp>
      </FormElement>
    </form>
  )
}

export default SignUpForm

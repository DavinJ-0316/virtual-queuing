import { useContext } from 'react';
import styled from 'styled-components'
import Logo from '../../components/Logo';
import AuthenticationContext from '../Authentication/AuthenticationContext';
import SignUpForm from "./components/SignUpForm"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  padding: 36px 42px;
  width: 370px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

const Header = styled.div`
  text-align: center;
  padding: 0 24px;
  margin-bottom: 18px;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 18px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`

const SubTitle = styled.p`
  color: #666666;
`;

const SignUpPage = () => (
  <Wrapper>
    <Container>
      <Header>
        <Title>Agent Sign up</Title>
        <SubTitle>Hey, Enter your details to get sign up an new account</SubTitle>
      </Header>
      <SignUpForm />
      <Footer>
        <Logo />
      </Footer>
    </Container>
  </Wrapper>
)

export default SignUpPage;

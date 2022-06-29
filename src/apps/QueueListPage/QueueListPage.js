import styled from "styled-components"
import SideMenu from './components/SideMenu'
import Main from './components/Main'
import { useContext } from "react"
import { AuthenticationContext } from "../Authentication"
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`

const QueueListPage = () => {
  const navigate = useNavigate()
  const authentication = useContext(AuthenticationContext)


  if (authentication.loading) {
    return (<div>Loading...</div>)
  }

  if (!authentication.authenticated) {
    navigate('/auth/sign-up')

    return null
  }

  return (
    <Wrapper>
      <SideMenu />
      <Main />
    </Wrapper>
  )
}

export default QueueListPage

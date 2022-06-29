import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import NakedButton from "../../../../../../components/NakedButton"
import face from './assets/face.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Face = styled.img``

const Email = styled.div`
  font-weight: 500;
  margin: 0 24px;
`

const UserInfo = () => (
  <Wrapper>
    <Face alt="Avatar" src={face} />
    <Email>zlong@outlook.com</Email>
    <NakedButton type="button">
      <FontAwesomeIcon icon={faChevronDown} />
    </NakedButton>
  </Wrapper>
)

export default UserInfo

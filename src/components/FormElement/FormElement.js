import styled from 'styled-components'
import ErrorMessage from './components/ErrorMessage';

const Wrapper = styled.div`
  & ~ & {
    margin-top: 18px;
  }

  position: relative;
`

const Suffix = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 18px;
  display: flex;
  align-items: center;
`;

const FormElement = ({
  suffix,
  errorMessage,
  children,
}) => (
  <Wrapper>
    {children}
    {suffix && (<Suffix>{suffix}</Suffix>)}
    {errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
  </Wrapper>
)

export default FormElement

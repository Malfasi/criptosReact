import styled from "@emotion/styled"
const Er = styled.div`
  font-size: 15px;
  background-color: #b90606;
  padding: 15px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
`

const Error = ({ children }) => {
  return <Er>{children}</Er>
}

export default Error

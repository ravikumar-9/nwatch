import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  height: 90vh;
`

export const NotfoundImage = styled.img`
  height: 300px;
  width: 270px;
  margin-bottom: 10px;
`

export const NotfoundHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
`
export const NotfoundDescription = styled.p`
  font-size: 14px;
  color: ${props => (props.theme === true ? '#ffffff' : '#1e293b')};
`

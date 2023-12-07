import styled from 'styled-components'

export const SpecificVideoSectionMainContainer = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    width: 100%;
    height:90vh;
    background-color: ${props =>
      props.theme === true ? ' #0f0f0f' : '#f9f9f9'};
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:90vh;
    align-items:center;
     background-color: ${props =>
       props.theme === true ? '#0f0f0f' : '#f9f9f9'};
  }
  }
`

export const SidebarContainer = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (min-width: 576px) {
    width: 15%;
  }
`

export const SpecificVideoSectionContainer = styled.div`
  background-color: transparent;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 90vh;
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
  }
`

export const LoaderContainer = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`

export const SpecificVideoFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`
export const SpecificVideoFailureImage = styled.img`
  @media screen and (min-width: 576px) {
    height: 180px;
    width: 200px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 575px) {
    height: 150px;
    width: 200px;
    margin-bottom: 10px;
  }
`
export const SpecificVideoFailureHeading = styled.h1`
  font-weight: bold;
  line-height: 1.2;
  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
  @media screen and (max-width: 575px) {
    font-size: 17px;
  }

  text-align: center;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const SpecificVideoFailureDescription = styled.p`
  font-size: 14px;
  text-align: center;
  width: 70%;
  line-height: 0.6;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  font-weight: bold;
  font-size: 14px;
  border: none;
  height: 34px;
  width: 90px;
  cursor: pointer;
  border-radius: 4px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const TrendingSectionVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: none;
  margin-top: 10px;
  background-color: transparent;
  width: 100%;
  height: 90vh;
  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

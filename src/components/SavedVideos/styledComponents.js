import styled from 'styled-components'

export const SavedVideoSectionMainContainer = styled.div`
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

export const SavedVideoSectionContainer = styled.div`
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

export const SavedVideosBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color: ${props => (props.theme === true ? '#181818' : '#ebebeb')};
`

export const SavedVideoLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 40px;
  background-color: ${props => (props.theme === true ? '#212121' : '#f4f4f4')};
  @media screen and (min-width: 576px) {
    height: 70px;
    width: 70px;
    margin-left: 70px;
  }
  @media screen and (max-width: 575px) {
    height: 60px;
    width: 60px;
  }
`

export const SavedVideoHeading = styled.h1`
  font-weight: bold;
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
  @media screen and (min-width: 576px) {
    font-size: 21px;
    margin-left: 20px;
  }
  @media screen and (max-width: 575px) {
    font-size: 16px;
    margin-left: 10px;
  }
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`
export const NoSavedVideosImage = styled.img`
  @media screen and (min-width: 576px) {
    height: 200px;
    width: 230px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 575px) {
    height: 150px;
    width: 200px;
    margin-bottom: 10px;
  }
`
export const NoSavedVideosHeading = styled.h1`
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
export const NoSavedVideosDescription = styled.p`
  font-size: 14px;
  text-align: center;
  width: 70%;
  line-height: 0.6;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const SavedVideosListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

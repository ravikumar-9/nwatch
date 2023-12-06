import styled from 'styled-components'

export const TrendingSectionMainContainer = styled.div`
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

export const TrendingSectionContainer = styled.div`
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

export const TrendingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 90%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`
export const TrendingFailureImage = styled.img`
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
export const TrendingFailureHeading = styled.h1`
  font-weight: bold;
  line-height: 0.6;
  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
  @media screen and (max-width: 575px) {
    font-size: 17px;
  }

  text-align: center;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const TrendingFailureDescription = styled.p`
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
export const TrendingBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color: ${props =>
    props.theme === true ? '#181818' : '#ebebeb'}; ;
`
export const TrendingLogoContainer = styled.div`
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

export const TrendingHeading = styled.h1`
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

import styled from 'styled-components'

export const HomeSectionMainContainer = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    width: 100%;
    height:90vh;
    background-color: ${props =>
      props.theme === true ? '#181818' : '#f9f9f9'};
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:90vh;
    align-items:center;
     background-color: ${props =>
       props.theme === true ? '#181818' : '#f9f9f9'};
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
export const BannerContainer = styled.div`
  width: 98%;
  margin-bottom: 13px;
  margin-top: 10px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  display: ${props => (props.banner === true ? 'block' : 'none')};
`
export const BannerLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const BannerLogo = styled.img`
  height: 34px;
  width: 130px;
  margin-left: 10px;
`

export const BannerDescription = styled.p`
  font-weight: bold;
  font-size: 13px;
  text-align: start;
  width: 290px;
  padding-left: 12px;
`

export const BannerGetNowButton = styled.button`
  background-color: transparent;
  border: 1px solid silver;
  color: black;
  font-size: 11px;
  font-weight: bold;
  margin-left: 12px;
  height: 34px;
  margin-top: 9px;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: none;
`
export const HomeSectionContainer = styled.div`
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
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  margin-top: 15px;
  align-self: center;
  background-color: #cbd5e1;
  @media screen and (max-width: 575px) {
    height: 34px;
  }
  @media screen and (min-width: 576px) {
    height: 40px;
  }
`
export const SearchBar = styled.input`
  background-color: #cbd5e1;
  outline-color: ${props => (props.themeColor ? 'white' : 'white')};
  outline: 1px;
  border: ${props => (props.themeColor ? 'white' : 'white')};
  height: 100%;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    width: 90%;
  }
  @media screen and (max-width: 575px) {
    width: 90%;
  }
`

export const SearchIconButton = styled.button`
  border-left: 1px solid;
  border-right: none;
  border-top: none;
  border-bottom: none;
  width: 10%;
  height: 100%;
  background-color: transparent;
  border-left-color: ${props => (props.themeColor ? 'white' : 'black')};
`
export const LoaderContainer = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`

export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`
export const HomeFailureImage = styled.img`
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
export const HomeFailureHeading = styled.h1`
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
export const HomeFailureDescription = styled.p`
  font-size: 14px;
  text-align: center;
  width: 70%;
  line-height: 1.2;
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
export const HomeSectionVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: none;
  margin-top: 10px;
  background-color: transparent;
  width: 100%;
  height: 70vh;
  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`

export const NoSearchResultsImage = styled.img`
  @media screen and (min-width: 576px) {
    height: 160px;
    width: 300px;
  }
  height: 150px;
  width: 190px;
`

export const NoSearchResultsHeading = styled.h1`
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
export const NoSearchResultsDescription = styled.p`
  font-size: 14px;
  text-align: center;
  width: 70%;
  line-height: 0.9;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`

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

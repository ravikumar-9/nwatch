import styled from 'styled-components'

export const SidebarContainer = styled.nav`
  @media screen and (max-width: 575px) {
    display: none;
  }
  width: 15%;
  background-color: ${props => (props.theme === true ? '#212121' : '#cccccc')};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
`
export const SidebarItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  outline: none;
  list-style-type: none;
  margin-bottom: 4px;
  margin-left: 7px;
`

export const SidebarItemHeading = styled.h1`
  font-weight: bold;
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
  padding-left: 9px;
`
export const SidebarItemsContainer = styled.nav`
  height: 30%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
`
export const ContactUs = styled.p`
  font-weight: bold;
  font-size: 17px;
  text-align: start;
  padding-left: 9px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`

export const SocialMediaLogo = styled.img`
  height: 25px;
  width: 20px;
  margin: 5px;
  border-radius: 50%;
`

export const ContactUsDescription = styled.p`
  font-weight: bold;
  font-size: 11px;
  padding-left: 9px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`
export const SocialMediaLogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 90%;
  margin-bottom: 7px;
  background-color: transparent;
`

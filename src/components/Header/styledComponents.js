import styled from 'styled-components'

export const LargeDeviceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#212121' : '#cccccc')};
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const LargeDeviceThemeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-around;
  background-color: transparent;
  margin-right: 14px;
`

export const LogoContainer = styled.div`
  width: 60%;
`
export const HeaderLogo = styled.img`
  height: 30px;
  width: 190px;
  margin-left: 10px;
`
export const ThemeButton = styled.button`
  height: max-content;
  width: max-content;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
export const LogoutButton = styled.button`
  height: 30px;
  width: 90px;
  border: 1px solid #4f46e5;
  background-color: transparent;
  color: #4f46e5;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  height: 34px;
  width: 40px;
`
export const PopupContainer = styled.div``

export const PopupDescription = styled.p`
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  padding: 7px;
`
export const ConfirmButton = styled.button`
  height: 30px;
  width: 90px;
  background-color: blue;
  border: none;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  color: white;
`

export const CancelButton = styled.button`
  height: 30px;
  width: 90px;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
  color: black;
  border-radius: 3px;
  margin: 5px;
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  margin: auto;
  justify-content: space-between;
`
export const SmallDevicesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SmallDeviceLogoContainer = styled.div`
  width: 30%;
`

export const SmallDeviceLogo = styled.img`
  height: 30px;
  width: 130px;
  margin-left: 10px;
`
export const SmallDeviceThemesContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
`
export const SmallDeviceThemeButton = styled.button`
  height: max-content;
  width: max-content;
  border: none;
  outline: none;
  background-color: transparent;
`
export const HamburgerButton = styled.button`
  height: max-content;
  width: max-content;
  border: none;
  outline: none;
  background-color: transparent;
`
export const SmallDeviceLogoutButton = styled.button`
  height: max-content;
  width: max-content;
  border: none;
  outline: none;
  background-color: transparent;
`
export const SmallDevicePopContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  height: 50px;
  margin: 0px;
`
export const Popups = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 130px;
  width: 300px;
`
export const SmallDeviceMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f5f9;
  width: max-content;
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
  margin-right: 7px;
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

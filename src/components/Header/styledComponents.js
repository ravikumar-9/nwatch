import styled from 'styled-components'

export const LargeDeviceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const LargeDeviceThemeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;
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
export const PopupContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  width: 100px;
  padding: 4px;
`

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
  color: white;
  margin: 5px;
  border-radius: 3px;
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
  margin-right: 10px;
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
  margin-left: 15px;
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

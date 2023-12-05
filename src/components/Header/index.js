import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'

import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'

import {GiHamburgerMenu} from 'react-icons/gi'

import WatchContext from '../../context/WatchContext'

import {
  LargeDeviceHeader,
  LogoContainer,
  HeaderLogo,
  LargeDeviceThemeContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopupDescription,
  ConfirmButton,
  CancelButton,
  LogoutButtonsContainer,
  SmallDevicesHeader,
  SmallDeviceLogo,
  SmallDeviceThemesContainer,
  SmallDeviceLogoContainer,
  SmallDeviceThemeButton,
  HamburgerButton,
  SmallDeviceLogoutButton,
} from './styledComponents'

const Header = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const onChangeTheme = () => {
        changeTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <>
          <LargeDeviceHeader theme={isDarkTheme}>
            <LogoContainer>
              {isDarkTheme ? (
                <Link to="/">
                  <HeaderLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <HeaderLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}
            </LogoContainer>
            <LargeDeviceThemeContainer>
              {isDarkTheme ? (
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onChangeTheme}
                >
                  <FiSun color="white" size="30" />
                </ThemeButton>
              ) : (
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onChangeTheme}
                >
                  <FaMoon color="black" size="30" />
                </ThemeButton>
              )}
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <PopupContainer>
                <Popup
                  modal
                  trigger={<LogoutButton type="button">Logout</LogoutButton>}
                >
                  {close => (
                    <>
                      <div>
                        <PopupDescription>
                          Are you sure, you want to logout
                        </PopupDescription>
                      </div>
                      <LogoutButtonsContainer>
                        <CancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onLogout}>
                          Confirm
                        </ConfirmButton>
                      </LogoutButtonsContainer>
                    </>
                  )}
                </Popup>
              </PopupContainer>
            </LargeDeviceThemeContainer>
          </LargeDeviceHeader>
          <SmallDevicesHeader theme={isDarkTheme}>
            <SmallDeviceLogoContainer>
              {isDarkTheme ? (
                <Link to="/">
                  <SmallDeviceLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <SmallDeviceLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}
            </SmallDeviceLogoContainer>
            <SmallDeviceThemesContainer>
              {isDarkTheme ? (
                <SmallDeviceThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onChangeTheme}
                >
                  <FiSun color="white" size="20" />
                </SmallDeviceThemeButton>
              ) : (
                <SmallDeviceThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onChangeTheme}
                >
                  <FaMoon color="black" size="20" />
                </SmallDeviceThemeButton>
              )}
              <HamburgerButton>
                {isDarkTheme ? (
                  <GiHamburgerMenu color="white" size="20" />
                ) : (
                  <GiHamburgerMenu color="black" size="20" />
                )}
              </HamburgerButton>

              <PopupContainer>
                <Popup
                  modal
                  trigger={
                    <SmallDeviceLogoutButton>
                      {isDarkTheme ? (
                        <FiLogOut color="white" size="20" />
                      ) : (
                        <FiLogOut color="black" size="20" />
                      )}
                    </SmallDeviceLogoutButton>
                  }
                >
                  {close => (
                    <>
                      <div>
                        <PopupDescription>
                          Are you sure, you want to logout
                        </PopupDescription>
                      </div>
                      <LogoutButtonsContainer>
                        <CancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onLogout}>
                          Confirm
                        </ConfirmButton>
                      </LogoutButtonsContainer>
                    </>
                  )}
                </Popup>
              </PopupContainer>
            </SmallDeviceThemesContainer>
          </SmallDevicesHeader>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default withRouter(Header)

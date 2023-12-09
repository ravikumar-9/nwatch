import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'

import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'

import {GiHamburgerMenu} from 'react-icons/gi'

import {TiHome} from 'react-icons/ti'

import {AiFillFire} from 'react-icons/ai'

import {HiOutlineSaveAs} from 'react-icons/hi'

import {IoGameController} from 'react-icons/io5'

import WatchContext from '../../context/WatchContext'

import './header.css'

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
  Popups,
  SmallDeviceMenuContainer,
  SidebarItemsContainer,
  SidebarItemContainer,
  SidebarItemHeading,
} from './styledComponents'

const Header = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const {match} = props
      // console.log(match)
      const {url} = match

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
              <PopupContainer theme={isDarkTheme}>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" theme={isDarkTheme}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <Popups>
                      <div>
                        <PopupDescription theme={isDarkTheme}>
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
                        <ConfirmButton
                          type="button"
                          onClick={onLogout}
                          theme={isDarkTheme}
                        >
                          Confirm
                        </ConfirmButton>
                      </LogoutButtonsContainer>
                    </Popups>
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

              <Popup
                trigger={
                  <HamburgerButton>
                    {isDarkTheme ? (
                      <GiHamburgerMenu color="white" size="20" />
                    ) : (
                      <GiHamburgerMenu color="black" size="20" />
                    )}
                  </HamburgerButton>
                }
                position="bottom right"
              >
                <SmallDeviceMenuContainer>
                  <SidebarItemsContainer>
                    <Link
                      to="/"
                      className={url === '/' ? 'active-tab' : 'inactive-tab'}
                    >
                      <SidebarItemContainer>
                        <TiHome
                          size="14"
                          color={url === '/' ? 'red' : '#64748b'}
                        />
                        <SidebarItemHeading>Home</SidebarItemHeading>
                      </SidebarItemContainer>
                    </Link>
                    <Link
                      to="/trending"
                      className={
                        url === '/trending' ? 'active-tab' : 'inactive-tab'
                      }
                    >
                      <SidebarItemContainer>
                        <AiFillFire
                          size="14"
                          color={url === '/trending' ? 'red' : '#64748b'}
                        />
                        <SidebarItemHeading>Trending</SidebarItemHeading>
                      </SidebarItemContainer>
                    </Link>
                    <Link
                      to="/gaming"
                      className={
                        url === '/gaming' ? 'active-tab' : 'inactive-tab'
                      }
                    >
                      <SidebarItemContainer>
                        <IoGameController
                          size="14"
                          color={url === '/gaming' ? 'red' : '#64748b'}
                        />
                        <SidebarItemHeading>Gaming</SidebarItemHeading>
                      </SidebarItemContainer>
                    </Link>
                    <Link
                      to="/saved-videos"
                      className={
                        url === '/saved-videos' ? 'active-tab' : 'inactive-tab'
                      }
                    >
                      <SidebarItemContainer>
                        <HiOutlineSaveAs
                          size="14"
                          color={url === '/saved-videos' ? 'red' : '#64748b'}
                        />
                        <SidebarItemHeading>Saved Videos</SidebarItemHeading>
                      </SidebarItemContainer>
                    </Link>
                  </SidebarItemsContainer>
                </SmallDeviceMenuContainer>
              </Popup>

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
                    <Popups>
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
                    </Popups>
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

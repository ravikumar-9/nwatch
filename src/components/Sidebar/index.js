import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {TiHome} from 'react-icons/ti'

import {AiFillFire} from 'react-icons/ai'

import {HiOutlineSaveAs} from 'react-icons/hi'

import {IoGameController} from 'react-icons/io5'

import WatchContext from '../../context/WatchContext'

import './sidebar.css'

import {
  SidebarContainer,
  SidebarItemContainer,
  SidebarItemsContainer,
  SidebarItemHeading,
  ContactUs,
  SocialMediaLogo,
  ContactUsDescription,
  ContactUsContainer,
  SocialMediaLogosContainer,
} from './styledComponents'

class Sidebar extends Component {
  render() {
    const {match} = this.props
    // console.log(match)
    const {url} = match
    console.log(url)

    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          console.log(isDarkTheme)
          return (
            <>
              <SidebarContainer theme={isDarkTheme}>
                <SidebarItemsContainer>
                  <Link
                    to="/"
                    className={url === '/' ? 'active-tab' : 'inactive-tab'}
                  >
                    <SidebarItemContainer>
                      <TiHome
                        height={40}
                        width={40}
                        color={url === '/' ? 'red' : '#64748b'}
                        size={24}
                      />
                      <SidebarItemHeading theme={isDarkTheme}>
                        Home
                      </SidebarItemHeading>
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
                        height={40}
                        width={40}
                        size={24}
                        color={url === '/trending' ? 'red' : '#64748b'}
                      />
                      <SidebarItemHeading theme={isDarkTheme}>
                        Trending
                      </SidebarItemHeading>
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
                        height={40}
                        width={40}
                        size={24}
                        color={url === '/gaming' ? 'red' : '#64748b'}
                      />
                      <SidebarItemHeading theme={isDarkTheme}>
                        Gaming
                      </SidebarItemHeading>
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
                        height={40}
                        width={40}
                        size={24}
                        color={url === '/saved-videos' ? 'red' : '#64748b'}
                      />
                      <SidebarItemHeading theme={isDarkTheme}>
                        Saved Videos
                      </SidebarItemHeading>
                    </SidebarItemContainer>
                  </Link>
                </SidebarItemsContainer>

                <ContactUsContainer>
                  <ContactUs theme={isDarkTheme}>CONTACT US</ContactUs>
                  <SocialMediaLogosContainer>
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </SocialMediaLogosContainer>
                  <ContactUsDescription theme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactUsDescription>
                </ContactUsContainer>
              </SidebarContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)

import {Component} from 'react'

import {CgClose} from 'react-icons/cg'

import {BiSearchAlt2} from 'react-icons/bi'

import WatchContext from '../../context/WatchContext'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {
  HomeSectionMainContainer,
  HomeSectionContainer,
  BannerContainer,
  BannerLogo,
  BannerGetNowButton,
  BannerDescription,
  CloseButton,
  BannerLogoContainer,
  SidebarContainer,
  SearchBarContainer,
  SearchBar,
  SearchIconButton,
} from './styledComponents'

class Home extends Component {
  state = {isShowBanner: true}

  onRemoveBanner = () => {
    this.setState({isShowBanner: false})
  }

  render() {
    const {isShowBanner} = this.state

    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeSectionMainContainer theme={isDarkTheme}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>

                <HomeSectionContainer>
                  <BannerContainer banner={isShowBanner} data-testid="banner">
                    <BannerLogoContainer>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <CloseButton
                        onClick={this.onRemoveBanner}
                        data-testid="close"
                      >
                        <CgClose size={24} />
                      </CloseButton>
                    </BannerLogoContainer>
                    <BannerDescription>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerDescription>
                    <BannerGetNowButton type="button">
                      GET IT NOW
                    </BannerGetNowButton>
                  </BannerContainer>
                  <SearchBarContainer>
                    <SearchBar type="search" themeColor={isDarkTheme} />
                    <SearchIconButton>
                      <BiSearchAlt2 size="24" />
                    </SearchIconButton>
                  </SearchBarContainer>
                </HomeSectionContainer>
              </HomeSectionMainContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home

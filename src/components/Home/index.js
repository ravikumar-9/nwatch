import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {CgClose} from 'react-icons/cg'

import {BiSearchAlt2} from 'react-icons/bi'

import WatchContext from '../../context/WatchContext'

import Header from '../Header'

import Sidebar from '../Sidebar'

import VideoItem from '../VideoItem'

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
  LoaderContainer,
  HomeFailureContainer,
  HomeFailureImage,
  HomeFailureHeading,
  HomeFailureDescription,
  RetryButton,
  HomeSectionVideosContainer,
  NoSearchResultsContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsDescription,
} from './styledComponents'

const homeApIStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isShowBanner: true,
    homeApiStatus: homeApIStatusConstants.initial,
    videosSearchInput: '',
    homeSectionVideos: [],
  }

  componentDidMount() {
    this.getHomeSectionVideos()
  }

  getHomeSectionVideos = async () => {
    const {videosSearchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${videosSearchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    this.setState({homeApiStatus: homeApIStatusConstants.inProgress})

    const homeResponse = await fetch(url, options)
    // console.log(HomeResponse)

    if (homeResponse.ok === true) {
      const homeResponseData = await homeResponse.json()
      // console.log(homeResponseData.videos)
      const updatedHomeResponseData = homeResponseData.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      // console.log(updatedHomeResponseData)

      this.setState({
        homeSectionVideos: updatedHomeResponseData,
        homeApiStatus: homeApIStatusConstants.success,
      })
    } else {
      this.setState({homeApiStatus: homeApIStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({videosSearchInput: event.target.value})
  }

  onClickSearchIcon = () => this.getHomeSectionVideos()

  onRemoveBanner = () => {
    this.setState({isShowBanner: false})
  }

  onClickRetry = () => {
    this.getHomeSectionVideos()
  }

  renderHomeLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeFailureSection = isDarkTheme => (
    <HomeFailureContainer theme={isDarkTheme}>
      <HomeFailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <HomeFailureHeading theme={isDarkTheme}>
        Oops! Something Went Wrong
      </HomeFailureHeading>
      <HomeFailureDescription theme={isDarkTheme}>
        We are having some trouble.
      </HomeFailureDescription>
      <RetryButton
        type="button"
        theme={isDarkTheme}
        onClick={this.onClickRetry}
      >
        Retry
      </RetryButton>
    </HomeFailureContainer>
  )

  renderHomeSuccessView = isDarkTheme => {
    const {homeSectionVideos} = this.state
    return (
      <>
        {homeSectionVideos.length !== 0 ? (
          <HomeSectionVideosContainer>
            {homeSectionVideos.map(eachItem => (
              <VideoItem
                key={eachItem.id}
                itemDetails={eachItem}
                themeDetails={isDarkTheme}
              />
            ))}
          </HomeSectionVideosContainer>
        ) : (
          <NoSearchResultsContainer>
            <NoSearchResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultsHeading theme={isDarkTheme}>
              No Search results found
            </NoSearchResultsHeading>
            <NoSearchResultsDescription theme={isDarkTheme}>
              Try different keywords or remove search filter
            </NoSearchResultsDescription>
            <RetryButton
              type="button"
              theme={isDarkTheme}
              onClick={this.onClickRetry}
            >
              Retry
            </RetryButton>
          </NoSearchResultsContainer>
        )}
      </>
    )
  }

  renderHomeSectionVideos = isDarkTheme => {
    console.log(isDarkTheme)
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case homeApIStatusConstants.inProgress:
        return this.renderHomeLoader()
      case homeApIStatusConstants.failure:
        return this.renderHomeFailureSection(isDarkTheme)
      case homeApIStatusConstants.success:
        return this.renderHomeSuccessView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {isShowBanner, homeSectionVideos} = this.state

    console.log(homeSectionVideos)

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
                    <SearchBar
                      type="search"
                      themeColor={isDarkTheme}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchIconButton onClick={this.onClickSearchIcon}>
                      <BiSearchAlt2 size="24" />
                    </SearchIconButton>
                  </SearchBarContainer>

                  {this.renderHomeSectionVideos(isDarkTheme)}
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

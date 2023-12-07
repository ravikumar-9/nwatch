import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoGameController} from 'react-icons/io5'

import WatchContext from '../../context/WatchContext'

import Header from '../Header'

import Sidebar from '../Sidebar'

import GamingVideoItem from '../GamingVideoItem'

import {
  GamingSectionMainContainer,
  SidebarContainer,
  GamingSectionContainer,
  GamingBarContainer,
  GamingLogoContainer,
  GamingHeading,
  LoaderContainer,
  GamingFailureContainer,
  GamingFailureImage,
  GamingFailureHeading,
  GamingFailureDescription,
  RetryButton,
  GamingSectionVideosContainer,
} from './styledComponents'

const gamingApIStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingApiStatus: gamingApIStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingSectionVideos()
  }

  getGamingSectionVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    this.setState({gamingApiStatus: gamingApIStatusConstants.inProgress})

    const gamingResponse = await fetch(url, options)

    const gamingResponseData = await gamingResponse.json()

    if (gamingResponse.ok === true) {
      // console.log(gamingResponseData.videos)

      const updatedGamingResponseData = gamingResponseData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      console.log(updatedGamingResponseData)

      this.setState({
        gamingApiStatus: gamingApIStatusConstants.success,
        gamingVideosList: updatedGamingResponseData,
      })
    } else {
      this.setState({gamingApiStatus: gamingApIStatusConstants.failure})
    }
  }

  renderGamingLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingFailureView = isDarkTheme => (
    <GamingFailureContainer theme={isDarkTheme}>
      <GamingFailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <GamingFailureHeading theme={isDarkTheme}>
        Oops! Something Went Wrong
      </GamingFailureHeading>
      <GamingFailureDescription theme={isDarkTheme}>
        We are having some trouble.
      </GamingFailureDescription>
      <RetryButton
        type="button"
        theme={isDarkTheme}
        onClick={this.onClickRetry}
      >
        Retry
      </RetryButton>
    </GamingFailureContainer>
  )

  renderGamingSuccessView = isDarkTheme => {
    const {gamingVideosList} = this.state

    return (
      <GamingSectionVideosContainer>
        {gamingVideosList.map(eachVideo => (
          <GamingVideoItem
            itemDetails={eachVideo}
            key={eachVideo.id}
            themeDetails={isDarkTheme}
          />
        ))}
      </GamingSectionVideosContainer>
    )
  }

  renderGamingSectionVideos = isDarkTheme => {
    const {gamingApiStatus} = this.state

    switch (gamingApiStatus) {
      case gamingApIStatusConstants.inProgress:
        return this.renderGamingLoader()

      case gamingApIStatusConstants.failure:
        return this.renderGamingFailureView(isDarkTheme)

      case gamingApIStatusConstants.success:
        return this.renderGamingSuccessView(isDarkTheme)

      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <GamingSectionMainContainer
                data-testid="gaming"
                theme={isDarkTheme}
              >
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <GamingSectionContainer>
                  <GamingBarContainer theme={isDarkTheme}>
                    <GamingLogoContainer theme={isDarkTheme}>
                      <IoGameController color="red" size="24" />
                    </GamingLogoContainer>
                    <GamingHeading theme={isDarkTheme}>Gaming</GamingHeading>
                  </GamingBarContainer>
                  {this.renderGamingSectionVideos(isDarkTheme)}
                </GamingSectionContainer>
              </GamingSectionMainContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Gaming

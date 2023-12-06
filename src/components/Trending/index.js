import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import WatchContext from '../../context/WatchContext'

import Header from '../Header'

import Sidebar from '../Sidebar'

import VideoItem from '../VideoItem'

import {
  TrendingSectionMainContainer,
  SidebarContainer,
  TrendingSectionContainer,
  TrendingBarContainer,
  TrendingLogoContainer,
  TrendingHeading,
  LoaderContainer,
  TrendingFailureContainer,
  TrendingFailureImage,
  TrendingFailureHeading,
  TrendingFailureDescription,
  RetryButton,
  TrendingSectionVideosContainer,
} from './styledComponents'

const trendingApIStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingApiStatus: trendingApIStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    this.setState({trendingApiStatus: trendingApIStatusConstants.inProgress})

    const trendingResponse = await fetch(url, options)
    const trendingResponseData = await trendingResponse.json()

    if (trendingResponse.ok === true) {
      const updatedTrendingResponseData = trendingResponseData.videos.map(
        each => ({
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }),
      )
      this.setState({
        trendingApiStatus: trendingApIStatusConstants.success,
        trendingVideosList: updatedTrendingResponseData,
      })
    } else {
      this.setState({trendingApiStatus: trendingApIStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.renderTrendingSectionVideos()
  }

  renderTrendingLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingFailureView = isDarkTheme => (
    <TrendingFailureContainer theme={isDarkTheme}>
      <TrendingFailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <TrendingFailureHeading theme={isDarkTheme}>
        Oops! Something Went Wrong
      </TrendingFailureHeading>
      <TrendingFailureDescription theme={isDarkTheme}>
        We are having some trouble.
      </TrendingFailureDescription>
      <RetryButton
        type="button"
        theme={isDarkTheme}
        onClick={this.onClickRetry}
      >
        Retry
      </RetryButton>
    </TrendingFailureContainer>
  )

  trendingSuccessView = isDarkTheme => {
    const {trendingVideosList} = this.state

    return (
      <>
        <TrendingSectionVideosContainer>
          {trendingVideosList.map(eachItem => (
            <VideoItem
              key={eachItem.id}
              itemDetails={eachItem}
              themeDetails={isDarkTheme}
            />
          ))}
        </TrendingSectionVideosContainer>
      </>
    )
  }

  renderTrendingSectionVideos = isDarkTheme => {
    const {trendingApiStatus} = this.state

    switch (trendingApiStatus) {
      case trendingApIStatusConstants.inProgress:
        return this.renderTrendingLoader(isDarkTheme)

      case trendingApIStatusConstants.failure:
        return this.renderTrendingFailureView(isDarkTheme)

      case trendingApIStatusConstants.success:
        return this.trendingSuccessView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <WatchContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <>
                <Header />
                <TrendingSectionMainContainer
                  theme={isDarkTheme}
                  data-testid="trending"
                >
                  <SidebarContainer>
                    <Sidebar />
                  </SidebarContainer>
                  <TrendingSectionContainer theme={isDarkTheme}>
                    <TrendingBarContainer theme={isDarkTheme}>
                      <TrendingLogoContainer theme={isDarkTheme}>
                        <AiFillFire color="red" size="30" />
                      </TrendingLogoContainer>
                      <TrendingHeading theme={isDarkTheme}>
                        Trending
                      </TrendingHeading>
                    </TrendingBarContainer>
                    {this.renderTrendingSectionVideos(isDarkTheme)}
                  </TrendingSectionContainer>
                </TrendingSectionMainContainer>
              </>
            )
          }}
        </WatchContext.Consumer>
      </>
    )
  }
}

export default Trending

import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {AiFillLike, AiFillDislike} from 'react-icons/ai'

import WatchContext from '../../context/WatchContext'

import Header from '../Header'

import Sidebar from '../Sidebar'

import './videoDetails.css'

import {
  SpecificVideoSectionMainContainer,
  SidebarContainer,
  SpecificVideoSectionContainer,
  LoaderContainer,
  SpecificVideoFailureContainer,
  SpecificVideoFailureImage,
  SpecificVideoFailureHeading,
  SpecificVideoFailureDescription,
  RetryButton,
  SpecificVideoDetailsContainer,
  SpecificVideoTitle,
  ViewsAndLikeContainer,
  ViewsAndDateContainer,
  ViewsAndDateText,
  LikeAndDislikeContainer,
  LikeButton,
  DisLikeButton,
} from './styledComponents'

const specificVideoApIStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    specificVideoApiStatus: specificVideoApIStatusConstants.initial,
    specificVideoDetailsList: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getSpecificVideoDetails()
  }

  getSpecificVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    this.setState({
      specificVideoApiStatus: specificVideoApIStatusConstants.inProgress,
    })

    const videoResponse = await fetch(url, options)

    const videoResponseData = await videoResponse.json()

    if (videoResponse.ok === true) {
      const updatedVideoDetails = {
        id: videoResponseData.video_details.id,
        description: videoResponseData.video_details.description,
        title: videoResponseData.video_details.title,
        publishedAt: videoResponseData.video_details.published_at,
        thumbnailUrl: videoResponseData.video_details.thumbnail_url,
        videoUrl: videoResponseData.video_details.video_url,
        viewCount: videoResponseData.video_details.view_count,
        channel: {
          name: videoResponseData.video_details.channel.name,
          profileImageUrl:
            videoResponseData.video_details.channel.profile_image_url,
          subscriberCount:
            videoResponseData.video_details.channel.subscriber_count,
        },
      }
      console.log(updatedVideoDetails)

      this.setState({
        specificVideoApiStatus: specificVideoApIStatusConstants.success,
        specificVideoDetailsList: updatedVideoDetails,
      })
      // console.log(videoResponseData)
    } else {
      this.setState({
        specificVideoApiStatus: specificVideoApIStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getSpecificVideoDetails()
  }

  onClickLikeButton = () => {
    const {isDisLiked} = this.state
    if (isDisLiked === true) {
      this.setState({isDisLiked: false})
      this.setState(prev => ({isLiked: !prev.isLiked}))
    } else {
      this.setState(prev => ({isLiked: !prev.isLiked}))
    }
  }

  onClickDislikeButton = () => {
    const {isLiked} = this.state

    if (isLiked === true) {
      this.setState({isLiked: false})
      this.setState(prev => ({isDisLiked: !prev.isDisLiked}))
    } else {
      this.setState(prev => ({isDisLiked: !prev.isDisLiked}))
    }
  }

  renderSpecificVideoLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderSpecificVideoFailureView = isDarkTheme => (
    <>
      <SpecificVideoFailureContainer theme={isDarkTheme}>
        <SpecificVideoFailureImage
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
          alt="failure view"
        />
        <SpecificVideoFailureHeading theme={isDarkTheme}>
          Oops! Something Went Wrong
        </SpecificVideoFailureHeading>
        <SpecificVideoFailureDescription theme={isDarkTheme}>
          We are having some trouble.
        </SpecificVideoFailureDescription>
        <RetryButton
          type="button"
          theme={isDarkTheme}
          onClick={this.onClickRetry}
        >
          Retry
        </RetryButton>
      </SpecificVideoFailureContainer>
    </>
  )

  renderSpecificVideoSuccessView = () => (
    <WatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value

        console.log(isDarkTheme)
        console.log(savedVideosList)

        const {specificVideoDetailsList, isLiked, isDisLiked} = this.state

        const LikeIconColor = isLiked ? '#2563eb' : '#64748b'

        const DisLikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
        } = specificVideoDetailsList

        const splitted = publishedAt.split(' ')
        console.log(splitted)
        const year = splitted[2]
        const month = splitted[0]
        const dateLength = splitted[1].length
        const date = splitted[1].slice(-dateLength, -1)

        const formattedDate = formatDistanceToNow(
          new Date(`${year}-${month}-${date}`),
        )

        const s = formattedDate.split(' ').slice(1)

        return (
          <SpecificVideoDetailsContainer>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} controls width="100%" />
            </div>
            <SpecificVideoTitle theme={isDarkTheme}>{title}</SpecificVideoTitle>
            <ViewsAndLikeContainer>
              <ViewsAndDateContainer>
                <ViewsAndDateText theme={isDarkTheme}>
                  {viewCount} views
                </ViewsAndDateText>
                <ViewsAndDateText theme={isDarkTheme}>
                  • {s.join(' ')} ago
                </ViewsAndDateText>
              </ViewsAndDateContainer>
              <LikeAndDislikeContainer>
                <LikeButton
                  type="button"
                  theme={isLiked}
                  onClick={this.onClickLikeButton}
                >
                  <AiFillLike color={LikeIconColor} size="19" /> Like
                </LikeButton>
                <DisLikeButton
                  type="button"
                  theme={isDisLiked}
                  onClick={this.onClickDislikeButton}
                >
                  <AiFillDislike color={DisLikeIconColor} size="19" /> DisLike
                </DisLikeButton>
              </LikeAndDislikeContainer>
            </ViewsAndLikeContainer>
          </SpecificVideoDetailsContainer>
        )
      }}
    </WatchContext.Consumer>
  )

  renderSpecificVideoDetails = isDarkTheme => {
    const {specificVideoApiStatus} = this.state

    switch (specificVideoApiStatus) {
      case specificVideoApIStatusConstants.inProgress:
        return this.renderSpecificVideoLoader()

      case specificVideoApIStatusConstants.failure:
        return this.renderSpecificVideoFailureView(isDarkTheme)

      case specificVideoApIStatusConstants.success:
        return this.renderSpecificVideoSuccessView(isDarkTheme)

      default:
        return null
    }
  }

  render() {
    const {specificVideoDetailsList} = this.state
    console.log(specificVideoDetailsList)
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <SpecificVideoSectionMainContainer
                data-testid="videoItemDetails"
                theme={isDarkTheme}
              >
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <SpecificVideoSectionContainer>
                  {this.renderSpecificVideoDetails(isDarkTheme)}
                </SpecificVideoSectionContainer>
              </SpecificVideoSectionMainContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetails

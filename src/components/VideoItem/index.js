import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import './videoItem.css'

import {
  HomeVideoItem,
  VideoThumbnailImage,
  ChannelLogoAndDetailsContainer,
  ChannelLogo,
  VideoDetailsContainer,
  VideoTitle,
  VideoViewsAndDateContainer,
  VideoViewsCount,
  ChannelName,
} from './styledComponents'

const VideoItem = props => {
  console.log(props)

  const {itemDetails, themeDetails} = props

  const {thumbnailUrl, channel, id, title, viewCount, publishedAt} = itemDetails
  const {profileImageUrl, name} = channel

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
    <>
      <HomeVideoItem>
        <Link to={`/videos/${id}`} className="nav-link">
          <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
          <ChannelLogoAndDetailsContainer>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
            <VideoDetailsContainer>
              <VideoTitle theme={themeDetails}>{title}</VideoTitle>
              <ChannelName theme={themeDetails}>{name}</ChannelName>
              <VideoViewsAndDateContainer>
                <VideoViewsCount theme={themeDetails}>
                  • {viewCount} views
                </VideoViewsCount>
                <VideoViewsCount theme={themeDetails}>
                  • {s.join('')} ago
                </VideoViewsCount>
              </VideoViewsAndDateContainer>
            </VideoDetailsContainer>
          </ChannelLogoAndDetailsContainer>
        </Link>
      </HomeVideoItem>
    </>
  )
}

export default VideoItem

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import './savedVideoItem.css'

import {
  SavedVideoItems,
  SavedVideoThumbnailContainer,
  SavedVideoThumbnailImage,
  SavedVideoTitle,
  SavedVideoChannelName,
  SavedVideoViewAndDateContainer,
  SavedVideoViewCount,
} from './styledComponents'

const SavedVideoItem = props => {
  console.log(props)

  const {videoDetails, themeDetails} = props

  const {
    thumbnailUrl,
    title,
    channel,
    viewCount,
    publishedAt,
    id,
  } = videoDetails

  const {name} = channel

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
    <SavedVideoItems>
      <Link to={`/videos/${id}`} className="saved-video-nav-link">
        <SavedVideoThumbnailContainer>
          <SavedVideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        </SavedVideoThumbnailContainer>
        <div>
          <SavedVideoTitle theme={themeDetails}>{title}</SavedVideoTitle>
          <SavedVideoChannelName theme={themeDetails}>
            {name}
          </SavedVideoChannelName>
          <SavedVideoViewAndDateContainer>
            <SavedVideoViewCount theme={themeDetails}>
              {viewCount} views
            </SavedVideoViewCount>
            <SavedVideoViewCount theme={themeDetails}>
              {' '}
              • {s.join(' ')} ago
            </SavedVideoViewCount>
          </SavedVideoViewAndDateContainer>
        </div>
      </Link>
    </SavedVideoItems>
  )
}

export default SavedVideoItem

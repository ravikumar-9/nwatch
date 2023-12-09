import {Link} from 'react-router-dom'

import './gamingVideoItem.css'

import {
  GamingVideoItems,
  GamingThumbnailImage,
  ChannelDetailsContainer,
  VideoTitle,
  VideoViewsCount,
} from './styledComponents'

const GamingVideoItem = props => {
  console.log(props)

  const {itemDetails, themeDetails} = props

  const {thumbnailUrl, title, viewCount, id} = itemDetails
  return (
    <GamingVideoItems>
      <Link to={`/videos/${id}`} className="nav-link">
        <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <ChannelDetailsContainer>
          <VideoTitle theme={themeDetails}>{title}</VideoTitle>
          <VideoViewsCount theme={themeDetails}>
            {viewCount} Watching Worldwide
          </VideoViewsCount>
        </ChannelDetailsContainer>
      </Link>
    </GamingVideoItems>
  )
}

export default GamingVideoItem

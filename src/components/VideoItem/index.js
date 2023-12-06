import {HomeVideoItem, VideoThumbnailImage} from './styledComponents'

const VideoItem = props => {
  console.log(props)

  const {itemDetails} = props

  const {thumbnailUrl} = itemDetails
  return (
    <HomeVideoItem>
      <VideoThumbnailImage src={thumbnailUrl} alt="thumbnail" />
    </HomeVideoItem>
  )
}

export default VideoItem

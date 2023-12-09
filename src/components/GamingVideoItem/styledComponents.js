import styled from 'styled-components'

export const GamingVideoItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    width: 46%;
    height: 250px;
  }

  @media screen and (max-width: 575px) {
    width: 98%;
    flex-grow: 4;
    flex-shrink: 0;
    height: 240px;
  }
`
export const GamingThumbnailImage = styled.img`
  width: 100%;
  height: 180px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 7px;
`

export const VideoTitle = styled.p`
  font-weight: bold;
  line-height: 0.6;
  color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 576px and max-width: 767px) {
    font-size: 12px;
  }
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`

export const VideoViewsCount = styled.p`
  color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
  font-size: 12px;
  line-height: 0.6;
  margin-right: 5px;
`

import styled from 'styled-components'

export const HomeVideoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 230px;
  margin: 10px;
  @media screen and (min-width: 576px) {
    width: 48%;
  }

  @media screen and (max-width: 575px) {
    width: 96%;
  }
`
export const VideoThumbnailImage = styled.img`
  width: 100%;
  height: 170px;
`
export const ChannelLogoAndDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const ChannelLogo = styled.img`
  @media screen and (min-width: 768px) {
    height: 37px;
    width: 40px;
  }
  @media screen and (min-width: 576px and max-width: 767px) {
    height: 37px;
    width: 40px;
  }
  @media screen and (max-width: 575px) {
    height: 30px;
    width: 40px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`
export const VideoTitle = styled.h1`
  font-weight: bold;
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
export const ChannelName = styled.h1`
  font-weight: bold;
  color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
  @media screen and (min-width: 576px and max-width: 767px) {
    font-size: 11px;
  }
  @media screen and (max-width: 575px) {
    font-size: 11px;
  }
`
export const VideoViewsCount = styled.p`
  color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
  font-size: 10px;
`

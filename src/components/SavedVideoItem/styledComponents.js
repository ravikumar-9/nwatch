import styled from 'styled-components'

export const SavedVideoItems = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 230px;
  margin-top: 9px;
`
export const SavedVideoThumbnailImage = styled.img`
  width: 48%;
  height: 100%;
  margin-right: 7px;
`
export const SavedVideoTitle = styled.h1`
  font-weight: bold;
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
export const SavedVideoChannelName = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
  line-height: 0.9;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
export const SavedVideoViewCount = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
  line-height: 0.9;
  margin-right: 7px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`
export const SavedVideoViewAndDateContainer = styled.div`
  display: flex;
  align-items: center;
`

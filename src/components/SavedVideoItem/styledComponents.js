import styled from 'styled-components'

export const SavedVideoItems = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 220px;
  margin-top: 9px;
`

export const SavedVideoThumbnailContainer = styled.div`
  width: 48%;
  margin-right: 7px;
  display: flex;
`
export const SavedVideoThumbnailImage = styled.img`
  width:100%;
  height:180px;
  
  }
`
export const SavedVideoTitle = styled.p`
  font-weight: bold;
  margin-bottom: 3px;
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
  line-height: 0.7;
  margin-bottom: 2px;
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
  width: 100%;
`
export const SavedVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin: 0px;
`

import styled from 'styled-components'

export const SpecificVideoSectionMainContainer = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    width: 100%;
    height:90vh;
    background-color: ${props =>
      props.theme === true ? ' #0f0f0f' : '#f9f9f9'};
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:90vh;
    align-items:center;
     background-color: ${props =>
       props.theme === true ? '#0f0f0f' : '#f9f9f9'};
  }
  }
`

export const SidebarContainer = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (min-width: 576px) {
    width: 15%;
  }
`

export const SpecificVideoSectionContainer = styled.div`
  background-color: transparent;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 90vh;
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
  }
`

export const LoaderContainer = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`

export const SpecificVideoFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`
export const SpecificVideoFailureImage = styled.img`
  @media screen and (min-width: 576px) {
    height: 180px;
    width: 200px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 575px) {
    height: 150px;
    width: 200px;
    margin-bottom: 10px;
  }
`
export const SpecificVideoFailureHeading = styled.h1`
  font-weight: bold;
  line-height: 1.2;
  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
  @media screen and (max-width: 575px) {
    font-size: 17px;
  }

  text-align: center;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const SpecificVideoFailureDescription = styled.p`
  font-size: 14px;
  text-align: center;
  width: 70%;
  line-height: 0.6;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  font-weight: bold;
  font-size: 14px;
  border: none;
  height: 34px;
  width: 90px;
  cursor: pointer;
  border-radius: 4px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`
export const SpecificVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-color: transparent;
  overflow-y: auto;
`
export const SpecificVideoTitle = styled.p`
  font-weight: bold;
  text-align: start;
  align-self: flex-start;
  margin-left: 1%;
  color: ${props => (props.theme === true ? '#ffffff' : '#010101')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
export const ViewsAndLikeContainer = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 98%;
  }
`
export const ViewsAndDateContainer = styled.div`
  background-color: transparent;
  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
  }
  @media screen and (max-width: 575px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }
`
export const LikeAndDislikeContainer = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    margin-top: 10px;
  }
  @media screen and (max-width: 575px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 67%;
    margin-top: 7px;
  }
`
export const ViewsAndDateText = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#010101')};
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media screen and (max-width: 575px) {
    font-size: 11px;
  }
`

export const LikeButton = styled.button`
  height: 34px;
  width: max-content;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  color: ${props => (props.theme === true ? '#2563eb' : '#64748b')};
`
export const DisLikeButton = styled.button`
  height: 34px;
  width: max-content;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  color: ${props => (props.theme === true ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled.button`
  height: 34px;
  width: max-content;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  color: #64748b;
`
export const UnSaveButton = styled.button`
  height: 34px;
  width: max-content;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  color: #2563eb;
`
export const HorizontalLine = styled.hr`
  width: 97%;
  color: #94a3b8;
  height: 1px;
  margin-top: 10px;
`
export const ChannelLogoNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2%;
  justify-content: space-between;
  background-color: transparent;
  align-self: flex-start;

  @media screen and (min-width: 576px) {
    margin-top: 12px;
  }
  @media screen and (max-width: 575px) {
    margin-top: 7px;
  }
`

export const ChannelLogo = styled.img`
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (max-width: 575px) {
    height: 30px;
    width: 40px;
  }
`
export const ChannelName = styled.p`
  font-weight: bold;
  line-height: 0.9;
  color: ${props => (props.theme === true ? '#ffffff' : '#010101')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
export const SubscriberCountText = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#010101')};
  line-height: 0.7;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
export const VideoDescriptionText = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#010101')};
  margin-left: 2%;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media screen and (max-width: 575px) {
    font-size: 11px;
  }
`

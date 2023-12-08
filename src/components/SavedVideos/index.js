import {HiOutlineSaveAs} from 'react-icons/hi'

import Header from '../Header'

import Sidebar from '../Sidebar'

import SavedVideoItem from '../SavedVideoItem'

import WatchContext from '../../context/WatchContext'

import {
  SavedVideoSectionMainContainer,
  SidebarContainer,
  SavedVideoSectionContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  SavedVideosBarContainer,
  SavedVideoLogoContainer,
  SavedVideoHeading,
  SavedVideosListContainer,
} from './styledComponents'

const SavedVideos = props => {
  console.log(props)

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value

        console.log(savedVideosList.length)

        return (
          <>
            <Header />
            <SavedVideoSectionMainContainer
              data-testid="savedVideos"
              theme={isDarkTheme}
            >
              <SidebarContainer>
                <Sidebar />
              </SidebarContainer>
              <SavedVideoSectionContainer>
                {savedVideosList.length === 0 ? (
                  <NoSavedVideosContainer theme={isDarkTheme}>
                    <NoSavedVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <NoSavedVideosHeading theme={isDarkTheme}>
                      No saved videos found
                    </NoSavedVideosHeading>
                    <NoSavedVideosDescription theme={isDarkTheme}>
                      You can save your videos while watching them
                    </NoSavedVideosDescription>
                  </NoSavedVideosContainer>
                ) : (
                  <>
                    <SavedVideosBarContainer theme={isDarkTheme}>
                      <SavedVideoLogoContainer theme={isDarkTheme}>
                        <HiOutlineSaveAs size="24" color="red" />
                      </SavedVideoLogoContainer>
                      <SavedVideoHeading theme={isDarkTheme}>
                        Saved Videos
                      </SavedVideoHeading>
                    </SavedVideosBarContainer>
                    <SavedVideosListContainer>
                      {savedVideosList.map(eachVideo => (
                        <SavedVideoItem
                          videoDetails={eachVideo}
                          key={eachVideo.id}
                          themeDetails={isDarkTheme}
                        />
                      ))}
                    </SavedVideosListContainer>
                  </>
                )}
              </SavedVideoSectionContainer>
            </SavedVideoSectionMainContainer>
          </>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default SavedVideos

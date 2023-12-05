import WatchContext from '../../context/WatchContext'

import Header from '../Header'

import {
  NotFoundContainer,
  NotfoundImage,
  NotfoundHeading,
  NotfoundDescription,
} from './styledComponents'

const NotFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Header />
          <NotFoundContainer theme={isDarkTheme}>
            <NotfoundImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotfoundHeading theme={isDarkTheme}>
              Page Not Found
            </NotfoundHeading>
            <NotfoundDescription theme={isDarkTheme}>
              We are sorry, the page you requested could not be found.
            </NotfoundDescription>
          </NotFoundContainer>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFound

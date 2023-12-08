import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import WatchContext from './context/WatchContext'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  changeTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  saveVideo = videoDetails => {
    console.log(videoDetails)
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, videoDetails],
    }))
  }

  deleteVideo = videoId => {
    const {savedVideosList} = this.state
    const updatedSavedVideosList = savedVideosList.filter(
      eachVideo => eachVideo.id !== videoId,
    )
    this.setState({savedVideosList: updatedSavedVideosList})
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <WatchContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          savedVideosList,
          saveVideo: this.saveVideo,
          deleteVideo: this.deleteVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <NotFound component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App

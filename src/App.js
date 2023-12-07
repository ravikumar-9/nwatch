import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import WatchContext from './context/WatchContext'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  changeTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <WatchContext.Provider
        value={{isDarkTheme, changeTheme: this.changeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
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

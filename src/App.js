import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import WatchContext from './context/WatchContext'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

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
          <NotFound component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App

import React from 'react'

const WatchContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  changeTheme: () => {},
  saveVideo: () => {},
  deleteVideo: () => {},
})

export default WatchContext

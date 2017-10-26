import React, { Component } from 'react'
import TweetList from './tweets'

class App extends Component {
  render() {
    return (
      <div className="container">
        <TweetList />
      </div>
    )
  }
}

export default App;

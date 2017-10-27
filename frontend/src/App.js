import React, { Component } from 'react'
import TweetList from './components/tweetlist'
import { connect } from "react-redux"

class App extends Component {
  render() {
    if (this.props.isLoading) return <h2>Loading</h2>
    return (
      <div className="container">
        <TweetList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.authentification.isLoading
  }
}

export default connect(mapStateToProps)(App)

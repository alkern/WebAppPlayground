import React, { Component } from 'react'
import TweetList from './components/tweetlist'
import { connect } from "react-redux"
import TweetInput from "./components/tweetInput"

class App extends Component {
  render() {
    if (this.props.isLoading) return <h2>Loading</h2>
    if (this.props.isLoggedIn) var input = <TweetInput /> 
    return (
      <div className="container">
        {input}
        <TweetList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.authentification.isLoading,
    isLoggedIn: state.authentification.user != null
  }
}

export default connect(mapStateToProps)(App)
